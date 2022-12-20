/**
 * //creo un objeto que contiene los datos de la aplicacion
 * @param {*} value
 * @returns {observer} //retorna un objeto que contiene los datos de la aplicacion
 */
const observe = (value) => {
  const observers = [];

  return {
    get() {
      //obtiene el valor del atributo model
      return value;
    },

    set(newValue) {
      //setea el valor del atributo model
      if (value === newValue) return;

      value = newValue;
      this.observers(); //observa el valor del atributo model
    },

    observers() {
      observers.forEach((observer) => observer(value));
    },

    observe(observer) {
      observers.push(observer);
    },

    unobserve(observer) {
      observers.splice(observers.indexOf(observer), 1);
    },
  };
};

export default observe; //exporto la funcion observe
