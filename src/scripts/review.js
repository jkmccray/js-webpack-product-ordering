import elFactory from "./factory.js";

const createReviewComponent = (reviewObj, productIdNum) => {
  const reviewSection = elFactory("section", { classList: ["review-section", "product--" + productIdNum] })
  const reviewer = elFactory("h3", {}, reviewObj.reviewer)
  const stars = elFactory("div", {}, "Rating: " + reviewObj.stars)
  const review = elFactory("p", {}, reviewObj.review)
  const hr = elFactory("hr")
  const reviewDiv = document.querySelector("#product-reviews--" + productIdNum)
  reviewDiv.appendChild(reviewSection)
  reviewSection.appendChild(reviewer)
  reviewSection.appendChild(stars)
  reviewSection.appendChild(review)
  reviewSection.appendChild(hr)
}

export default createReviewComponent