// console.log("test");

// const track = document.querySelector(".slideImages__container");



let image = 0;




function control(x) {
    image = image + x;

    slider(image);

}


slider(image);
function slider(no) {

    var slider_class = document.getElementsByClassName("slideImage");



    if (no == slider_class.length) {
        image = 0;
        no = 0;

    }
    else if (no < 0) {
        image = slider_class.length - 1;
        no = slider_class.length - 1;
    }

    for (let y of slider_class) {
        y.style.display = "none";
    }
    slider_class[no].style.display = "block";

}



