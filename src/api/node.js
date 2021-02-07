import request from '@/utils/request'

export function nodeOperate(data){
  return request({
    url: '/bom/develop/operate/',
    method: 'post',
    data
  })
}
