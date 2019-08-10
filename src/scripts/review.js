import elFactory from "./factory.js";

const createReviewComponent = (reviewObj, productIdNum) => {
  const reviewSection = elFactory("section", { classList: ["review-section", "product--" + productIdNum] })
  const reviewer = elFactory("h3", {classList: ["reviewer"]}, reviewObj.reviewer)
  const stars = elFactory("div", {}, "rating: " + reviewObj.stars)
  const review = elFactory("p", {classList: ["review"]}, reviewObj.review)
  const reviewDiv = document.querySelector("#product-reviews--" + productIdNum)
  reviewDiv.appendChild(reviewSection)
  reviewSection.appendChild(reviewer)
  reviewSection.appendChild(stars)
  reviewSection.appendChild(review)
}

export default createReviewComponent