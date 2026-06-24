// --- SISTEMA DE NAVEGACIÓN (PESTAÑAS) ---
function mostrarSeccion(evento, idSeccion) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // 2. Quitar el color azul (activo) de todos los botones
    const botones = document.querySelectorAll('.nav-btn');
    botones.forEach(btn => btn.classList.remove('activo'));

    // 3. Mostrar la sección seleccionada y pintar su botón
    document.getElementById(idSeccion).style.display = 'block';
    evento.currentTarget.classList.add('activo');
}

// --- LÓGICA DEL SIMULADOR BOMBE (CRIPTOGRAFÍA) ---
const DESPLAZAMIENTO = 3;

function procesarMensaje(texto, desplazamiento) {
    return texto.split('').map(char => {
        // Solo desplazamos letras (ignoramos espacios y números)
        if (char.match(/[a-z]/i)) {
            let codigoAsci = char.charCodeAt(0);
            let base = (codigoAsci >= 65 && codigoAsci <= 90) ? 65 : 97;
            // Fórmula matemática de rotación
            return String.fromCharCode(((codigoAsci - base + desplazamiento) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}

function encriptarTexto() {
    const inputTexto = document.getElementById('input-texto').value;
    document.getElementById('output-text').value = procesarMensaje(inputTexto, DESPLAZAMIENTO);
}

function desencriptarTexto() {
    const inputTexto = document.getElementById('input-texto').value;
    document.getElementById('output-text').value = procesarMensaje(inputTexto, -DESPLAZAMIENTO);
}

// Escuchar los clics en los botones de cifrado
document.getElementById('boton-encriptar').addEventListener('click', encriptarTexto);
document.getElementById('boton-desencriptar').addEventListener('click', desencriptarTexto);