const Mock = require('mockjs')
module.exports = [
    //新建bom
    {
        url: '/product/list/',
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
    "message": "返回产品列表成功",
    "rows|20": [
      {
        "id|+1": 1,
        "name": "四键智能开关U1(智+白色)",
        "remark": "",
        "addDateTime": "2020-12-11 15:18:10",
        "modifyDateTime": "2020-12-14 10:30:38",
        "mainType": "",
        "productType": "",
        "flag": "",
        "company": "",
        "serialCode": "98309085",
        "model": "U86K41ND6-ZD01",
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
      }
    ],
    "total": 1
  })