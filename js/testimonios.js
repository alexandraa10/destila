let index = 0;
const testimonios = document.querySelectorAll('.testimonio-item');
const itemsToShow = 3;

function mostrarTestimonios() {
    testimonios.forEach((item, i) => {
        item.style.display = (i >= index && i < index + itemsToShow) ? 'block' : 'none';
    });
}

function nextTestimonial() {
    if (index + itemsToShow < testimonios.length) {
        index++;
        mostrarTestimonios();
    }
}

function prevTestimonial() {
    if (index > 0) {
        index--;
        mostrarTestimonios();
    }
}

// Inicializa y autodesliza
mostrarTestimonios();

let testimonialInterval = setInterval(nextTestimonial, 4000);

document.querySelector('.testimonio-carrusel').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonio-carrusel').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 4000);
});
