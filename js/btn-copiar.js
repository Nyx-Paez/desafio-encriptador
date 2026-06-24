document.getElementById('boton-copiar').addEventListener('click', function() {
    // Selecciona el contenido
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');

    // Mostrar notificación
    const notificacion = document.getElementById('notificacion');
    notificacion.classList.add('mostrar');

    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
    }, 3000);
});
