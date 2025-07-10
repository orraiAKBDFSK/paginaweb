document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('details.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', function () {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.removeAttribute('open');
                }
            });
        });
    });

    // Redirige a la página principal al iniciar sesión
    const loginForm = document.querySelector('.login-box');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'index.html'; // Página principal
        });
    }

    // Redirige al formulario de crear cuenta
    const crearCuentaLink = document.querySelector('.register-option a');
    if (crearCuentaLink) {
        crearCuentaLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'RegisterNeuraVault.html';
        });
    }

    console.log("NeuraVault script cargado correctamente.");
});
