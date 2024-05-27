const signIn = document.querySelector(".login-form")

signIn.addEventListener("submit", (ev) => {
   ev.preventDefault()
   window.location.href = "../../pages/dashboard.html"
})