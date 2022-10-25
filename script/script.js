const loginBtn = document.querySelector(".login_btn");

baseUrl = "https://nf-api.onrender.com/api/v1";

user = {
  email: "jorgen.engh@stud.noroff.no",
  password: "12345jorgen",
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const loginEmail = document.querySelector(".login_email").value;
  const loginPassword = document.querySelector(".login_password").value;
  const user = {
    email: loginEmail,
    password: loginPassword,
  };
  console.log(JSON.stringify(user));

  async function login(endpoint) {
    try {
      const reply = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      console.log(reply);
      const results = await reply.json();
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  }

  login("/social/auth/login");
});
