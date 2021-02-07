const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userName: state => state.user.userName,
  jobNumber: state => state.user.jobNumber,
  allInfo: state => state.user.allInfo,
  productList: state => state.product.productList,
  productInfo: state => state.product.productInfo,
  productTotal: state => state.product.productTotal,
  createProduct: state => state.product.createProduct,
  deleteProduct: state => state.product.deleteProduct,
  updataProduct: state => state.product.updataProduct,
  setProductInfo: state => state.product.setProductInfo,
  createBom: state => state.product.createBom
}
export default getters
