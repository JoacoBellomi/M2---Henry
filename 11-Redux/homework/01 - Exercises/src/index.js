const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector("#valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {

  contador = store.getState().contador;
  console.log(contador);
  valor.innerHTML = "" + contador; 
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:


const botonInc = document.querySelector("#incremento");
const botonDec = document.querySelector("#decremento");
const botonImpar = document.querySelector("#incrementoImpar");
const botonAsync = document.querySelector("#incrementoAsync");

botonInc.addEventListener("click", () => {
  store.dispatch(incremento());
})

botonDec.addEventListener("click", () => {
  store.dispatch(decremento());
})

botonImpar.addEventListener("click", () => {
  valor.innerHTML % 2 !== 0 && store.dispatch(incremento())
})

botonAsync.addEventListener("click", () => {
  // store.dispatch(incrementoAsync())
})
