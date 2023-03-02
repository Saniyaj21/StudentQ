var x=document.getElementById("input_photo")

x.addEventListener("mouseover", function(){
 document.querySelector("p.msg").style.display="block"
})



x.addEventListener("change", function(){

var file=x.files;
console.log(file)
console.log(file[0].size)

if(file[0].size <= 30*1024 || file[0].size >= 70*1024){
  
document.querySelector("p.msg").innerHTML="picture must be (30kb-70kb)"
document.querySelector("p.msg").style.display="block"
document.querySelector("p.msg").style.color="red"
document.getElementById("submit").disabled=true;


 return;
}
else{

 document.querySelector("p.msg").innerHTML="image add successfully"
 document.querySelector("p.msg").style.color="green"
 document.getElementById("submit").disabled=false;
 return;


}
})