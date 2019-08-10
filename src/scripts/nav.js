import elFactory from "./factory.js";

const createNavBar = () => {
  const navBar = document.querySelector("#navBar")
  const navList = elFactory("ul", {classList: ["navUl"]})
  const categoriesAnchor = elFactory("a", {classList: ["navAnchor"], href: ""})
  const navCategories = elFactory("li", {classList: ["navLi"]}, "categories")
  const ordersAnchor = elFactory("a", {classList: ["navAnchor"], href: ""})
  const navOrders = elFactory("li", {classList: ["navLi"]}, "orders")
  const logoutAnchor = elFactory("a", {classList: ["navAnchor"], href: ""})
  const navLogout = elFactory("li", {classList: ["navLi"]}, "log out")
  navBar.appendChild(navList)
  navList.appendChild(categoriesAnchor)
  categoriesAnchor.appendChild(navCategories)
  navList.appendChild(ordersAnchor)
  ordersAnchor.appendChild(navOrders)
  navList.appendChild(logoutAnchor)
  logoutAnchor.appendChild(navLogout)
}

export default createNavBar