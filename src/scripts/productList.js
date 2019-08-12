import productData from "./productData.js"
import createProductComponent from "./product.js"

import reviewData from "./reviewData.js"
import review from "./review.js";

export default {
  getAvgRatings() {
    let allAverageReviews = []
    reviewData().then(allReviews => {
      allReviews.forEach(reviewAndIdObj => {
        let totalStars = 0
        let avgRating = 0
        reviewAndIdObj.reviews.forEach(reviewObj => {
          totalStars += reviewObj.stars
        })
        avgRating = totalStars / reviewAndIdObj.reviews.length
        const newAvgRatingObj = review.createAvgRatingObj(avgRating, reviewAndIdObj.id)
        allAverageReviews.push(newAvgRatingObj)
      })
      return this.renderProductList(allAverageReviews)
    }
    )
  },
  renderProductList(arr) {
    productData().then((products) => {
      products.forEach(product => {
        const avgRating = arr.find(rating => {
          return rating.id === product.id
        })
        createProductComponent(product, avgRating.stars.toFixed(3))
      })
    })
  }
}


