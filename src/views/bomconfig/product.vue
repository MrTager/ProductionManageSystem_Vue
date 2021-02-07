<template>
  <div class="product_table_contianer">
    <table class="table_style" width="600px">
        <tr class="tr" v-for="(value,key,index) in tableData" :key="index">
            <th class="th">{{key}}</th>
            <th class="th">
              <el-input
                placeholder="请输入内容"
                :value="value"
                :readonly="true">
              </el-input>
            </th>
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'product_table_contianer',
  props:[
    "productData"
  ],
  watch:{
    productData:{
      handler(newVal,oldVal){
        this.tableData = newVal
      },
      immediate:true,
      deep:true
    }
  },
  data() {
    return {
      tableData:this.productData,
    };
  },
  methods:{
  },
  created(){
  }
};
</script>

<style lang="scss" scoped>
table{
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.product_table_contianer {
    width: 100%;
    height: 100%;
    color:rgb(114, 114, 114);
    .table_style{
      border: 1px solid #ccc;
    }
    .tr{
      border: 1px solid #ccc;
    }
    .th{
      height: 49px;
      border: 1px solid #ccc;
    }
}

</style>