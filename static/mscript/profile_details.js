var inputPhoto = document.getElementById("input_profile_picture")
var denger = document.querySelector(".fontIcon")
const msgRequire = document.querySelector(".msg-info-require");
const msgExclamation = document.querySelector(".msg-exclamation");
const msgSuccess = document.querySelector(".msg-success");
const fileUploadBtn = document.querySelector("#upload_button");
const filename_p =document.querySelector("p.filename")
const filename_show=document.querySelector("p.filename span")
const show_picture=document.querySelector('#profile_picture_show_after_upload')
// const queryMsg = document.querySelector("span.msg")

// inputPhoto.addEventListener("mouseover", function () {
//     // document.querySelector("span.msg").style.display = "block"
//     document.querySelector(".msg-info-require").style.display = "block";
//     msgExclamation.style.display = "none";
//     msgSuccess.style.display = "none";
// })



inputPhoto.addEventListener("change", function () {

    var file = inputPhoto.files[0];
    // console.log(file)
    // console.log(file[0].name)
    // console.log(file[0].size)
    // fileUploadBtn.innerHTML = fileName;
    var filename=file.name
    filename_show.innerHTML=filename
    
    if(file){
            const readar= new FileReader()
        
            readar.addEventListener('load',function(){
        
                show_picture.setAttribute('src', readar.result)
        
            })
        
            readar.readAsDataURL(file)
        }




    if (file.size <= 30 * 1024 || file.size >= 70 * 1024) {

        // document.querySelector("span.msg").innerHTML = "picture must be (30kb-70kb)";
        // denger.classList.toggle("fa-triangle-exclamation");
        // document.querySelector("span.msg").style.display = "block";
        // document.querySelector("span.msg").style.color = "red";
        document.querySelector(".msg-exclamation").style.display = "block";
        document.querySelector(".msg-success").style.display = "none";
        document.querySelector(".msg-info-require").style.display = "none";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.background="gray"
        show_picture.style.border="solid 3px red"
        filename_p.style.color="red"
        filename_p.style.border="0.6px solid red"
        filename_p.style.display="block"

        return;
    }
    else {

        // document.querySelector("span.msg").innerHTML = "image add successfully"
        // document.querySelector("span.msg").style.color = "green"
        // denger.classList.toggle("fa-home");
        document.querySelector(".msg-exclamation").style.display = "none";
        document.querySelector(".msg-success").style.display = "block";
        document.querySelector(".msg-info-require").style.display = "none";
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.background="#075E53"
        show_picture.style.border="solid 3px #075E53"
        filename_p.style.color="#075E53"
        filename_p.style.border="0.6px solid #075E53"
        filename_p.style.display="block"

        return;


    }
})



// const input_picture=document.querySelector('#input_profile_picture')
// const show_picture=document.querySelector('#profile_picture_show_after_upload')
// const massage=document.querySelector("p.massege_alert")
// const submit_button= document.querySelector("#submit")


// var denger = document.querySelector(".fontIcon")
// const msgRequire = document.querySelector(".msg-info-require");
// const msgExclamation = document.querySelector(".msg-exclamation");
// const msgSuccess = document.querySelector(".msg-success");
// const fileUploadBtn = document.querySelector(".file_upload_btn span");
// const queryMsg = document.querySelector("span.msg")

// show_picture.addEventListener("mouseover", function(){
// massage.style.display="block"
// })

// input_picture.addEventListener("mouseover", function(){
//  massage.style.display="block"
// })

// input_picture.addEventListener("change", function(){

// const dp=input_picture.files[0]
// console.log(dp)
// if(dp){
//     const readar= new FileReader()

//     readar.addEventListener('load',function(){

//         input_picture.setAttribute('src', readar.result)

//     })

//     readar.readAsDataURL(dp)
// }

// if(dp.size <= 45*1024 || dp.size >= 200*1024){
  

// submit_button.disabled=true;
// submit_button.style.background="#075E53"
// show_picture.style.border="solid 3px red"

//  return;
// }
// else{


//  submit_button.disabled=false;
//  show_picture.style.border="solid 2px green"
//  submit_button.style.background="gray"
 
// //  upload.style.display="none"
//  return;


// }
// })




