// Efecto de animación para la carga del contenido
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');

    // Aparecer título y subtítulo con retraso
    setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        subtitle.style.opacity = 1;
        subtitle.style.transform = 'translateY(0)';
    }, 1000);
});

/*COCINEROS*/
document.querySelectorAll('.tarjeta-cocinero').forEach(cocinero => {
    cocinero.addEventListener('click', () => {
      const nombre = cocinero.querySelector('.nombre-cocinero').textContent;
      const rol = cocinero.querySelector('.rol-cocinero').textContent;
      
      Swal.fire({
        icon: 'info',
        title: `Conoce a ${nombre}`,
        text: `${nombre} es un destacado ${rol} en nuestro equipo. ¡Ven y disfruta de su especialidad!`,
      });
    });
  });
  