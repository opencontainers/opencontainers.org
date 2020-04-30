// const navbarBurger = () => {
//   const burger = $(".navbar-burger"),
//     menu = $(".navbar-menu");
// 
//   burger.click(() => {
// 
// 
//     [burger, menu].forEach((el) => el.toggleClass('is-active'));
//   });
// }
// 
// $(() => {
//   console.log("Welcome to the CNCF's Hugo + Netlify starter");
// 
//   navbarBurger();
// });

import 'alpinejs'


//Javascript to toggle the nav-menu
document.getElementById('nav-open').onclick = function () {
    document.getElementById("nav-menu").classList.toggle("hidden");
    document.getElementById("nav-open").classList.toggle("hidden");
    document.getElementById("nav-close").classList.toggle("hidden");
}
document.getElementById('nav-close').onclick = function () {
    document.getElementById("nav-menu").classList.toggle("hidden");
    document.getElementById("nav-close").classList.toggle("hidden");
    document.getElementById("nav-open").classList.toggle("hidden");
}
