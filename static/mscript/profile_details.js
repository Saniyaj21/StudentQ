var upload=document.getElementById("upload")
const file=document.querySelector('#file')
const img=document.querySelector('#img')

upload.addEventListener("mouseover", function(){
 document.querySelector("p.msg").style.display="block"
})

file.addEventListener("change", function(){

const dp=file.files[0]
console.log(dp)
if(dp){
    const readar= new FileReader()

    readar.addEventListener('load',function(){

        img.setAttribute('src', readar.result)

    })

    readar.readAsDataURL(dp)
}

if(dp.size <= 30*1024 || dp.size >= 70*1024){
  
document.querySelector("p.msg").innerHTML="picture must be (30kb-70kb)"
document.querySelector("p.msg").style.display="block"
document.querySelector("p.msg").style.color="red"
document.getElementById("submit").disabled=true;
img.style.border="solid 3px red"



 return;
}
else{

 document.querySelector("p.msg").innerHTML="image add successfully"
 document.querySelector("p.msg").style.color="green"
 document.getElementById("submit").disabled=false;
 img.style.border="solid 2px green"
//  upload.style.display="none"
 return;


}
})



