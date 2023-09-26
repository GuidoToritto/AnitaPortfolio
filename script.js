function toggleNavClass() {
    var nav = document.querySelector('.nav');
    var modalCheckbox = document.getElementById('btn-modal');

    // Escuchar el evento de cambio en el checkbox de la ventana modal
    modalCheckbox.addEventListener('change', function () {
        if (!modalCheckbox.checked) {
            // Habilitar nuevamente la apertura de la ventana modal
            nav.classList.remove('nav-disabled');
        }
    });
}
