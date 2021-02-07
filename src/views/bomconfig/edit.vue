<template>
  <div class="bomedit">
    
    <div class="bomedit_panel">
      <div class="title">物料信息编辑/新增</div>
      <div class="info">
        <table class="table_style" width="600px">
          <tr class="tr">
            <th class="th tablePropName">产品代码：</th>
            <th class="th" colspan="3">
              <el-input v-model="tableData.code" placeholder="请输入内容"></el-input>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">产品名称：</th>
            <th class="th" colspan="3">
              <el-input v-model="tableData.name" placeholder="请输入内容"></el-input>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">软件负责人：</th>
            <th class="th" colspan="3">
              <el-select v-model="tableData.owner.Software" slot="prepend" placeholder="请选择">
                <el-option v-for="(item,i) in employeesList.Software" :key="i" :label="item.name" :value="i"></el-option>
              </el-select>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">硬件负责人：</th>
            <th class="th" colspan="3">
              <el-select v-model="tableData.owner.Hardware" slot="prepend" placeholder="请选择">
                <el-option v-for="(item,i) in employeesList.Hardware" :key="i" :label="item.name" :value="i"></el-option>
              </el-select>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">包装材料负责人：</th>
            <th class="th" colspan="3">
                <el-select v-model="tableData.owner.package" slot="prepend" placeholder="请选择">
                  <el-option v-for="(item,i) in employeesList.packing" :key="i" :label="item.name" :value="i"></el-option>
                </el-select>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">外观负责人：</th>
            <th class="th" colspan="3">
              <el-select v-model="tableData.owner.Structure" slot="prepend" placeholder="请选择">
                <el-option v-for="(item,i) in employeesList.Structure" :key="i" :label="item.name" :value="i"></el-option>
              </el-select>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">陪审组：</th>
            <th class="th" colspan="3">
                <el-input v-model="tableData.reviewer" placeholder="空" @click="showTransfer"></el-input>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">开始/结束时间：</th>
            <th class="th" colspan="3">
                <el-date-picker
                  v-model="tableData.time"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">产品经理：</th>
            <th class="th" colspan="3">
                <el-input v-model="tableData.manager" placeholder="请输入内容"></el-input>
            </th>
          </tr>
          <tr class="tr">
            <th class="th tablePropName">版本号：</th>
            <th class="th" colspan="3">
                <el-input v-model="tableData.version" placeholder="请输入内容"></el-input>
            </th>
          </tr>
        </table>
      </div>
      <div class="message">
        相关信息：
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>
      <div class="buttom">
          <el-button class="cancel" type="info" @click="edit_cancel">取消</el-button>
          <el-button class="confirm" type="success" @click="edit_confirm">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { employees } from '@/api/employees'


export default {
  name: "bomedit",
  props:[
    "editState"
  ],
  watch:{
    editState:{
      handler(newVal,oldVal){
        this.state = newVal
      },
      deep:true,
      immediate:true,
    }
  },
  data() {
    return {
      state:this.editState,//add新增 edit编辑
      textarea: "",
      input:"",
      tableData:{
        "code":'',
        "name":'',
        "time":{"start_time":"","end_time":""},
        "owner":{"Software":"","Hardware":"","Structure":"","packing":""},
        "reviewer":'',
        "manager":'',
        "state":'',
        "version":''
      },
      employeesData:[],
    };
  },
  computed:{
    employeesList(){
      let _this = this;
      if(_this.employeesData.length > 0){
        let object = {
          "Software":[],
          "Hardware":[],
          "Structure":[],
          "packing":[]
        }
        for(let i = 0;i < _this.employeesData.length;i++){
          switch(_this.employeesData[i].type){
            case "Software":
              object.Software.push(_this.employeesData[i])
              break;
            case "Hardware":
              object.Hardware.push(_this.employeesData[i])
              break;
            case "Structure":
              object.Structure.push(_this.employeesData[i])
              break;
            case "packing":
              object.packing.push(_this.employeesData[i])
              break;
          }
        }
        return object
      }else{
        let object = {
          "Software":[],
          "Hardware":[],
          "Structure":[],
          "packing":[]
        }
        return object
      }
    }
  },
  methods: {
        showTransfer(){
          
        },
        edit_cancel(){
          this.$emit("edit_cancel")
        },
        edit_confirm(){
          this.$emit("edit_confirm")
        }
  },
  created(){
    let _this = this;
    employees({
    })
    .then(function (response) {
       _this.employeesData = response.data.data
    })
    .catch(function (error) {
        console.log(error);
    });
  }
};
</script>

<style lang="scss" scoped>
.bomedit {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1003;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .title {
    position: absolute;
    width: 800px;
    height: 40px;
    top: -45px;
    left: calc(50% - 400px);
    text-align: center;
    font-size: 30px;
    color: rgb(255, 255, 255);
  }
  &_panel {
    position: absolute;
    width: 800px;
    height: 600px;
    background-color: white;
    left: calc(50% - 400px);
    top: calc(50% - 300px);
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ececec;
    
  }
  
}

.info {
  position: absolute;
  width: 100%;
  height: 300px;
  top: 50px;
  overflow-y: scroll;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.tablePropName{
  padding-left: 15px;
}
.table_style {
  margin: auto auto;
  border: 1px solid #ccc;
  color: rgb(54, 54, 54);
}
.tr {
  border: 1px solid #ccc;
}
.th {
  height: 49px;
  border: 1px solid #ccc;
  text-align: left;
}
.message {
  position: absolute;
  width: 80%;
  height: 300px;
  top: 380px;
  left: 10%;
}
.buttom{
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 10px;
    text-align: right;
    padding-right: 30px;
}
</style>