<template>
  <div class="flowpath_table_contianer">
    <!-- <table class="table_style" width="600px">
        <tr class="tr" v-for="(item,i) in tableData" :key="i">
            <th class="th">相关负责人：{{item.name}}</th>
            <th class="th">进度：{{item.progress}}</th>
            <th class="th">时间：{{item.date}}</th>
        </tr>
    </table> -->
      <el-table :data="tableData" border style="width: 100%; fontsize: 12px" :show-header="false" >
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="name" label="相关负责人：" width="200" height="20"  :formatter="formatname">
      </el-table-column>
      <el-table-column prop="progress" label="进度：" width="200" height="20" :formatter="formatprogress">
      </el-table-column>
      <el-table-column prop="date" label="时间：" height="20" :formatter="formatdate">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "flowpath_table_contianer",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          progress: "无进度",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          progress: "无进度",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          progress: "无进度",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          progress: "无进度",
        },
      ],
    };
  },
  methods: {
        indexMethod(index) {
            return index * 1;
        },
        formatname(row, column, cellValue, index) {
            return "相关负责人："+row.name
        },
        formatprogress(row, column, cellValue, index){
            return "进度："+row.progress
        },
        formatdate(row, column, cellValue, index){
            return "时间："+row.date
        }
  },
};
</script>

<style lang="scss" scoped>
.flowpath_table_contianer {
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