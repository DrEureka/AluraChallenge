import typeEffect from "./typeEffect.js"; // Importo la funcion typeEffect.
import createStore from "./store.js"; // Importo la funcion createStore.
import { ENCODER, DECODER } from "./dictionary.js";

const store = createStore({
  // Creo un objeto que contiene los datos de la aplicacion.
  input: "",
  output: "",
  showOutput: false,
});

/**
 *
 * @param {function} translateFun  // Funcion que codifica o decodifica.
 * @returns {() => void} // Retorna una funcion.
 */
const encodeDecode = (translateFun) => () => {
  // Funcion que codifica o decodifica.
  //
  const text = translateFun(
    store.input
      .get()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  );

  store.output.set(text);
  store.showOutput.set(true);
};

document // Evento que se ejecuta cuando se escribe en el input.
  .querySelector("#codificar")
  .addEventListener("click", encodeDecode(ENCODER));

document // Evento que se ejecuta cuando se escribe en el input.
  .querySelector("#decodificar")
  .addEventListener("click", encodeDecode(DECODER));

document.querySelector("#copiar").addEventListener("click", () => {
  // Evento que se ejecuta cuando se hace click en el boton copiar.
  navigator.clipboard.writeText(store.output.get());
  typeEffect(); // Reproduce el sonido de tipeo.
});
