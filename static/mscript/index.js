console.log("test");

const nav = document.getElementById("nav");
const menu = document.getElementById("navber");
const toggle = document.querySelector(".toggle");
const navber = document.querySelector(".navber");
const toggleBarIcon = document.querySelector(".toggle__bars");
const logInOut = document.querySelector(".log__in--out");
const visibleBtnsDiv = document.querySelector(".btnContainer--btns");
const load = document.querySelector(".loaderPage__container");

function logingStart() {
    load.style.display = 'none';
}


// window.onscroll = function () {
//     if (window.pageYOffset >= menu.offsetTop) {
//         nav.classList.add("nav_fixed");
//     }
//     else {
//         nav.classList.remove("nav_fixed");
//     }
// }

toggle.addEventListener('click',()=>{
    console.log("toggle clicked");
    navber.classList.toggle("toggle__active");
    // toggleBarIcon.classList.remove('fa-bars');
    toggleBarIcon.classList.toggle('fa-xmark');
})

logInOut.addEventListener('click',()=>{
    console.log("log in out clicked");
    visibleBtnsDiv.classList.toggle("btnContainer--btns__active");
})






































// const track = document.querySelector(".slideImages__container");



// let image = 0;



// function control(x) {
//     image = image + x;

//     slider(image);
// }


// slider(image);
// function slider(no) {
//     var slider_class = document.getElementsByClassName("slideImage");
//     var pagination=document.getElementsByClassName("pagination__dot");


//     if (no == slider_class.length) {
//         image = 0;
//         no = 0;

//     }
//     else if (no < 0) {
//         image = slider_class.length - 1;
//         no = slider_class.length - 1;
//     }

//     for (let y of slider_class) {
       
//         y.style.display = "none";
       
// }

//     slider_class[no].style.display = "block";


//     for (let y of pagination) {
        
//         y.classList.remove("pagination__current")

//     }

//     pagination[no].classList.add("pagination__current")
    
    
//     // setTimeout(control(image+1), 2000); // Change image every 2 seconds

// }














// let image = 0;




// function control(x) {
//     image = image + x;

//     slider(image);

// }




// slider(image);
// function slider(no) {

//     var slider_class = document.getElementsByClassName("slideImage");



//     if (no == slider_class.length) {
//         image = 0;
//         no = 0;

//     }
//     else if (no < 0) {
//         image = slider_class.length - 1;
//         no = slider_class.length - 1;
//     }

//     for (let y of slider_class) {
//         y.style.display = "none";
//     }
//     slider_class[no].style.display = "block";

// }



