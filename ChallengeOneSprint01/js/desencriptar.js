// Descripción: Este archivo contiene el código JavaScript para desencriptar el texto ingresado por el usuario.
let botonDesencriptar = document.querySelector("#desencriptar"); //boton para desencriptar texto.

botonDesencriptar.addEventListener("click", () => {
  //al hacer click en el boton desencriptar se ejecuta la funcion desencriptar.
  let textoUsuario = document.querySelector("#texto-encriptar").value;
  let textoDesencriptado = desencriptar(textoUsuario);

  let resultado = document.querySelector("#resultado");
  resultado.value = textoDesencriptado;
});

//Funcion para desencriptar texto.
function desencriptar(textoUsuario) {
  let textoEncriptado = "";
  for (const clave in claves) {
    textoEncriptado = textoUsuario.replaceAll(claves[clave], clave);
    //se actualiza el texto del usuario con las modificaciones ya realizadas.
    textoUsuario = textoEncriptado; //se actualiza el texto del usuario con las modificaciones ya realizadas.
  }
  return textoEncriptado; //retorna el texto desencriptado.
}
