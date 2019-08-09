import reviewData from "./reviewData.js";
import createReviewComponent from "./review.js";

const createReviewList = (productIdNum) => {
  reviewData().then(reviews => {
    reviews[productIdNum-1].forEach(reviewObj => {
      createReviewComponent(reviewObj, productIdNum)
    })
  })
}

export default createReviewList
