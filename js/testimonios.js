let index = 0;
const testimonios = document.querySelectorAll('.testimonio-item');

function itemsToShow() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function mostrarTestimonios() {
  const visible = itemsToShow();
  testimonios.forEach((item, i) => {
    if (i >= index && i < index + visible) {
      item.style.display = 'block';
      item.style.opacity = '0';
      item.style.transform = 'translateY(10px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    } else {
      item.style.display = 'none';
    }
  });
}

function nextTestimonial() {
  const visible = itemsToShow();
  if (index + visible < testimonios.length) {
    index++;
  } else {
    index = 0;
  }
  mostrarTestimonios();
}

function prevTestimonial() {
  if (index > 0) {
    index--;
    mostrarTestimonios();
  }
}

mostrarTestimonios();

let testimonialInterval = setInterval(nextTestimonial, 4000);

document.querySelector('.testimonio-carrusel').addEventListener('mouseenter', () => {
  clearInterval(testimonialInterval);
});
document.querySelector('.testimonio-carrusel').addEventListener('mouseleave', () => {
  testimonialInterval = setInterval(nextTestimonial, 4000);
});


window.addEventListener('resize', () => {
  index = 0;
  mostrarTestimonios();
});
