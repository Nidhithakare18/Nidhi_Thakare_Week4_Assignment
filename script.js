//nav
let tasks = document.getElementById("tasks");
let message = document.getElementById("message");
let logouts = document.getElementById("logout");

let toggle=document.querySelector('.toggle');
let left=document.querySelector('.left');
let right=document.querySelector('.right');
let close=document.querySelector('.close');
let body=document.querySelector('.body');
let searchbutton=document.querySelector('.searchbutton');
let searchOpen=document.querySelector('.searchOpen');
let searchClose=document.querySelector('.searchClose');
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow='hidden';
});
close.onclick=()=>{
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow='';
};
searchOpen.onclick=()=>{
    searchbutton.classList.add('active');
};
searchClose.onclick=()=>{
    searchbutton.classList.remove('active');
};
window.onclick=(e)=>{
    if(e.target==right){
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow='';
    }
};
