const reviewData = () => {
  return fetch("http://localhost:8088/products")
  .then(reviews => reviews.json())
}

export default reviewData