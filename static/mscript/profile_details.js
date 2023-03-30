var inputPhoto = document.getElementById("input_profile_picture")
var denger = document.querySelector(".fontIcon")
const msgRequire = document.querySelector(".msg-info-require");
const msgExclamation = document.querySelector(".msg-exclamation");
const msgSuccess = document.querySelector(".msg-success");
const fileUploadBtn = document.querySelector("#upload_button");
const filename_p =document.querySelector("p.filename")
const filename_show=document.querySelector("p.filename span")
const show_picture=document.querySelector('#profile_picture_show_after_upload')


inputPhoto.addEventListener("change", function () {

    var file = inputPhoto.files[0];
    
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


