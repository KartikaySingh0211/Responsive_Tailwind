const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const bdy = document.getElementById('body');

btn.addEventListener('click', () => {
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})