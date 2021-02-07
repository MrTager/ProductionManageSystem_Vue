
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
const user = {
  "errorCode": 0,
  "message": "用户登录成功",
  "item": {
    "id": 2,
    "userName": "超级管理员",
    "serialCode": "99999",
    "mobile": "",
    "eMail": "",
    "role": {
      "id": 1,
      "name": "超级管理员",
      "remark": null,
      "addDateTime": "2020-12-16 10:08:49",
      "modifyDateTime": "2020-12-16 10:08:49",
      "permissions": [
        {
          "serialCode": "999"
        }
      ]
    }
  }
}

const userInfo = {
  "errorCode": 0,
  "message": "获取用户信息成功",
  "item": {
    "id": 2,
    "userName": "超级管理员",
    "serialCode": "99999",
    "mobile": "",
    "eMail": "",
    "role": {
      "id": 1,
      "name": "超级管理员",
      "remark": null,
      "addDateTime": "2020-12-16 10:08:49",
      "modifyDateTime": "2020-12-16 10:08:49",
      "permissions": [
        {
          "serialCode": "999"
        }
      ]
    }
  }
}

module.exports = [
  // user login
  // {
  //   url: '/vue-admin-template/user/login',
  //   type: 'post',
  //   response: config => {
  //     const { username } = config.body
  //     const token = tokens[username]

  //     // mock error
  //     if (!token) {
  //       return {
  //         code: 60204,
  //         message: 'Account and password are incorrect.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: token
  //     }
  //   }
  // },
  {
    url: '/user/login/',
    type: 'post',
    response: config => {
      //config : store arguments
      const { username,id } = config.body
      //const token = tokens[username]

      //no error
      let token = new Object();
      if(user.errorCode === 0){
        if(id === user.item.serialCode && username === user.item.userName){
          token = user.item.serialCode
        }else{
          token = undefined
        }
      }else{
        token = undefined
      }
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '用户名或密码错误!'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  // {
  //   url: '/vue-admin-template/user/info\.*',
  //   type: 'get',
  //   response: config => {
  //     const { token } = config.query
  //     const info = users[token]

  //     // mock error
  //     if (!info) {
  //       return {
  //         code: 50008,
  //         message: 'Login failed, unable to get user details.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: info
  //     }
  //   }
  // },

  {
    url: '/user/info/',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if(userInfo.errorCode === 0){
        return {
          code: 20000,
          data: userInfo.item
        }
      }else{
        return {
          code: 50008,
          message: '登录失败，无法获取用户信息！'
        }
      }
      // mock error
      // if (!info) {
      //   return {
      //     code: 50008,
      //     message: 'Login failed, unable to get user details.'
      //   }
      // }

      // return {
      //   code: 20000,
      //   data: info
      // }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
