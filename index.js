let row = document.querySelectorAll(".row1");
let no =3;
console.log(row);
for (let i=0;i<row.length;i++){
    
    document.querySelectorAll(".row1")[i].addEventListener("click",function(){
     if (no<0){
        no=no-1;
     }
     document.querySelectorAll(".row1")[i].style.backgroundColor="white";
     document.querySelectorAll(".unread")[i].style.visibility="hidden";
     document.querySelector(".notino").innerHTML=no-1;
     if (no>0){
        no=no-1;
     }
     if (no===0){
        document.querySelector(".notino").style.visibility="hidden";
     }
    })
}
document.querySelector("#Marked").addEventListener("click",function(){
    for(let j=0;j<row.length;j++){
        document.querySelectorAll(".row1")[j].classList.add("unreadnotis");
        document.querySelectorAll(".unread")[j].style.visibility="hidden";
        document.querySelector(".notino").innerHTML=0;
        document.querySelector(".notino").style.visibility="hidden";
    }
})