<template>
  <div class="container">
    <div class="panel">
      <div class="title">{{ title }}</div>
      <div class="info">
        <slot></slot>
      </div>
      <div class="buttom">
        <el-button class="cancel" type="info" @click="edit_cancel">取消</el-button>
        <el-button class="confirm" type="success" @click="edit_confirm">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightModel",
  props: [],
  watch: {},
  data() {
    return {
      state: 'add', //add新增 edit编辑
      title: "新增/编辑",
    };
  },
  computed: {},
  methods: {
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
.container {
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
  .panel {
    position: absolute;
    width: 800px;
    height: 600px;
    background-color: white;
    left: calc(50% - 400px);
    top: calc(50% - 300px);
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ececec;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50px;
    overflow-y: scroll;
  }
  .buttom {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 10px;
    text-align: right;
    padding-right: 30px;
  }
}
</style>