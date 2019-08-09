import elFactory from "./factory.js";

const reviewComponent = (reviewObj) => {
  const reviewSection = elFactory("section", {})
  const name = elFactory("h3", {}, reviewObj.name)
  const stars = elFactory("div", {}, reviewObj.stars)
  const review = elFactory("p", {}, reviewObj.review)
  // append reviewSection to a node inside the product in the DOM 
  reviewSection.appendChild(name)
  reviewSection.appendChild(stars)
  reviewSection.appendChild(review)
}

export default reviewComponent