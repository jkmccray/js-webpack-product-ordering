import reviewData from "./reviewData.js";
import review from "./review.js";

export default {
  createReviewList(productIdNum) {
    reviewData().then(reviews => {
      const reviewsArr = reviews[productIdNum - 1].reviews
      reviewsArr.forEach(reviewObj => {
        review.createReviewComponent(reviewObj, productIdNum)
      })
    })
  },
  getAvgRatings() {
    reviewData().then(allReviews => {
      let allAverageReviews = []
      allReviews.forEach(reviewAndIdObj => {
        let totalStars = 0
        let avgRating = 0
        reviewAndIdObj.reviews.forEach(reviewObj => {
          totalStars += reviewObj.stars
        })
        avgRating = totalStars/reviewAndIdObj.reviews.length
        const newAvgRatingObj = review.createAvgRatingObj(avgRating, reviewAndIdObj.id)
        allAverageReviews.push(newAvgRatingObj)
      })
      return allAverageReviews
    }
    )
  }
}