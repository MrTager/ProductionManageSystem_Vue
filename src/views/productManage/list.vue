<template>
    <div class="container">
        <Right-Model v-if="modelState.model" :title="modelState.title" @close='modelClose' @confirm='modelConfirm'>
            <el-form :model="modelState.bindJson" :rules="modelState.rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <table class="table_style" width="600px">
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="产品名称" prop="name">
                            <el-input v-model="modelState.bindJson.name" :disabled="false" placeholder="请输入名称"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="备注" prop="remark">
                            <el-input v-model="modelState.bindJson.remark" :disabled="false" placeholder="请输入备注"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="大类" prop="mainType">
                            <el-select v-model="modelState.bindJson.mainType" clearable placeholder="请选择">
                                <el-option
                                v-for="item in modelState.mainTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="子类" prop="productType">
                            <el-select v-model="modelState.bindJson.productType" clearable placeholder="请选择">
                                <el-option
                                v-for="item in modelState.productTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="标签" prop="flag">
                            <el-input v-model="modelState.bindJson.flag" :disabled="false" placeholder="请输入标签"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="公司" prop="company">
                            <el-select v-model="modelState.bindJson.company" clearable placeholder="请输入公司">
                                <el-option
                                v-for="item in modelState.companyOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="产品代码：" prop="serialCode">
                            <el-input v-model="modelState.bindJson.serialCode" :disabled="false" placeholder="请输入产品代码"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="产品型号：" prop="model">
                            <el-input v-model="modelState.bindJson.model" :disabled="false" placeholder="请输入产品型号"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="产品规格：" prop="spec">
                            <el-input v-model="modelState.bindJson.spec" :disabled="false" placeholder="请输入产品规格"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="执行标准：" prop="standard">
                            <el-input v-model="modelState.bindJson.standard" :disabled="false" placeholder="请输入执行标准"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="商品69码：" prop="barcode">
                            <el-input v-model="modelState.bindJson.barcode" :disabled="false" placeholder="请输入商品69码"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="系列名称：" prop="seriesName">
                            <el-input v-model="modelState.bindJson.seriesName" :disabled="false" placeholder="系列名称"></el-input>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="所属项目：" prop="project">
                            <el-select v-model="modelState.bindJson.project" clearable placeholder="请选择所属项目">
                                <el-option
                                v-for="item in modelState.projectOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="颜色：" prop="color">
                            <el-select v-model="modelState.bindJson.color" clearable placeholder="请选择颜色">
                                <el-option
                                v-for="item in modelState.colorOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="关联产品：" prop="linkProduct">
                            <el-select v-model="modelState.bindJson.linkProduct" clearable placeholder="请选择关联产品">
                                <el-option
                                v-for="item in modelState.linkProductOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span style="margin-left:10px">
                                <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
                                <el-button type="success" size="mini" icon="el-icon-plus" circle></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
                            </span>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="版本关联：" prop="versionLink">
                            <el-select v-model="modelState.bindJson.versionLink" placeholder="请选择">
                                <el-option
                                v-for="item in modelState.versionLinkOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="产品状态：" prop="productState">
                            <el-select v-model="modelState.bindJson.productState" placeholder="请选择">
                                <el-option
                                v-for="item in modelState.productStateOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </th>
                </tr>
                <tr class="tr" >
                    <th class="th">
                        <el-form-item label="设计者：" prop="designer">
                            <el-input v-model="modelState.bindJson.designer" :disabled="false" placeholder="请输入设计者"></el-input>
                        </el-form-item>
                    </th>
                </tr>
            </table>
            </el-form>
        </Right-Model>
        <Search-Frame>
            <el-button type="primary" @click="createProduct">创建产品</el-button>
        </Search-Frame>
        <div class="tableContainer">
            <el-table :data="productList" style="width: 100%" row-key="id" @row-dblclick="handleProduct" min-height="500" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column label="产品代码" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.serialCode }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="产品型号" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.model }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="id" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="产品名称" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="备注" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.remark }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="添加时间" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.addDateTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="修改时间" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.modifyDateTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="大类" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.mainType }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="子类" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.productType }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="标签" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.flag }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="公司" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.company }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="产品规格" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.spec }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="产品标准" min-width="40">
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.standard }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"  @click.native.stop>编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"  @click.native.stop>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pagesize"
                layout="total, prev, pager, next"
                :total="productTotal">
                </el-pagination>
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { bomimport } from '@/api/bom'
import { createProduct } from '@/api/bom'
import  SearchFrame  from '@/components/SearchFrame'
import RightModel from '@/components/Model/RightModel'
import axios from 'axios'

export default {
    name:'productCreate',
    components:{
        "Search-Frame":SearchFrame,
        "Right-Model":RightModel
    },
    computed:{
        ...mapGetters([
           'productList',
           'productTotal',
           'productInfo'  
        ])
    },
    data(){
        return {
            tableData:[],
            currentPage: 1,
            pagesize: 10,
            total: 0,
            modelState:{
                model:false,
                title:'新增',
                type:'add', //add update
                bindJson:{"id":0,"name":"","remark":"","mainType":"","productType":"","flag":"","company":"","serialCode":"","model":"","spec":"","standard":"","barcode":"","seriesName":"","project":"","color":"","linkProduct":"","versionLink":"","productState":"","designer":""},
                versionLinkOptions:[{value: 'base',label: '基础版本'}, {value: 'related',label: '关联产品'}, {value: 'fixed',label: '固定封样'}],productStateOptions:[{value: 'develop',label: '开发'}, {value: 'proofs',label: '正样'}, {value: 'produce',label: '量产'}, {value: 'disable',label: '停滞'}],
                mainTypeOptions:[],
                productTypeOptions:[],
                companyOptions:[],
                projectOptions:[],
                colorOptions:[],
                linkProductOptions:[],
                rules: {
                    serialCode:[
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min: 8, max: 8, message: '请输入8位正确的物料代码', trigger: 'blur' }
                    ],
                    model:[
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
                    ],
                    versionLink:[
                        { required: true, message: '请选择版本关联', trigger: 'change' }
                    ],
                    productState:[
                        { required: true, message: '请选择产品规格', trigger: 'change' }
                    ],
                }
            }
        }
    },
    methods:{
        modelClose(){
            let _this = this;
            _this.$refs['ruleForm'].resetFields();
            this.modelState.model = false
        },
        modelConfirm(){
            let _this = this;
            this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
                _this.modelSaveData();
                _this.$refs['ruleForm'].resetFields();
                this.modelState.model = false;
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        modelSaveData(){
            let _this = this;
            if(_this.modelState.type == 'add'){ //add product
                _this.$store.dispatch('product/createProduct',_this.modelState.bindJson).then((res) => {
                    _this.handleCurrentChange(1);
                    _this.$notify({
                        title: '成功',
                        message: '新增产品成功!',
                        type: 'success'
                    });
                    _this.initBindJson();
                }).catch((err) => {
                })
            }else if(_this.modelState.type == 'update'){
                _this.$store.dispatch('product/updataProduct',_this.modelState.bindJson).then((res) => {
                    _this.handleCurrentChange(1);
                    _this.$notify({
                        title: '成功',
                        message: '更新产品成功!',
                        type: 'success'
                    });
                    _this.initBindJson();
                }).catch((err) => {
                })
            }
        },
        createProduct(){
            let _this = this;
            _this.modelState.title = '新增';
            _this.modelState.type = 'add';
            this.modelState.model = true
        },
        handleSizeChange: function (size) {
            this.pagesize = size;
        },
        handleCurrentChange: function (currentPage) {
            let _this = this;
            _this.currentPage = currentPage;
            //this.loadingStoreData();
            _this.$store.dispatch('product/getProductList',{'page':_this.currentPage,'rows':_this.pagesize}).then((res) => {
            //_this.loadingStoreData()
            }).catch(() => {
            })
        },
        handleEdit(index,data){
            let _this = this;
            _this.initBindJson(data)
            _this.modelState.title = '更新';
            _this.modelState.type = 'update';
            _this.modelState.model = true
        },
        initBindJson(data){
            let _this= this;
            let _bindJson = _this.modelState.bindJson;
            if(data !== undefined){
                for(let key_1 in _bindJson){
                    for(let key_2 in data){
                        if(key_2 === key_1){
                            if(typeof data[key_2] === "string"){
                                _bindJson[key_1] = data[key_2].replace(/\s*/g,"");
                            }else{
                                _bindJson[key_1] = data[key_2]
                            }
                        }
                    }
                }
                _this.$set(_this.modelState,"bindJson",_bindJson)
            }else{
                for(let key in _bindJson){
                    if(key === 'id'){
                        _bindJson[key] = 0
                    }else{
                        _bindJson[key] = "";
                    }
                }
            }
        },
        handleDelete(index,data){
            let _this = this;
            _this.initBindJson(data)
            this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _this.$store.dispatch('product/deleteProduct',_this.modelState.bindJson).then((res) => {
                    _this.handleCurrentChange(1);
                    _this.$notify({
                        title: '成功',
                        message: '删除产品成功!',
                        type: 'success'
                    });
                    _this.initBindJson();
                }).catch((err) => {
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        handleProduct(row, column, event){
            let _this = this;
            _this.$store.dispatch('product/getProductInfo',row).then((res) => {
                this.$router.push({ path: 'info' })
            }).catch(() => {
            })
        },
        //loadingTableData
        loadingStoreData(){
            let _this = this;
            return new Promise((resolve,reject)=>{
                _this.tableData = [];
                _this.total = _this.productList.length
                _this.productList.slice((_this.currentPage-1)*_this.pagesize,this.productList.length-1).length > _this.pagesize ?
                _this.tableData = _this.productList.slice((_this.currentPage-1)*_this.pagesize,_this.currentPage*_this.pagesize) :
                _this.tableData = _this.productList.slice((_this.currentPage-1)*_this.pagesize,this.productList.length)
                _this.total = _this.productTotal
                resolve();
            })
        }
    },
    mounted(){
        let _this = this;
        _this.$store.dispatch('product/getProductList',{'page':1,'rows':10}).then((res) => {
            //_this.loadingStoreData()
        }).catch(() => {
        })
        
    },
    created(){
        let _this = this
        
    }
}
</script>
<style lang="scss" scoped>
.container{
    // .tableContainer{
    //     width: 100%;
    //     height: auto;
    // }
    .pagination{
        margin: 20px 0px;
    }
}

.buttonGroup{
    text-align: left;
    margin: 20px auto;
    padding: 0 50px;
}
th{
    text-align: left;
}
// .topContainer{
//     width: 98%;
//     height: 400px;
//     margin-left: 1%;
//     margin-top: 10px;
//     border: 1px solid rgb(187, 187, 187);
//     .left{
//         width: 60%;
//         height: 100%;
//         float: left;
//         border: 1px solid rgb(187, 187, 187);

//     }
//     .right{
//         width: 40%;
//         height: 100%;
//         float: left;
//         border: 1px solid rgb(187, 187, 187);
//     }
//     .list{
//         width: 200px;
//         height: 200px;
//         background-color: lightblue;
//     }
// }
// .footContainer{
//     width: 98%;
//     height: 300px;
//     margin-left: 1%;
//     border: 1px solid rgb(187, 187, 187);
// }
</style>