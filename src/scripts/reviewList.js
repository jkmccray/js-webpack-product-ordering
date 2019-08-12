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
  }
}

