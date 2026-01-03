    //Función que se encarga de ejecutar el menú Amburguesa para móviles
    // Añadimos en Listener para que se ejecuter una vez se ha argado el DOM
    // Document Object Model
document.addEventListener('DOMContentLoaded', function () {
    // Cargamos el objeto que responda a la clase menu-toggle
    var toggle = document.querySelector('.menu-toggle');
    // Cargamos el objeto que responda a la clase main-nav
    var nav = document.querySelector('.main-nav');

    // Si encuentra ambos objetos en el modelo de objetos del documento
    if (toggle && nav) {
        // Crea un Listener para capturar el clik
        toggle.addEventListener('click', function () {
            // En caso de hacerse clik llama a la clase is-open del css
            nav.classList.toggle('is-open');
            });
        }
    });
