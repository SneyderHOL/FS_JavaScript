/*//Ejemplo 1
setTimeout(() => {
  console.log('me ejecute despues');
}, 3000);*/

/*// Ejemplo 2
const ejecutarMasTarde = () => {
  setTimeout(() => {
    console.log('me ejecute');
  }, 3000);
}*/

/*// Ejemplo 3
const callbackFunc = () => {
  console.log('me ejecute');
};
const ejecutarMasTarde = () => {
  setTimeout(callbackFunc, 3000);
};
ejecutarMasTarde();*/

/*// Ejemplo 4
function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function multiFuncion(num1, num2, operacion) {
  const resultado = operacion(num1, num2);
  console.log(resultado);
}

multiFuncion(5,4, sumar);*/
/*// Ejemplo 5
const miBoton = document.getElementById('miBoton');

const funcEvento = (evento) => {
  console.log('soy un callback');
  alert('diste click en el boton');
};
//console.log(miBoton);
miBoton.addEventListener('click', funcEvento);

funcEvento();*/

/*// Ejemplo 6 anidado
setTimeout(() => {
  console.log('ejecucion1');
  setTimeout(() => {
    console.log('ejecucion2');
    setTimeout(() => {
      console.log('ejecucion3');
      setTimeout(() => {
        console.log('ejecucion4');
      }, 4000);
    }, 10000);
  }, 2000);
}, 3000);*/

//ejemplo 6 en funciones
const funcion1 = () => {
  console.log('ejecucion1');
  setTimeout(funcion2, 2000);
};
const funcion2 = () => {
  console.log('ejecucion2');
  setTimeout(funcion3, 10000);
};
const funcion3 = () => {
  console.log('ejecucion3');
  setTimeout(funcion4, 4000);
};
const funcion4 = () => {
  console.log('ejecucion4');
};

setTimeout(funcion1, 3000);
