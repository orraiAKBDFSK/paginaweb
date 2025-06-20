document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            alert('Botón clicado: ' + this.textContent);
        });
    });
});
