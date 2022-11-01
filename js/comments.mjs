import { baseUrl } from "./components/baseUrl.mjs";
import { options } from "./components/options.mjs";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(queryString)
const postID = params.get("id");


const feedContainer = document.querySelector(".feed_container")
const commentContainer = document.querySelector(".comment_container")
const endpoint =  `/social/posts/?_author=true&_comments=true&_reactions=true`
console.log(endpoint)





async function getComments () {
    try{
        const response = await fetch (`${baseUrl}${endpoint}`, options )
        const data = await response.json();
        // console.log(data);
        const comment = [];
        for (let i = 0; i < data.length; i++){
            // console.log(data[i].comments)
            for (let j = 0; j < data[i].comments.length; j++){
                

                // console.log(data[i].comments[j].body)
                // showComments(data[i].comments[j].body)
                comment.push(data[i].comments[j].body);
                
            }
        } 
        console.log(comment) 
        return comment;  
    }
    
    catch(e){
        console.log(e)
    }   
}

export {getComments};
// getComments();

// export async function showComments(comments){

//     // console.log(comments)

// }



