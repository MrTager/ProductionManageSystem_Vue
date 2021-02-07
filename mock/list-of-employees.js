
  module.exports = [
    //员工名单
    {
      url: '/list/employees',
      type: 'post',
      response: config => {
        return {
          code: 20000,
          data: leadData
        }
      }
    }
  ]

  const leadData = {
      code:200,
      data:[
          {
            "name":'张辉',
            "jobNumber":'12531',
            "type":'Software'
          },
          {
            "name":'张鹏',
            "jobNumber":'11230',
            "type":'Software'
          },
          {
            "name":'戴骏',
            "jobNumber":'12438',
            "type":'Software'
          },
          {
            "name":'陈斌',
            "jobNumber":'11531',
            "type":'Software'
          },
          {
            "name":'杜岩',
            "jobNumber":'10235',
            "type":'Software'
          },
          {
            "name":'庞鹏强',
            "jobNumber":'13041',
            "type":'Software'
          },
          {
            "name":'叶文静',
            "jobNumber":'10563',
            "type":'packing'
          },
          {
            "name":'孙耀权',
            "jobNumber":'12502',
            "type":'Structure'
          },
          {
            "name":'王炜',
            "jobNumber":'11423',
            "type":'Hardware'
          },
          {
            "name":'严士松',
            "jobNumber":'11423',
            "type":'Hardware'
          }
      ]
  }