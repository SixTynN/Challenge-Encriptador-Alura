const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(fraseEncriptada){
    let arrayEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase()
    
    for(let i = 0; i < arrayEncriptador.length; i++){
        if(fraseEncriptada.includes(arrayEncriptador[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(arrayEncriptador[i][0], arrayEncriptador[i][1]);

        }
    }
    return fraseEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(fraseDesencriptada){
    let arrayEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase()
    
    for(let i = 0; i < arrayEncriptador.length; i++){
        if(fraseDesencriptada.includes(arrayEncriptador[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(arrayEncriptador[i][1], arrayEncriptador[i][0]);

        }
    }
    return fraseDesencriptada
}

function copiar() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector(".copiar").addEventListener("click", copy);

