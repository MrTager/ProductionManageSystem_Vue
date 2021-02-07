import { nodeOperate } from '@/api/node'
import { getToken } from '@/utils/auth' // get token from cookie

const state = {

}

const mutations = {

}

const actions = {
    createNode({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve, reject)=>{
                nodeOperate({"operate":"create","data":JSON.stringify(data),"user_id":userId})
                .then(response => {
                    resolve();
                })
                .catch(err => {
                    reject(err)
                })
            }) 
        }else{
            alert("token失效,请重新登录")
        }
    },
    editNode({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve, reject)=>{
                nodeOperate({"operate":"update","data":JSON.stringify(data),"user_id":userId})
                .then(response => {
                    resolve();
                })
                .catch(err => {
                    reject(err)
                })
            }) 
        }else{
            alert("token失效,请重新登录")
        }
    },
    deleteNode({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve, reject)=>{
                nodeOperate({"operate":"delete","data":JSON.stringify(data),"user_id":userId})
                .then(response => {
                    resolve();
                })
                .catch(err => {
                    reject(err)
                })
            }) 
        }else{
            alert("token失效,请重新登录")
        }
    }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

