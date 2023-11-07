const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#menu');

menuToggle.addEventListener("click", () => nav.classList.toggle("active"));