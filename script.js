
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function actualizarResultado(texto) {
    const resultadoSection = document.querySelector('.resultado');
    if (texto) {
        resultadoSection.innerHTML = `
            <h2>Mensaje procesado</h2>
            <p id="texto-resultado">${texto}</p>
            <button id="copiar" class="btn-secundario">Copiar</button>
        `;
        document.getElementById('copiar').addEventListener('click', copiarTexto);
    } else {
        resultadoSection.innerHTML = `
            <div class="ilustracion">
                <img src="path/to/your/illustration.png" alt="Ilustración de búsqueda">
            </div>
            <h2>Ningún mensaje fue encontrado</h2>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
    }
}


function copiarTexto() {
    const textoResultado = document.getElementById('texto-resultado').textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}


document.addEventListener('DOMContentLoaded', () => {
    const textoEntrada = document.getElementById('texto-entrada');
    const btnEncriptar = document.getElementById('encriptar');
    const btnDesencriptar = document.getElementById('desencriptar');

    btnEncriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.toLowerCase();
        if (validarTexto(texto)) {
            const textoEncriptado = encriptar(texto);
            actualizarResultado(textoEncriptado);
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        }
    });

    btnDesencriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.toLowerCase();
        if (validarTexto(texto)) {
            const textoDesencriptado = desencriptar(texto);
            actualizarResultado(textoDesencriptado);
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        }
    });
});