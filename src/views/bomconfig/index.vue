<template>
  <div class="BomConfig">
        <bomedit  v-if="show_page.edit" :editState="editState" @edit_cancel="edit_cancel" @edit_confirm="edit_confirm"></bomedit>
        <div class="search">
            <div class="searchInput">
                <el-input placeholder="搜索产品" prefix-icon="el-icon-search" v-model="bomdata.productName"></el-input>
            </div>
            <div class="searchSubmit">
                <el-button type="primary">查询</el-button>
            </div>
        </div>
        <!-- 配置相关信息 -->
        <div class="configInfo">
            <div class="product_info">
                <div class="product_table">
                    <product  :productData="bomdata.productInfo"></product>
                </div>
            </div>
            <div class="flowpath_info">
                <div class="flowpath_table">
                    <flowpath></flowpath>
                </div>
                <div class="flowpath_save">
                    <button class="flowpath_save_button">操作/保存</button>
                </div>
            </div>
        </div>
        <div class="tab_container">
            <div class="bomOption">
                <el-row>
                    <el-button  type="primary" size="medium">相关文件</el-button>
                    <el-button  type="primary" size="medium" @click="edit_info">新增</el-button>
                </el-row>
            </div> 
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane v-for="(item,i) in bomdata.itemTypeArr" :key="i" :label="item.name" :name="item.index">
                    <!-- 配置列表 -->
                    <div class="configList">
                        <info  @edit_info="edit_info" :tableInfo="bomdata.bom[item.type]"></info>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
  </div>
</template>
<script>
import { bomimport,bomCreate } from '@/api/bom'
import product from './product'
import flowpath from './flowpath'
import info from './info'
import bomedit from "./edit"
import axios from 'axios'

export default {
    name:'BomConfig',
    components:{
        "product":product,
        "flowpath":flowpath,
        "info":info,
        "bomedit":bomedit,
    },
    data(){
        return {
            show_page:{
                edit:false
            },
            bomdata:{
                productName:'',
                bomAllData:{},
                productInfo:{},
                bom:{},
                itemTypeArr:[{type:"hardware",name:"硬件",index:"first"},{type:"structure",name:"结构",index:"seconed"},{type:"package",name:"包装",index:"third"}]
            },
            activeName: "first",
            editState:'add' // add新增 edit编辑
        }
    },
    methods:{
        edit_cancel(){
            this.$set(this.show_page,"edit",false)
        },
        edit_confirm(){
            let _this = this;
            this.$set(this.show_page,"edit",false)
            if(this.editState === 'add'){
                bomCreate({
                })
                .then(function (response) {
                    if(response.code === 20000){
                        _this.$message({
                            message: response.data.message,
                            type: 'success'
                        })
                        _this.bomdata.bomAllData.item.BOM.nodes.push(response.data.item)
                        _this.dealData(_this.bomdata.bomAllData)
                    }else{
                        _this.$message.error(response.data.errorCode+response.data.message)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }

        },
        edit_info(){
            this.$set(this.show_page,"edit",true)
        },
        handleClick(tab, event) {
            //console.log(tab, event);
        },
        /**处理数据 */
        dealData(info){
            let _this = this;
            _this.$set(_this.bomdata,"bomAllData",info);
            //bom information
            const nodeArr = info.item.BOM.nodes;
            let bomObj = {
                "hardware":[],
                "structure":[],
                "package":[]
            };
            for(let key in bomObj){
                bomObj[key] =   nodeArr.filter((item) => { return item.itemType == key })
            }
            //tab information
            _this.$set(_this.bomdata,"bom",bomObj);
            //product information
            const bom = info.item.BOM
            let productInfo = new Object();
            productInfo["id"] = bom.id;
            productInfo["name"] = bom.name;
            productInfo["remark"] = bom.remark;
            productInfo["addDateTime"] = bom.addDateTime;
            productInfo["modifyDateTime"] = bom.modifyDateTime;
            productInfo["product"] = bom.product;
            productInfo["releaseNotes"] = bom.releaseNotes;
            productInfo["version"] = bom.version;
            productInfo["status"] = bom.status;
            _this.$set(_this.bomdata,"productInfo",productInfo);
        }
    },
    created(){
        let _this = this
        bomimport({
        })
        .then(function (response) {
            _this.dealData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>
<style lang="scss" scoped>
$configInfo_height : 250px;
$flowpath_info:600px;
.configInfo{
    position: relative;
    width: 100%;
    height: $configInfo_height;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    //background-color: darkgoldenrod;
}
.configList{
    width: 100%;
    height: 500px;
    //background-color: burlywood;
    //max-height: 400px;
    //overflow-x: scroll;
    //overflow-y: scroll;
}
.bomOption{
    position: relative;
    width: 100%;
    height: 50px;
    text-align: right;
    .bomfile{
        position: absolute;
        width: 100px;
        height: 50px;
    }
    .bomAddButton{
        position: absolute;
        width: 100px;
        height: 50px;
    }
}
.product_info{
    position: absolute;
    width: 500px;
    height: 100%;
    // background-color: rgb(255, 60, 60);
}
.flowpath_info{
    position: absolute;
    width: $flowpath_info;
    height: 100%;
    //background-color: rgb(94, 255, 0);
    left: 700px;
}
.product_table{
    position: absolute;
    width: 650px;
    height: 200px;
    top: 25px;
    left: 50px;
    overflow-y: scroll;
    overflow-x: hidden;
    // background-color: darkolivegreen;
}
.tab_container{
    position: relative;
    width: 95%;
    margin-top: 25px;
    left: 2.5%;
    margin-bottom: 50px;
    height: 500px;
    margin-bottom: 100px;
}
.flowpath_table{
    position: absolute;
    width: $flowpath_info;
    height: 200px;
    margin-top: 25px;
    //background-color: darkslateblue;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px solid #ccc;
}
.flowpath_save{
    position: absolute;
    width: 300px;
    height: 200px;
    margin-top: 25px;
    left:$flowpath_info;
    //background-color: rgb(255, 161, 161);
    &_button{
        width: 200px;
        height: 200px;
        
    }
}
.search{
    position: relative;
    width: 100%;
    height: 50px;
    &Input{
        position: absolute;
        width: 300px;
        height: 30px;
        margin-left: 50px;
        top: calc(50% - 13px);
    }
    &Submit{
        position: absolute;
        width: 50px;
        height: 30px;
        top: calc(50% - 16px);
        left: 370px;
    }
}
</style>