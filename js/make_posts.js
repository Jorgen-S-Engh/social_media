import { baseUrl } from "./components/baseUrl.mjs";
import { showComments } from "./js/comments.mjs";


const postInfo = document.querySelector(".post_info")
const postTitle = document.querySelector(".post_title")

const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
}

console.log(showComments)

async function getPosts (){
    try{
        const respons = await fetch(`${baseUrl}/social/posts`, options)
        const data = await respons.json();


        for (let i = 0; i < data.length; i++){
            const updated = data[i].updated
            const updatedShort = updated.slice(0,10)
            postInfo.innerHTML += `
                                        <div class="container">
                                            <div class="card my-3">
                                                <div class="card-body">
                                                    <h5 class="card-title post_title">${data[i].title}</h5>
                                                    <img src="${data[i].media}" class="card-img-top my-3" alt="...">
                                                    <hr>
                                                    <p class="card-text">${data[i].body}</p>
                                                    <p class="card-text"><small class="text-muted">Last updated ${updatedShort}</small></p>
                                                </div>
                                            </div>
                                        </div>`
        }
    }catch(e){
        console.log(e)
    }
}

getPosts();