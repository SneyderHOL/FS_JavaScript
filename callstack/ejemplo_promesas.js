/* // Ejemplo 1
const miPromesa = new Promise((resolve, reject) => {
    //resolve('la promesa fue resuelta');
    reject('la promesa fallo');
});

miPromesa.then(
    respuesta => console.log(respuesta),
    razon => console.log(razon)
);
*/
/* // Ejemplo 2
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('setTimeout Finalizo');
        reject('setTimeout Finalizo');
    }, 20000);
});

miPromesa.then(
    respuesta => console.log(respuesta),
    razon => console.log(razon)
);
*/
/*// Ejemplo 3
const miPromesa = new Promise((resolve, reject) => {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
    console.log('tiempoReject', tiempoReject);
    console.log('tiempoResolve', tiempoResolve);
    setTimeout(() => {
        reject('la promesa fallo');
    }, tiempoReject);

    setTimeout(() => {
        resolve('promesa satisfecha');
    }, tiempoResolve);
});

miPromesa.then(
    respuesta => console.log(respuesta),
    razon => console.log(razon)
);
*/
/*// Ejemplo 4 encadenamiento de promesas
const fabricaDePromesas = indice =>
    new Promise((resolve, reject) => {
        const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
        const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
        setTimeout(() => {
            reject(`la promesa ${indice} fallo`);
        }, tiempoReject);

        setTimeout(() => {
            resolve(`promesa ${indice} satisfecha`);
        }, tiempoResolve);
    });
let misPromesas = [];
for(let i=0; i < 10; i++) {
    misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

misPromesas.forEach(actual =>
  actual
  .then(respuesta => console.log(respuesta))
  .catch(razon => console.log(razon))
);
*/
/*// Ejemplo 5 all()
const fabricaDePromesas = indice =>
    new Promise((resolve, reject) => {
        const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
        const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
        setTimeout(() => {
            reject(`la promesa ${indice} fallo`);
        }, tiempoReject);

        setTimeout(() => {
            resolve(`promesa ${indice} satisfecha`);
        }, tiempoResolve);
    });
let misPromesas = [];
for(let i=0; i < 10; i++) {
    misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

Promise.all(misPromesas)
  .then((respuesta) => console.log(respuesta))
  .catch((razon) => console.log(razon));
  */
/*// Ejemplo 6 allSettled()
const fabricaDePromesas = indice =>
new Promise((resolve, reject) => {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
        reject(`la promesa ${indice} fallo`);
    }, tiempoReject);

    setTimeout(() => {
        resolve(`promesa ${indice} satisfecha`);
    }, tiempoResolve);
});
let misPromesas = [];
for(let i=0; i < 10; i++) {
misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

Promise.allSettled(misPromesas)
.then((respuesta) => console.log(respuesta))
.catch((razon) => console.log(razon));
*/
// Ejemplo 7 race()
const fabricaDePromesas = indice =>
new Promise((resolve, reject) => {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
        reject(`la promesa ${indice} fallo`);
    }, tiempoReject);

    setTimeout(() => {
        resolve(`promesa ${indice} satisfecha`);
    }, tiempoResolve);
});
let misPromesas = [];
for(let i=0; i < 10; i++) {
misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

Promise.race(misPromesas)
.then((respuesta) => console.log(respuesta))
.catch((razon) => console.log(razon));