import { renderAll } from "./renderAll.js";
import { renderDue } from "./renderDue.js";

export function deleteProduct(data) {
   if(!confirm('Deseja realmente excluir essa categoria?')) {
      return;
   } else {
      const listProducts = JSON.parse(localStorage.getItem("products")) || []
      const index = listProducts.findIndex(item => item.productId == data)

      if (index !== -1) {
         listProducts.splice(index, 1);
         localStorage.setItem('products', JSON.stringify(listProducts));

         renderAll();
         renderDue();
     }
   }
   

}