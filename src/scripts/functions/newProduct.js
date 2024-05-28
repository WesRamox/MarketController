import { renderDue } from "./renderDue.js";
import { renderAll } from "./renderAll.js";

export const newProduct = () => {
     const productName = document.querySelector("#product-name").value;
     const productBrand = document.querySelector("#product-brand").value;
     const productEntry = document.querySelector("#product-entry").value;
     const productValidity = document.querySelector("#product-validity").value;


     const listProducts = JSON.parse(localStorage.getItem("products")) || [];

     const newProduct = {
          productId: listProducts.length + 1,
          productName,
          productBrand,
          productEntry,
          productValidity: dayjs(productValidity)
     };
     

     listProducts.push(newProduct);

     localStorage.setItem("products", JSON.stringify(listProducts));
     
     renderAll();
     renderDue();
};
