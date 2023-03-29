var inputPhoto = document.getElementById("input_photo")
var denger = document.querySelector(".fontIcon")
const msgRequire = document.querySelector(".msg-info-require");
const msgExclamation = document.querySelector(".msg-exclamation");
const msgSuccess = document.querySelector(".msg-success");
const fileUploadBtn = document.querySelector(".file_upload_btn span");
// const queryMsg = document.querySelector("span.msg")

// inputPhoto.addEventListener("mouseover", function () {
//     // document.querySelector("span.msg").style.display = "block"
//     document.querySelector(".msg-info-require").style.display = "block";
//     msgExclamation.style.display = "none";
//     msgSuccess.style.display = "none";
// })



inputPhoto.addEventListener("change", function () {

    var file = inputPhoto.files;
    // console.log(file)
    // console.log(file[0].name)
    // console.log(file[0].size)

    const fileName = file[0].name;
    fileUploadBtn.innerHTML = fileName;

    if (file[0].size <= 30 * 1024 || file[0].size >= 70 * 1024) {

        // document.querySelector("span.msg").innerHTML = "picture must be (30kb-70kb)";
        // denger.classList.toggle("fa-triangle-exclamation");
        // document.querySelector("span.msg").style.display = "block";
        // document.querySelector("span.msg").style.color = "red";
        document.querySelector(".msg-exclamation").style.display = "block";
        document.querySelector(".msg-success").style.display = "none";
        document.querySelector(".msg-info-require").style.display = "none";
        document.getElementById("submit").disabled = true;


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
        return;


    }
})