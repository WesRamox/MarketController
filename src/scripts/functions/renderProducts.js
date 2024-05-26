export const renderProducts = () => {
     const listProducts = JSON.parse(localStorage.getItem("products")) || []
     const listElement = document.querySelector(".next-due-date-list")

     listElement.innerHTML = ''
     listProducts.forEach((product) => {
          const productElement = document.createElement("li");
          productElement.style.margin = "10px"

          // const validityDate = dayjs(product.productValidity)
          // const validityDays = validityDate.diff(dayjs(), 'days', true)

          // const returnDays = Math.round(validityDays)

          productElement.innerHTML = `product name: ${product.productName} <br> vence em: ${returnDays} dias`

          if(returnDays <= 10 && returnDays > 0) {
               productElement.classList.add("warning")
          } else if(returnDays <= 0) {
               productElement.classList.add("critical")
               productElement.innerHTML = `product name: ${product.productName} <br> vencido a: ${returnDays} dias`
          }

          listElement.append(productElement)
     })
}