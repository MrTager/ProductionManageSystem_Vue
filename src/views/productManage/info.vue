<template> 
    <div class="contianer">
         <Right-Model v-if="modelState.model" :title="modelState.title" @close='modelClose' @confirm='modelConfirm'>
             <!-- createBOM -->
             <div>
                <el-form :model="modelState.bindJson" :rules="modelState.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <table class="table_style" width="600px">
                    <tr class="tr" >
                        <th class="th">
                            <el-form-item label="名称" prop="name">
                                <el-input v-model="modelState.bindJson.name"  placeholder="请输入名称"></el-input>
                            </el-form-item>
                        </th>
                    </tr>
                    <tr class="tr" >
                        <th class="th">
                            <el-form-item label="备注" prop="remark">
                                <el-input v-model="modelState.bindJson.remark"  placeholder="请输入备注"></el-input>
                            </el-form-item>
                        </th>
                    </tr>
                    <tr class="tr" >
                        <th class="th">
                            <el-form-item label="版本说明" prop="releaseNotes">
                                <el-input v-model="modelState.bindJson.releaseNotes"  placeholder="请输入版本说明"></el-input>
                            </el-form-item>
                        </th>
                    </tr>
                    <tr class="tr" >
                        <th class="th">
                            <el-form-item label="版本" prop="version">
                                <el-input v-model="modelState.bindJson.version"  placeholder="请输入版本"></el-input>
                            </el-form-item>
                        </th>
                    </tr>
                </table>
            </el-form>
             </div>
         </Right-Model>
        <Search-Frame>
            <el-button type="info" @click="backPage">返回上一页</el-button>
            <el-button type="primary" @click="createBom" :disabled="buttonFlag.createBom">创建BOM信息</el-button>
            <el-button type="warning" @click="importFile">文件导入</el-button>
        </Search-Frame>
        <div class="box">
            <!-- productInfo -->
            <div class="boxTitle">
                <div class="title"><span>当前产品信息</span></div>
                <!-- <div class="buttonGroup"></div> -->
            </div>
            <div class="boxContianer">
                <ul v-for="(item,i) in productSinpleInfo" :key="i">
                    <li v-for="(val,key,index) in item" :key="index"><span>{{key}}:</span><span>{{val}}</span></li>
                </ul>
            </div>
        </div>
        <div class="box">
            <!-- bomInfo -->
            <div class="boxTitle">
                <div class="title">
                    <span>bom信息</span>
                    <span class="buttonGroup">
                        <el-button type="primary" :disabled="buttonFlag.editBom" @click="editBom" >编辑BOM</el-button>
                        <el-button type="danger" :disabled="buttonFlag.editBom" @click="deleteBom">删除BOM</el-button>
                    </span>
                </div>
                
            </div>
            <div class="boxContianer">
                <ul v-for="(item,i) in productBomInfo" :key="i">
                    <li v-for="(val,key,index) in item" :key="index"><span>{{key}}:</span><span>{{val}}</span></li>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="boxTitle">
                <div class="title">
                    <span>bom节点表格</span>
                    <span class="buttonGroup">
                        <el-button type="primary" :disabled="buttonFlag.createNode" @click="createNode">创建节点</el-button>
                    </span>
                </div>
            </div>
            <div class="boxContianer">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane v-for="(item,i) in bomdata.itemTypeArr" :key="i" :label="item.name" :name="item.index">
                        <div class="configList">
                            <Node-Table :tableInfo="bomdata.bom[item.type]"></Node-Table>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="box">
            <!-- bomNodeTable -->
            <div class="boxTitle">
                <div class="title"><h2>相关文件</h2></div>
                <div class="buttonGroup"></div>
            </div>
            <div class="boxContianer">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import  SearchFrame  from '@/components/SearchFrame'
import NodeTable from '@/components/Table/nodeTable'
import RightModel from '@/components/Model/RightModel'
import { getSessionStorage } from '@/utils/auth'

export default {
    name:'info',
    components:{
        "Search-Frame":SearchFrame,
        "Node-Table":NodeTable,
        "Right-Model":RightModel
    },
    computed:{
        ...mapGetters([
           'productInfo'
        ]),
    },
    data(){
        return {
            productSinpleInfo:[],
            productBomInfo:[],
            bomdata:{
                productName:'',
                bomAllData:{},
                productInfo:{},
                bom:{},
                itemTypeArr:[{type:"hardware",name:"硬件",index:"first"},{type:"structure",name:"结构",index:"seconed"},{type:"package",name:"包装",index:"third"},{type:"other",name:"其他",index:"fourth"}]
            },
            activeName: "first",
            buttonFlag:{
                createBom:false,
                editBom:false,
                createNode:false,
            },
            modelState:{
                model:false,
                title:'新增',
                type:'createBom', //createBom edit
                bindJson:{
                    "id":0,
                    "name":"",
                    "remark":"",
                    "product":"",
                    "releaseNotes":"",
                    "version":""
                }
            }
        }
    },
    methods:{
        backPage(){
            this.$router.back(-1)
        },
        modelClose(){
            this.modelState.model = false
        },
        modelConfirm(){
            let _this = this;
            if(this.modelState.type === 'createBom'){
                const { id,serialCode } = this.productInfo
                this.modelState.bindJson.id = id;
                this.modelState.bindJson.product = serialCode;
                //get serverdata
                this.$store.dispatch("bom/createBom",this.modelState.bindJson)
                .then(res => {
                    _this.$store.dispatch('product/getProductInfo',_this.productInfo).then((res) => {
                        _this.updateProductFile(_this.productInfo);
                        _this.$notify({
                            title: '成功',
                            message: '创建BOM成功!',
                            type: 'success'
                        });
                    }).catch((err) => {})
                })
                .catch(err => {

                })
            }else{

            }
            this.modelState.model = false
        },
        createBom(){
            this.modelState.model = true
            this.modelState.title = '创建BOM';
            this.$set(this.modelState,"type","createBom")
            this.initBomBindJson()
        },
        editBom(){
            this.modelState.model = true
            this.modelState.title = '编辑BOM';
            this.$set(this.modelState,"type","editBom")
            this.initBomBindJson()
        },
        deleteBom(){
            let _this= this
            this.$set(this.modelState,"type","deleteBom")
            this.initBomBindJson()
            this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch("bom/deleteBom",this.modelState.bindJson)
                .then(res => {
                    _this.$store.dispatch('product/getProductInfo',_this.productInfo).then((res) => {
                        _this.updateProductFile(_this.productInfo);
                        _this.$notify({
                            title: '成功',
                            message: '删除BOM成功!',
                            type: 'success'
                        });
                    }).catch((err) => {})
                })
                .catch(err => {

                })
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        createNode(){

        },
        editNode(){},
        deleteNode(){},
        initBomBindJson(){
            let _bindJson = this.modelState.bindJson
            let _productInfo = this.productInfo;
            if(this.modelState.type === 'createBom'){
                for(let key in _bindJson){
                    switch(key){
                        case "id":
                            break;
                        case "product":
                            break;
                        default:
                            _bindJson[key] = ""
                            break;
                    }
                }
            }else if(this.modelState.type === 'editBom' || 'deleteBom'){
                for(let key_1 in _bindJson){
                    for(let key_2 in _productInfo.BOM){
                        if(key_1 === key_2){
                            _bindJson[key_1] = _productInfo.BOM[key_2]
                        }
                    }
                }
                this.$set(this.modelState,"bindJson",_bindJson);
            }
        },
        importFile(){},
        handleClick(tab, event) {
            //console.log(tab, event);
        },
        initData(){
            this.productSinpleInfo = [];
            this.productBomInfo = [];
        },
        updateProductFile(data){
            let _this = this;
            this.initData();
            const productData = data;
            const productInfoProp = ["id","name","remark","addDateTime","modifyDateTime","mainType","productType","flag","company","serialCode","model","spec","standard","barcode","seriesName","project","color","linkProduct","versionLink","productState","designer"]
            const productBomProp = ["id","name","remark","addDateTime","modifyDateTime","product","releaseNotes","version","status"]
            let newProductInfo = productInfoProp.map((item,index,array)=>{
                for(let key in productData){
                    if(item === key){
                        let obj = new Object();
                        obj[key] = productData[key]
                        return obj
                    }
                }
            })
            this.productSinpleInfo = newProductInfo;
            let bomObj = {
                "hardware":[],
                "structure":[],
                "package":[],
                "other":[],
            };
            if(productData.BOM !== null){
                _this.buttonFlag.createBom = true
                _this.buttonFlag.editBom = false
                _this.buttonFlag.createNode = false
                let newBomInfo = productBomProp.map((item,index,array)=>{
                    for(let key in productData.BOM){
                        if(item === key){
                            let obj = new Object();
                            obj[key] = productData.BOM[key]
                            return obj
                        }
                    }
                })
                this.productBomInfo = newBomInfo;
                // // has nodes
                if(productData.BOM.nodes.length === 0){

                }else{
                    for(let key in bomObj){
                        bomObj[key] =   productData.BOM.nodes.filter((item) => { return item.itemType == key })
                    }
                }
                

                //tab information
                _this.$set(_this.bomdata,"bom",bomObj);
            }else{
                _this.buttonFlag.createBom = false
                _this.buttonFlag.editBom = true
                _this.buttonFlag.createNode = true
                this.productBomInfo = [];
                _this.$set(_this.bomdata,"bom",bomObj);
            }

        },
    },
    created(){
        let _this = this;
        //refresh data
        const sessionProductInfo = getSessionStorage("productInfo");
        _this.$store.dispatch('product/getProductInfo',JSON.parse(sessionProductInfo)).then((res) => {
            _this.updateProductFile(JSON.parse(getSessionStorage("productInfo")));
        }).catch(() => {
        })
    }
}
</script>

<style lang="scss" scoped>
span {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}
$boxTitleHeight:50px;
    .contianer{
        width: 100%;
        .box{
            &Title{
                width: 98%;
                height: $boxTitleHeight;
                margin-left: 1%;
                .title{
                    width: 95%;
                    height: 100%;
                    margin-left: $boxTitleHeight;
                    text-align: left;
                    float: left;
                    //line-height: $boxTitleHeight;
                    span{
                        font-size: 20px;
                        line-height: $boxTitleHeight;
                        font-weight: bold;
                    }
                }
                .buttonGroup{
                    //width: 800px;
                    height: 100%;
                    float: right;
                    text-align: right;
                }
            }
            &Contianer{
                width: 98%;
                min-height: 100px;
                margin-left: 1%;
                border: 1px solid rgb(182, 182, 182);
                .configList{
                    width: 100%;
                    height: 500px;
                }
                ul{
                    margin:0px;
                    padding:0px;
                    li{
                        width: 200px;
                        list-style: none;
                    }
                }
            }
        }
    }
</style>