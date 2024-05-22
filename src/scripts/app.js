
import { newProduct } from "./functions/newProduct.js";
import { renderProducts } from "./functions/renderProducts.js"
 
const newProductButton = document.querySelector(".sendData");

newProductButton.addEventListener("click", newProduct)

renderProducts()
