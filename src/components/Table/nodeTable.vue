<template>
  <div class="bomInfo_container">
    <el-table :data="formattingData" style="width: 100%" row-key="name" height="500" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column label="物料代码" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name.slice(1,9) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="ID" min-width="50">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="物料名称" min-width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" min-width="40">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.addDateTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.modifyDateTime }}</span>
        </template>
      </el-table-column>
          <el-table-column label="category" min-width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.category }}</span>
        </template>
      </el-table-column>
          <el-table-column label="relatedBOM" min-width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.relatedBOM }}</span>
        </template>
      </el-table-column>
          <el-table-column label="itemType" min-width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.itemType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "nodeTable",
  props:[
    "tableInfo"
  ],
  watch:{
    tableInfo:{
      handler(newVal,oldVal){
        this.oldData = newVal
        this.commitData = newVal;
      }
    }
  },
  data() {
    return {
      oldData:this.tableInfo,
      commitData:[]
    };
  },
  computed:{
    formattingData(){
      if(this.oldData !== undefined){
        let data = [];
        this.dealData(this.oldData,(res)=>{
          data = res
        })
        return data
      }else{
        let data = []
        return data;
      }
    }
  },
  methods: {
    dealData(val,func){
      let _this = this;
      //先筛选最上层的
      let information = val
      if(val.length > 0){
        _this.sortData(information,(res)=>{
        information = res;
        let newArr = information.reverse();
        this.sortData_2(newArr,(res2)=>{
          func(res2)
        });
      })
      }else{
        return
      }
     
      
    },
    //第一层递归排序
    sortData(information,func){

      let _this = this;
      let bool = true
      let arr = information
      let newArr = arr;
      for(let i = 0;i < arr.length; i++){
        //let name = arr[i].name.slice(1,9)
        let name = newArr[i].id
        if(arr[i].parentId == "0"){
          if(i == arr.length-1){
            bool = false
            func(arr)
          }
        }else{
          for(let j=0;j<newArr.length;j++){
            //let name_2 = newArr[j].name.slice(1,9)
            let name_2 = newArr[j].id
            if(name_2 == arr[i].parentId){
              if(i<j){
                arr[i] = arr.splice(j, 1, arr[i])[0];
                break;
              }else{
                if(j = newArr.length-1){
                  bool = false
                  func(arr)
                }
              }
            }
          }
          break
        }
      }
      if(bool){
        return _this.sortData(arr)
      }else{
        return
      }
    },
    //第二层递归排序
    sortData_2(arr,func){
      //debugger
      let _this = this;
      //console.log(JSON.stringify(arr))
      let finallyArr = [];
      let temporaryArr = [];
      for(let i = 0;i < arr.length; i++){
        if(arr[i].parentId !== "0"){
          if(i+1 <= arr.length){
            if(arr[i].parentId === arr[i+1].parentId){
              temporaryArr.push(arr[i]);
            }else{
              if(i-1 >= 0){
                if(arr[i].parentId == arr[i-1].parentId){
                  temporaryArr.push(arr[i]);
                  arr[i+1]["children"] = temporaryArr;
                  temporaryArr = [];
                }else{
                  i++
                }
              }else{
                temporaryArr.push(arr[i]);
                arr[i+1]["children"] = temporaryArr;
                temporaryArr = [];
              }
              
            }
          }else{
            return
          }
        }else{
          //截出数组未遍历部分
          //arr = arr.splice(i,arr.length)
          //_this.sortData_2(arr)
          finallyArr.push(arr[i])
          finallyArr.reverse();
        }
      }
      func(finallyArr)
    },
    indexMethod(index) {
      return index * 1;
    },
    formatname(row, column, cellValue, index) {
      return "相关负责人：" + row.name;
    },
    formatprogress(row, column, cellValue, index) {
      return "进度：" + row.progress;
    },
    formatdate(row, column, cellValue, index) {
      return "时间：" + row.date;
    },
    handleEdit(index, data){
        this.$emit("edit_info")
    },
    handleDelete(index, data){
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.bomInfo_container {
  width: 100%;
  height: 100%;
  .table_style {
    border: 1px solid #ccc;
  }
  .tr {
    border: 1px solid #ccc;
  }
  .th {
    border: 1px solid #ccc;
  }
}
</style>