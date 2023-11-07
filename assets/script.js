const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#menu');
const item = document.querySelector('.nav-menu');

menuToggle.addEventListener("click", () => nav.classList.toggle("active"));
item.addEventListener("click", () => nav.classList.toggle("active"));