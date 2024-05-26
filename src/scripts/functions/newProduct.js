import { renderProducts } from "./renderProducts.js";

export const newProduct = () => {
     const productName = document.querySelector("#product-name").value;
     const productBrand = document.querySelector("#product-brand").value;
     const productEntry = document.querySelector("#product-entry").value;
     const productValidity = document.querySelector("#product-validity").value;


     const listProducts = JSON.parse(localStorage.getItem("products")) || [];
     const validityDate = dayjs(productValidity)
     const validityDays = validityDate.diff(dayjs(), 'days', true)
     const returnDays = Math.round(validityDays)

     const newProduct = {
          productId: listProducts.length + 1,
          productName,
          productBrand,
          productEntry,
          productValidity: dayjs(productValidity).format("DD/MM/YYYY"),
          daysToDue: returnDays
     };
     

     listProducts.push(newProduct);

     localStorage.setItem("products", JSON.stringify(listProducts));

     console.log(newProduct)
     renderProducts();
};
