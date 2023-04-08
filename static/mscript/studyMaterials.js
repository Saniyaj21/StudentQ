// let public = document.getElementById('public');
// let recomandations = document.getElementById('Recomandations');


function publicBox() {
    console.log("public clicked")
    let rdVideosBox = document.body.querySelector('#recomand-videos');
    let pbVideosBox = document.body.querySelector('#public-videos');
    
    pbVideosBox.style.display = 'grid'
    rdVideosBox.style.display = 'none'
    

    // terget the titles 
    let recomandTitle = document. querySelector('#recommand');
    let publicTitle = document. querySelector('#publicButton');
    
    recomandTitle.style.display='none';
    publicTitle.style.display='block';
}
function recomand() {
    console.log("recomand clicked")
    let rdVideosBox = document.getElementById('recomand-videos');
    let pbVideosBox = document.getElementById('public-videos');

    pbVideosBox.style.display = 'none'
    rdVideosBox.style.display = 'grid'

    // terget the titles 
    let recomandTitle = document. querySelector('#recommand');
    let publicTitle = document. querySelector('#publicButton');

    recomandTitle.style.display='block';
    publicTitle.style.display='none';
}

console.log('hello')
// document.querySelectorAll('#Recomandations').addEventListener('click', ()=>{
//     console.log("recomand clicked");
//     let rdVideosBox = document.getElementById('recomand-videos');
//     let pbVideosBox = document.getElementById('public-videos');

//     pbVideosBox.style.display = 'none';
//     rdVideosBox.style.display = 'block';
// })
