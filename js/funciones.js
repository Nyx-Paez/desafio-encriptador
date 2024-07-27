// Definir las conversiones
const conversiones = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar el texto
function encriptarTexto() {
    const inputTexto = document.getElementById('input-texto').value;
    let textoEncriptado = inputTexto;

    // Reemplazar cada carácter según las conversiones
    for (const [key, value] of Object.entries(conversiones)) {
        const regex = new RegExp(key, 'g');
        textoEncriptado = textoEncriptado.replace(regex, value);
    }

    document.querySelector('.output-text').textContent = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const inputTexto = document.getElementById('input-texto').value;
    let textoDesencriptado = inputTexto;

    // Reemplazar cada valor de las conversiones por su clave original
    for (const [key, value] of Object.entries(conversiones)) {
        const regex = new RegExp(value, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, key);
    }

    document.querySelector('.output-text').textContent = textoDesencriptado;
}

// Acceder a los botones y agregar eventos
document.getElementById('boton-encriptar').addEventListener('click', encriptarTexto);
document.getElementById('boton-desencriptar').addEventListener('click', desencriptarTexto);