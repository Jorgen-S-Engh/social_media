import { baseUrl } from "./components/baseUrl.mjs";


const feedContainer = document.querySelector(".feed_container")
const postTitle = document.querySelector(".post_title")

const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
}

async function getPosts (){
    try{
        const respons = await fetch(`${baseUrl}/social/posts`, options)
        const data = await respons.json();
        console.log(data)

        for (let i = 0; i < data.length; i++){
            console.log(data[i].title)
            const updated = data[i].updated
            const updatedShort = updated.slice(0,10)
            console.log(updated)
            console.log(updatedShort)

            feedContainer.innerHTML += `
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