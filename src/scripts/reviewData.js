const reviewData = () => {
  return fetch("http://localhost:8088/products")
    .then(data => data.json())
    .then((products) => {
      let reviewsArr = []
      reviewsArr = products.map(product => {
        return {
          reviews: product.reviews,
          id: product.id
        }
      })
      return reviewsArr
    })
}

export default reviewData