const url = "https://nf-api.onrender.com/api/v1/social/auth/register";
const createAccountBtn = document.querySelector(".create_acc_btn")

createAccountBtn.addEventListener("click", createAccount)

async function createAccount (e){
    e.preventDefault();
    const loginEmail = document.querySelector(".login_email").value;
    const loginPassword = document.querySelector(".login_password").value;
    const loginName = document.querySelector(".login_name").value;
    const user = {
        name: loginName,
        email: loginEmail,
        password: loginPassword,
    };
    const apiData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body : JSON.stringify(user)
    }

    try{
        const response = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        console.log(response)
        if (response.status === 200 || response.status === 201){
            alert("Success")
            localStorage.clear()
            localStorage.setItem("password",loginPassword);
            localStorage.setItem("email", loginEmail);
            window.location.href = "index.html"
        }
        

    }catch(e){
        console.log(e)
    }



}