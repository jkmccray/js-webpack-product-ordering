import productData from "./productData.js"
import createProductComponent from "./product.js"

const renderProductList = () => {
  let productIdNum = 1

  productData().then((products) => {
    products.forEach(product => {
      createProductComponent(product)
    })
  })
}

export default renderProductList

