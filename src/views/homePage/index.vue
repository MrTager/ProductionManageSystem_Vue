<template>
  <div class="index">
      <h2>个人信息</h2>
      <div class="topContainer">
          <table class="infoTable">
              <tr>
                  <th v-for="(item,i) in userInfoData" :key="i">{{item.name}}</th>
              </tr>
              <tr>
                  <th v-for="(item,i) in userInfoData" :key="i">{{item.value}}</th>
              </tr>
          </table>
      </div>
      <h2>进行时项目</h2>
      <div class="topList">
          <ul>
              <li><a href="#">项目一</a></li>
              <li><a href="#">项目二</a></li>
              <li><a href="#">项目三</a></li>
          </ul>
      </div>
      <h2>项目列表</h2>
      <div class="bottomList">
          <ul>
              <li><a href="#">项目一</a></li>
              <li><a href="#">项目二</a></li>
              <li><a href="#">项目三</a></li>
          </ul>
      </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { bomimport } from '@/api/bom'
import { userInfo } from '@/api/user'
import axios from 'axios'

export default {
    name:'index',
    components:{
        
    },
    data(){
        return {
            userInformation:{},
        }
    },
    computed: {
        ...mapGetters([
            'allInfo'
        ]),
        userInfoData(){
            let _this = this;
            let array = new Array();
            for(let key in _this.allInfo){
                let obj = new Object();
                if(key === 'role'){
                    for(let key2 in _this.allInfo[key]){
                        let obj2 = new Object();
                        obj2['prop'] = key2;
                        obj2['name'] = key2;
                        obj2['value'] = _this.allInfo[key][key2];
                        array.push(obj2);
                    }
                }else{
                    obj['prop'] = key;
                    obj['name'] = key;
                    obj['value'] = _this.allInfo[key];
                    array.push(obj);
                }
            }
            console.log("解析后",array)
            return array
        }
    },
    methods:{

    },
    created(){
        let _this = this;
    }
}
</script>
<style lang="scss" scoped>
.index{

}
h2{
    margin-left: 2%;
}
ul{
    width: 100%;
}
li{
    width: 100%;
    list-style: none;
}
.infoTable{
    th{
        padding: 6px;
        margin: 0 0;
        color: rgb(109, 109, 109);
    }
}
.topContainer{
    width: 96%;
    height: 100px;
    margin-left: 2%;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid rgb(182, 182, 182);
}
.topList{
    width: 96%;
    height: 300px;
    margin-left: 2%;
    //background-color: aqua;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid rgb(182, 182, 182);
}
.bottomList{
    width: 96%;
    height: 350px;
    margin-left: 2%;
    //background-color: blue;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid rgb(182, 182, 182);
}
</style>