<template> 
    <div class="contianer">
        <div class="search">
            <div class="searchInput">
                <el-input placeholder="输入物料代码" prefix-icon="el-icon-search" v-model="search.productName"></el-input>
            </div>
            <div class="searchSubmit">
                <el-button type="primary">查询</el-button>
            </div>
        </div>
        <div class="buttonGroup">
            <slot></slot>  
        </div>
    </div>
</template>

<script>


export default {
    name:'SearchFrame',
    data(){
        return {
            search:{
                productName:'',
            }
        }
    },

}
</script>

<style lang="scss" scoped>
    $contianerHeight:50px;
    .contianer{
        width: 100%;
        height: $contianerHeight;
        margin: 20px 0px;
        padding: 0 20px;
        .search{
            position: relative;
            width: 500px;
            height: $contianerHeight;
            float: left;
            &Input{
                position: absolute;
                width: 300px;
                height: 30px;
                margin-left: 50px;
            }
            &Submit{
                position: absolute;
                width: 50px;
                height: 30px;
                left: 370px;
            }
        }
        .buttonGroup{
            width: 400px;
            height: $contianerHeight;
            float: right;
            text-align: right;
            // .item{
            //     width: 100px;
            //     height: $contianerHeight;
            //     margin-right: 10px;
            //     background-color: cornflowerblue;
            // }
        }
    }
</style>