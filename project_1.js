const bg = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(button){
button.addEventListener('click',function(e){
   // console.log(e)
   // console.log(e.target)
    if(e.target.id === "grey"){
        bg.style.backgroundColor = e.target.id;
       }
    if(e.target.id === "white"){
        bg.style.backgroundColor = e.target.id;
       }
    if(e.target.id === "blue"){
        bg.style.backgroundColor = e.target.id;
       }
    if(e.target.id === "yellow"){
        bg.style.backgroundColor = e.target.id;
       }
       if(e.target.id === "purple"){
        bg.style.backgroundColor = e.target.id;
       }
  
})
})