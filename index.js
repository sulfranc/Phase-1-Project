const picture = document.getElementById('picture');
const likepic_btn = document.getElementById('likepic_btn');
const dislikepic_btn = document.getElementById('dislikepic_btn');

document.addEventListener('DOMContentLoaded', () => {
    getPic() // makes img appear when page loads
});
likepic_btn.addEventListener('click', getPic) 
dislikepic_btn.addEventListener('click', getPic) 




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
