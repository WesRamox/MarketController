
import { newProduct } from "./functions/newProduct.js";
import { renderAll } from "./functions/renderAll.js";
import { renderDue } from "./functions/renderDue.js";
import "./functions/Navegation.js";
 
const newProductButton = document.querySelector(".sendData");

newProductButton.addEventListener("click", newProduct)

window.onload = () => {
   var date = new Date();

   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();

   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;

   var today = year + "-" + month + "-" + day;       
   
   document.getElementById("product-entry").value = today;
   
}

renderDue();
renderAll();