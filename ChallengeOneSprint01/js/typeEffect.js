const EFECTO_SONIDO = new Audio("./assets/audio/typeEffect.mp3"); // Creo un objeto de tipo Audio.

/**
 * Declaro los parametros para que este durmiendo for un cierto tiempo x.
 * @param {number} ms  // Tiempo en milisegundos.
 * @returns {Promise<void>} // Retorna una promesa.
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Retorna una promesa.

/*
 * Reproduce el sonido de tipeo y cambia la opacidad del body.
 */
const typeEffect = async () => {
  EFECTO_SONIDO.play(); // Reproduce el sonido.
  document.body.style.opacity = 0.3; // Cambia la opacidad del body.
  await sleep(100); // Espera 100 milisegundos.
  document.body.style.opacity = 1; // Cambia la opacidad del body.
};

export default typeEffect; // Exporto la funcion typeEffect.
