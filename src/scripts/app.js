
import { newProduct } from "./functions/newProduct.js";
import { renderAll } from "./functions/renderAll.js";
import { renderDue } from "./functions/renderDue.js";
import { deleteProduct } from "./functions/deleteProduct.js";
import "./functions/Navegation.js";

const allProductsList = document.querySelector(".all-products-list")
const newProductButton = document.querySelector(".sendData");

newProductButton.addEventListener("click", newProduct)

window.onload = () => {
   let date = new Date();

   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();

   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;

   let today = year + "-" + month + "-" + day;

   document.getElementById("product-entry").value = today;
}

renderDue();
renderAll();

allProductsList.addEventListener('click', (ev) => {
   ev.preventDefault();
   const button = ev.target;
   if (button.classList.contains('product-item')) {
      deleteProduct(ev.target.dataset.id)
   }
})
