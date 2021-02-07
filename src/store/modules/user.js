import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userName: '',
    avatar: '',
    jobNumber:'',
    allInfo:{},
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_JOBNUMBER:(state, jobNumber) => {
    state.jobNumber = jobNumber
  },
  SET_ALLINFO:(state,allInfo) => {
    state.allInfo = allInfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { serial_code, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ 'serial_code': serial_code, 'password': password  }).then(response => {
        const { item } = response
        commit('SET_TOKEN', item)
        setToken(item)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    console.log("serialCode",state.token)
    const _token = state.token
    const { serialCode } = _token
    return new Promise((resolve, reject) => {
      
      getInfo(serialCode).then(response => {                        
        const { item } = response
        console.log("item",item)
        if (!item) {
          return reject('验证失败，请重新登录！')
        }

        const { userName,serialCode } = item
        const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
        //const avatar = ''
        commit('SET_NAME', userName)
        commit('SET_AVATAR', avatar)
        commit('SET_JOBNUMBER',serialCode)
        commit('SET_ALLINFO',item)

        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {

      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()

      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

