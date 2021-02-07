const Mock = require('mockjs')
module.exports = [
    //新建bom
    {
        url: '/bom/develop/node/operate/',
        type: 'post',
        response: config => {
          return {
            code: 20000,
            data: newBom
          }
        }
    }
]

  
let newBom = Mock.mock({
  "errorCode": 0,
  "message": "新增产品BOM项目信息成功",
  "params": "create",
  "item": {
    "id": "@increment(1)",
    "name": `[@natural(13000000,13999999)]`,
    "remark": "",
    "addDateTime": "",
    "modifyDateTime": "",
    "No": "",
    "material": "192",
    "groupId": 0,
    "canReplace": false,
    "parentId": "0",
    "itemType": "hardware",
    "count": "7",
    "pcbMark": "C2, C4, C5, C6, C7, C8, C9",
    "keyItem": false,
    "category": "component",
    "relatedBOM": "2"
  }
})