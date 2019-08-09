const productData = () => {
  return fetch("http://localhost:8088/products")
  .then(data => data.json())
}

export default productData