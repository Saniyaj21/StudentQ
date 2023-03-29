
const file=document.querySelector('#file')
const img=document.querySelector('#img')

img.addEventListener("mouseover", function(){
 document.querySelector(".msg").style.display="block"
})

file.addEventListener("mouseover", function(){
    document.querySelector(".msg").style.display="block"
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

if(dp.size <= 45*1024 || dp.size >= 200*1024){
  
document.querySelector("p.msg b").innerHTML="Notice size is not valid -->(45kb-200kb) "
document.querySelector("p.msg i").setAttribute('class', 'fa-solid fa-triangle-exclamation')
document.querySelector("p.msg").style.display="block"
document.querySelector("p.msg").style.color="red"
document.getElementById("submit").disabled=true;
document.getElementById("submit").style.background="gray"
img.style.border="solid 3px red"
file.style.color="red"



 return;
}
else{

 document.querySelector("p.msg b").innerHTML="Notice is valided"
 document.querySelector("p.msg i").setAttribute('class','fa-solid fa-circle-check')

 document.querySelector("p.msg").style.color="green"
 document.getElementById("submit").disabled=false;
 img.style.border="solid 2px green"
 file.style.color="#075E53"

 document.getElementById("submit").style.background="#075E53"
//  upload.style.display="none"
 return;


}
})



