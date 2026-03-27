function toggleMenu() {
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

//cierre del menuu
window.addEventListener('resize', ()=> {
    if (window.innerWidth > 768) {
        document.getElementById('menu').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    }
});