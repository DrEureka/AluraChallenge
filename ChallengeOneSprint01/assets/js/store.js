import observe from "./observer.js";

/**
 *
 * // Creo un objeto que contiene los datos de la aplicacion.
 * @param {{ [key]: string }} defaultStore // Objeto que contiene los datos de la aplicacion.
 * @returns {{ [key]: observer }} // Retorna un objeto que contiene los datos de la aplicacion.
 */
const createStore = (defaultStore = {}) => {
  // Funcion que crea un objeto que contiene los datos de la aplicacion.
  const store = Object.fromEntries(
    Object.entries(defaultStore).map(([key, value]) => [key, observe(value)])
  );

  document.querySelectorAll("[model]").forEach((element) => {
    // Recorro todos los elementos que tienen el atributo model.
    if (!store[element.getAttribute("model")]) return;

    const value = store[element.getAttribute("model")]; // Obtengo el valor del atributo model.
    element.addEventListener("keyup", () => value.set(element.value));
    value.observe((value) => (element.innerHTML = value));
    value.observers();
  });

  document.querySelectorAll("[if]").forEach((element) => {
    // Recorro todos los elementos que tienen el atributo if.
    if (!store[element.getAttribute("if")]) return;

    const defaultDisplay = element.style.display; // Obtengo el valor del atributo display.
    const value = store[element.getAttribute("if")];
    const hasElse = element.nextElementSibling?.hasAttribute("else"); // Obtengo el valor del atributo else.

    value.observe((value) => {
      // Observo el valor del atributo if.
      element.style.display = value ? defaultDisplay : "none";

      if (hasElse) {
        // Si tiene el atributo else.
        element.nextElementSibling.style.display = value // Si el valor del atributo if es true, entonces el valor del atributo else es none.
          ? "none"
          : defaultDisplay;
      }
    });

    value.observers(); // Observo el valor del atributo if.
  });

  return store; // Retorno el objeto que contiene los datos de la aplicacion.
};

export default createStore; // Exporto la funcion createStore.
