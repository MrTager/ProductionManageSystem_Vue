<template>
  <div class="container">
    <div class="panel">
      <div class="title"><div class="title_text">{{titleText}}</div><div class="close"></div></div>
      <!-- <i class="el-icon-close" @click="close()"></i> -->
      <div class="info">
        <slot></slot>
        <div class="buttom">
            <el-button class="cancel" type="info" @click="close">取消</el-button>
            <el-button class="confirm" type="success" @click="confirm">保存</el-button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "rightModel",
  props: ['title'],
  watch: {
      title:{
        handler(newVal,oldVal){
            
        },
        immediate:true,
        deep:true
      }
  },
  data() {
    return {
      state: 'add', //add新增 edit编辑
      titleText: this.title,
    };
  },
  computed: {},
  methods: {
    close(){
        this.$emit('close')
    },
    confirm(){
        this.$emit('confirm')
    },
    edit_cancel() {
      this.$emit("edit_cancel");
    },
    edit_confirm() {
      this.$emit("edit_confirm");
    },
  },
  created() {
    let _this = this;
  },
};
</script>

<style lang="scss" scoped>
$panelWidth:700px;
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1003;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modelAnimation 0.3s;
  .panel {
    position: absolute;
    width: $panelWidth;
    height: 100%;
    background-color: white;
    right: 0px;
    top: 0px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ececec;
    animation: modelPanelAnimation 0.3s;
        .title{
            position: absolute;
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            &_text{
                position: absolute;
                width: calc(100% - 50px);
                height: 50px;
                font-size: 2rem;
                color: rgb(82, 82, 82);
            }
            .close{
                position: absolute;
                width: 50px;
                height: 50px;
                right: 20px;
            }
        }
        .info {
            position: absolute;
            width: 100%;
            height: calc(100% - 50px);
            top: 50px;
             overflow-y: scroll;
        }

  }

  .buttom {
    position: absolute;
    width: 100%;
    height: 50px;
   // bottom: 10px;
    text-align: right;
    padding-right: 30px;
  }
}
@keyframes modelAnimation {
    0% {background-color: rgba(0, 0, 0, 0)}
    100% {background-color: rgba(0, 0, 0, 0.5)}
}
@keyframes modelPanelAnimation {
    0% {right: -$panelWidth;}
    100% {right: 0px;}
}
</style>