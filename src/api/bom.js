import request from '@/utils/request'

export function bomimport(data) {
  return request({
    url: '/bom/file/import',
    method: 'post',
    data
  })
}

export function bomOperate(data){
  return request({
    url: '/bom/develop/operate/',
    method: 'post',
    data
  })
}
export function createProduct(data){
  return request({
    url: '/bom/develop/operate/',
    method: 'post',
    data
  })
}