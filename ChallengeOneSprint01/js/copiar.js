// Función para copiar el texto del input de resultado al portapapeles
let botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click", () => {
  let textoCopiado = document.querySelector("#resultado").value;
  navigator.clipboard.writeText(textoCopiado);
});
