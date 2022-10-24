const loginName = document.querySelector(".login_name");
const loginEmail = document.querySelector(".login_email");

baseUrl = "https://nf-api.onrender.com/api/v1";

user = {
  email: "jorgen.engh@stud.noroff.no",
  password: "12345jorgen",
};
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUwLCJuYW1lIjoiSm9yZ2VuIiwiZW1haWwiOiJqb3JnZW4uZW5naEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vbWVkaWEuZ3EtbWFnYXppbmUuY28udWsvcGhvdG9zLzVmOGVmZGJhOWIzNTcwOTlkNzBhOWVhZi80OjMvd18xNDQwLGhfMTA4MCxjX2xpbWl0L0JvcmF0R3JlZW4uanBnIiwiYmFubmVyIjoiaHR0cHM6Ly9tZWRpYS5ncS1tYWdhemluZS5jby51ay9waG90b3MvNWY4ZWZkYmE5YjM1NzA5OWQ3MGE5ZWFmLzQ6My93XzE0NDAsaF8xMDgwLGNfbGltaXQvQm9yYXRHcmVlbi5qcGciLCJpYXQiOjE2NjY2MTY1OTl9.6HP_J98FprNZ_n5uFt3NxuOPhT6RJYo8u7QU6TzpT0k",
  },
};

async function login(endpoint) {
  try {
    const reply = await fetch(`${baseUrl}${endpoint}`, options);
    const results = await reply.json();
    console.log(results);
  } catch (e) {
    console.log(e);
  }
}

login("/social/posts");
