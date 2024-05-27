const home = document.querySelector(".home")
const homeButton = document.querySelector(".homeButton")

const allProducts = document.querySelector(".all-products")
const allProductsButton = document.querySelector(".allProductsButton")

homeButton.addEventListener("click", () => {
   if(home.classList.contains("hidden")) {
      home.classList.remove("hidden")

      home.classList.add("flex")
      allProducts.classList.add("hidden")
      
      homeButton.classList.add("text-gray-200")
      allProductsButton.classList.remove("text-gray-200")
   }
})

allProductsButton.addEventListener("click", () => {
   if(allProducts.classList.contains("hidden")) {
      allProducts.classList.remove("hidden")

      allProducts.classList.add("flex")
      home.classList.add("hidden")

      homeButton.classList.remove("text-gray-200")
      allProductsButton.classList.add("text-gray-200")
   }
})

