import { productList,productInfo,productOperate } from '@/api/product'
import { getToken,setSessionStorage,getSessionStorage } from '@/utils/auth' // get token from cookie

const state = {
    productList:[],
    productTotal:1,
    productInfo:{}
}

const mutations = {
    SET_PRODUCTLIST:(state,productList)=>{
        state.productList = productList
    },
    SET_PRODUCTTOTAL:(state,total)=>{
        state.productTotal = total
    },
    SET_PRODUCTINFO:(state,productInfo)=>{
        state.productInfo = productInfo;
        setSessionStorage("productInfo",JSON.stringify(productInfo))
    }
}

const actions = {
    getProductList({commit},data){
        const { page,rows } = data
        return new Promise((resolve, reject) => {
            productList({'page':page,'rows':rows})
            .then(response => {
                commit('SET_PRODUCTLIST',response.rows)
                commit('SET_PRODUCTTOTAL',response.total)
                resolve();
            })
            .catch(err => {
                reject(err)
            })
        }) 
    },
    getProductInfo({commit},info){
        
        const { serialCode,id } = info
        return new Promise((resolve,reject)=>{
            productInfo({"serial_code":serialCode,"product_id":id})
            .then(response => {
                commit("SET_PRODUCTINFO",response.item)
                resolve();
            }).catch(err => {
                reject(err)
            })
        })
    },
    setProductInfo({commit},data){
        return new Promise((resolve,reject)=>{
            commit("SET_PRODUCTINFO",data);
            resolve();
        })
    },
    createProduct({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve,reject)=>{
                productOperate({'operate':'create','data':JSON.stringify(data),'user_id':userId})
                .then(response => {
                    productList({'page':1,'rows':10})
                    .then(response => {
                        commit('SET_PRODUCTLIST',response.rows,response.total)
                        resolve(response);
                    })
                    .catch(err => {
                        reject(err)
                    })
                }).catch(err => {
                    reject(err)
                })
            })
        }else{

        }
        
        
    },
    deleteProduct({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve,reject)=>{
                productOperate({'operate':'delete','data':JSON.stringify(data),'user_id':userId})
                .then(response => {
                    productList({'page':1,'rows':10})
                    .then(response => {
                        commit('SET_PRODUCTLIST',response.rows,response.total)
                        resolve();
                    })
                    .catch(err => {
                        reject(err)
                    })
                }).catch(err => {
                    reject(err)
                })
            })
        }else{

        }
    },
    updataProduct({commit},data){
        const hasToken = getToken()
        if(hasToken){
            const userId = JSON.parse(hasToken).id
            return new Promise((resolve,reject)=>{
                productOperate({'operate':'update','data':JSON.stringify(data),'user_id':userId})
                .then(response => {
                    productList({'page':1,'rows':10})
                    .then(response => {
                        commit('SET_PRODUCTLIST',response.rows,response.total)
                        resolve();
                    })
                    .catch(err => {
                        reject(err)
                    })
                }).catch(err => {
                    reject(err)
                })
            })
        }else{

        }
  
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

