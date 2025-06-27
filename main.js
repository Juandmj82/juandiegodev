// Espera a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener('DOMContentLoaded', (event) => {

  // --- Código para la animación de la foto de perfil ---
  // Selecciona la imagen de perfil por su clase o algún otro selector
  const perfilImg = document.querySelector('.perfil-hidden'); // Seleccionamos la imagen con la clase inicial

  // Verifica si la imagen fue encontrada
  if (perfilImg) {
    // Después de un pequeño retraso (opcional, pero recomendado para que la transición se note)
    setTimeout(() => {
      perfilImg.classList.remove('perfil-hidden'); // Remueve la clase para activar la transición
    }, 100); // Retraso de 100 milisegundos (ajusta si es necesario)
  }


  // --- Código para el menú hamburguesa ---
  // Selecciona el icono de hamburguesa y la lista de menú
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul'); // Selecciona la lista ul dentro del nav

  // Verifica si ambos elementos fueron encontrados
  if (mobileMenuToggle && navUl) {
    // Añade un event listener de clic al icono de hamburguesa
    mobileMenuToggle.addEventListener('click', () => {
      // Alterna la clase 'nav-open' en la lista ul para mostrar/ocultar el menú
      navUl.classList.toggle('nav-open');
      // Opcional: Alternar una clase en el icono para animarlo a una 'X'
      mobileMenuToggle.classList.toggle('is-active');
    });

    // Opcional: Cierra el menú cuando se haga clic en un enlace
    const navLinks = navUl.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navUl.classList.contains('nav-open')) {
          navUl.classList.remove('nav-open');
          mobileMenuToggle.classList.remove('is-active'); // Si estás usando la animación del icono
        }
      });
    });
  }


}); // Cierre del único document.addEventListener('DOMContentLoaded')
