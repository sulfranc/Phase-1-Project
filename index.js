const picture = document.getElementById('picture');
const likepic_btn = document.getElementById('likepic_btn');
const dislikepic_btn = document.getElementById('dislikepic_btn');
const commentForm = document.getElementById('comment')
const commentText = document.getElementById("commenttext")

let likeCount = 0
let dislikeCount = 0

document.addEventListener('DOMContentLoaded', () => {
    getPic() // makes img appear when page loads
   
    commentForm.addEventListener('submit',function(event){
        event.preventDefault
        let catCommennts = event.target.commettext.value
        console.log(catCommennts)
        let commentBox = document.createElement('p')
        commentBox.textContent = catCommennts
        document.getElementById('userinputs').appendChild(commentBox)
        
    
    })
    
    
   
});
likepic_btn.addEventListener('click', likeCounter )
dislikepic_btn.addEventListener('click', dislikeCounter) 




function getPic(){ // gets pics from api
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data => {
            let catImgUrl = data[0].url // sets the url to a variable 
            picture.innerHTML = "" // clears img
            let img = document.createElement('img') // creates img in html
            img.src = catImgUrl             
            picture.appendChild(img) // makes img a child of #picture 
            
    })
}


    function dislikeCounter(){
        dislikeCount++
        dislikepic_btn.innerHTML = `DisLike👎 ${dislikeCount}`
        getPic()
    }

    function likeCounter(){
        likeCount++
        likepic_btn.innerHTML = `Like👍 ${likeCount}`
        getPic()
    }

    


