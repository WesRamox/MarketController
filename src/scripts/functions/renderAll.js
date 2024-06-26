export const renderAll = () => {
     const listProducts = JSON.parse(localStorage.getItem("products")) || []
     const listElement = document.querySelector(".all-products-list");

     listElement.innerHTML = "";
     if(listProducts != "") {
          listProducts.map(item => {
               const dueDays = dayjs(item.productValidity).diff(dayjs(), 'days')
               let { productId, productName, productBrand, productValidity } = item;
               productValidity = dayjs(productValidity).format("DD/MM/YYYY")

               const productElement = document.createElement("div");
               productElement.classList.add("item", "w-full", "flex", "gap-10", "cursor-default", "items-center", "rounded-xl", "justify-between", "bg-zinc-800", "p-5", "pl-12", "pr-12");
               productElement.id = `${productId}`;
               productElement.innerHTML =
                    `
                              <div class="flex gap-10 items-center">
                                   <img src="../public/images/logo.png" class="lg:flex hidden h-10">
                                   <div class="details">
                                        <p class="text-xl">Produto: ${productName}</p>
                                        <p class="text-sm">Marca: ${productBrand}</p>
                                   </div>
                                   <div>
                                        <p>Vence em: <span class="text-red-400">${dueDays} dias</span></p>
                                        <p>Data de Validade: <span>${productValidity}</span></p>
                                   </div>
                              </div>
                              <div class="buttons flex gap-5 text-2xl">
                                   <button class="final cursor-pointer hover:text-zinc-600">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                   </button>
                                   <button class="final cursor-pointer hover:text-zinc-600 button-delete" >
                                        <i class="fa-solid fa-trash product-item" data-id="${productId}"></i>
                                   </button>
                              </div>
                         `

               listElement.append(productElement)
          })
     } else {
               const textError = document.createElement("h1")
               textError.innerText = "Nenhum produto cadastrado"
               textError.classList.add("text-xl")
               listElement.append(textError)
     }
}