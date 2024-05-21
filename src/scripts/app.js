import { newProduct } from "./functions/newProduct.js";
 
const newProductButton = document.querySelector(".sendData");

newProductButton.addEventListener("click", newProduct)