import request from '@/utils/request'

export function employees(data) {
  return request({
    url: '/list/employees',
    method: 'post',
    data
  })
}
