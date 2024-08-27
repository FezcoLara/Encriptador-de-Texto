const textArea = document.querySelector(".box-encriptador");
const mensaje = document.querySelector(".mensaje");
// Ocultar solo el contenido de box-contenedor
const imagen = document.querySelector(".img-muñeco");
const textoUno = document.querySelector(".texto-uno");
const textoDos = document.querySelector(".texto-dos");

const contenedorImagen = document.querySelector(".box-contenedor");
const botonCopiar = document.querySelector(".boton-copiar"); // Selecciona el botón de copiar

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    //contenedorImagen.style.display = "none";
    //mensaje.style.backgroundImage = "none";
    
    imagen.style.display = "none";
    textoUno.style.display = "none";
    textoDos.style.display = "none";
}

function encriptar (stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}    

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function copiarTexto() {
    mensaje.select();  // Selecciona el texto en el textarea
    document.execCommand("copy");  // Copia el texto al portapapeles
    //alert("Texto copiado al portapapeles");  // Mensaje de confirmación
}

// Añade un evento al botón de copiar
botonCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");

    botonCopiar.textContent = "¡Copiado!";
    setTimeout(() => {
        botonCopiar.textContent = "Copiar"; // Vuelve al texto original después de 2 segundos
    }, 2000);
}

