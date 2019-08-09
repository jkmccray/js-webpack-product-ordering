import elFactory from "./factory.js"
import createReviewList from "./reviewList.js"


const productContainer = document.querySelector("#container")

const createProductComponent = (productObj) => {
  const productSection = elFactory("section", {classList: "product-section", id: "product--" + productObj.id})
  const img = elFactory("img", {src: productObj.imageUrl, alt: productObj.name})
  const name = elFactory("h2", {}, productObj.name)
  const price = elFactory("h3", {}, productObj.price)
  const quantity = elFactory("h4", {}, "Quantity: " + productObj.quantity)
  const description = elFactory("p", {}, productObj.description)
  const reviewDiv = elFactory("div", {classList: "review-div", id: "product-reviews--" + productObj.id})
  productContainer.appendChild(productSection)
  productSection.appendChild(name)
  productSection.appendChild(img)
  productSection.appendChild(price)
  productSection.appendChild(quantity)
  productSection.appendChild(description)
  productSection.appendChild(reviewDiv)
  createReviewList(productObj.id)
}

export default createProductComponent