import request from '@/utils/request'



export function login(data) {
  return request({
    url: '/user/login/',
    method: 'post',
    data
  })
}


export function getInfo(serialCode) {
  return request({
    url: '/user/info/',
    method: 'get',
    params: { 'serial_code':serialCode }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
