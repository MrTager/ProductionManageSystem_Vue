const Mock = require('mockjs')
module.exports = [
    //新建bom
    {
        url: '/bom/develop/operate/',
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
    "message": "新增产品BOM信息成功",
    "params": "create",
    "item": {
      "id": '@increment(1)',
      "name": `${'@cword(1,4)'}开关（智+）`,
      "remark": "",
      "addDateTime": "",
      "modifyDateTime": "",
      "product": {
        "id": '@increment(1)',
        "name": "",
        "remark": "",
        "addDateTime": "2020-12-21 13:02:38",
        "modifyDateTime": "2020-12-21 13:02:38",
        "mainType": "",
        "productType": "",
        "flag": "",
        "company": "",
        "serialCode": "@natural(98000000,98999999)",
        "model": "U86K41ND6-ZD01-1",
        "spec": "",
        "standard": "",
        "barcode": "",
        "seriesName": "",
        "project": "",
        "color": "",
        "linkProduct": "",
        "versionLink": "base",
        "productState": "develop",
        "designer": "",
        "BOM": null
      },
      "releaseNotes": "",
      "version": "1.0",
      "status": "",
      "nodes": []
    }
  })