import elFactory from "./factory.js"
import reviewList from "./reviewList.js"

const productContainer = document.querySelector("#container")

const createProductComponent = (productObj, avgRating) => {
  const productSection = elFactory("section", {classList: "product-section", id: "product--" + productObj.id})
  const img = elFactory("img", {src: productObj.imageUrl, alt: productObj.name})
  const nameHeading = elFactory("div", {classList: ["name-heading"]})
  const name = elFactory("h2", {classList: ["product-name"]}, productObj.name.toLowerCase())
  const priceAndQuantity = elFactory("div", {classList: ["price-and-quantity"]})
  const price = elFactory("h3", {}, productObj.price)
  const quantity = elFactory("h4", {}, "quantity: " + productObj.quantity)
  const description = elFactory("p", {classList: ["description"]}, productObj.description)
  const reviewsHeading = elFactory("h2", {classList: ["reviews-heading"]}, "reviews")
  const avgRatingContainer = elFactory("div", {classList: ["avg-rating-container"]})
  const avgRatingDisplay = elFactory("h4", {classList: ["avg-rating"]}, "average rating:")
  const avgRatingCats = elFactory("div", {classList: ["avg-rating-cats"]}, "😺".repeat(5))
  avgRatingCats.style.width = avgRating*10 + "%"
  const reviewDiv = elFactory("div", {classList: "review-div", id: "product-reviews--" + productObj.id})
  productContainer.appendChild(productSection)
  productSection.appendChild(nameHeading)
  nameHeading.appendChild(name)
  productSection.appendChild(img)
  productSection.appendChild(priceAndQuantity)
  priceAndQuantity.appendChild(quantity)
  priceAndQuantity.appendChild(price)
  productSection.appendChild(description)
  productSection.appendChild(avgRatingContainer)
  avgRatingContainer.appendChild(avgRatingDisplay)
  avgRatingContainer.appendChild(avgRatingCats)
  productSection.appendChild(reviewsHeading)
  productSection.appendChild(reviewDiv)
  reviewList.createReviewList(productObj.id)
}

export default createProductComponent