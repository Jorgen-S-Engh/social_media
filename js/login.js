import { baseUrl } from "./components/baseUrl.mjs";
import { accessToken } from "./components/localStorage.mjs";

const loginEmail = document.querySelector(".login_email").value = localStorage.getItem("email")
const loginPassword = document.querySelector(".login_password").value = localStorage.getItem("password")
const loginBtn = document.querySelector(".login_btn");


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const loginEmail = document.querySelector(".login_email").value;
  const loginPassword = document.querySelector(".login_password").value;


  const user = {
    email: loginEmail,
    password: loginPassword,
  };
  async function login(endpoint) {
    try {
      const reply = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });

      const results = await reply.json();
      console.log(reply);
      if (reply.status === 200) {
        localStorage.setItem("accessToken", results.accessToken);
        window.location.href = "feed.html";
      }

      console.log(results);
    } catch (e) {
      console.log(e);
    }
  }

  login("/social/auth/login");
});
