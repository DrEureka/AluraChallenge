// Descripción: Este archivo contiene el código JavaScript para desencriptar el texto ingresado por el usuario.
function validarTexto(texto) {
  //funcion para validar que el texto solo tenga minúsculas y sin signos ni acentos.
  console.log(texto);

  let mayusculas = /[A-Z]/g; //expresion regular para validar que el texto no tenga mayusculas.
  let caracteresEspeciales = /[áéíóú]/g; //expresion regular para validar que el texto no tenga acentos.

  if (texto.match(mayusculas)) {
    //si el texto tiene mayusculas retorna true.
    return true;
  } else if (texto.match(caracteresEspeciales)) {
    //si el texto tiene acentos retorna true.
    return true;
  } else {
    //si el texto no tiene mayusculas ni acentos retorna false.
    return false;
  }
}
