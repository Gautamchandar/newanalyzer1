const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
function openNewPage(){
    window.open('https://gautamchandar.github.io/newteam/','_blank');
}
function openPage(){
    window.open('https://tanishthacode.github.io/Hackathon/','_blank');
}
function page(){
    window.open('https://gautamchandar.github.io/graph/', '_blank');
  }