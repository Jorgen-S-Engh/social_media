const btnLogout = document.querySelector(".btn_logout")

btnLogout.addEventListener("click", () =>{
    localStorage.clear()
    window.location.href = "index.html";

})