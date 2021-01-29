// Fabrica de promesas
const fabricaDePromesas = indice =>
new Promise((resolve, reject) => {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolve = Math.floor(Math.random() * 10000) + 1000;
    /*setTimeout(() => {
        reject(`la promesa ${indice} fallo`);
    }, tiempoReject);*/

    setTimeout(() => {
        resolve(`promesa ${indice} satisfecha`);
    }, tiempoResolve);
});
/*// Ejemplo 1 async await
async function miAsyncFuncion () {
    try{
        const miPromesa1 = await fabricaDePromesas(1);
        console.log('este es el valor de miPromesa1', {miPromesa1});
    }catch (error) {
        console.log(error);
    }
}
function miFuncion () {
    const miPromesa2 = fabricaDePromesas(2)
      .then(resultado => console.log(resultado))
      .catch(razon => console.log(razon));
}
*/
/*// Ejemplo 2 async await

async function miAsyncFuncion () {
    try{
        const miPromesa1 = await fabricaDePromesas(1);
        //console.log('este es el valor de miPromesa1', {miPromesa1});
        return miPromesa1;
    }catch (error) {
        throw error;
    }
}
function miFuncion () {
    /*const miPromesa2 = fabricaDePromesas(2)
      .then(resultado => console.log(resultado))
      .catch(razon => console.log(razon));*
    return fabricaDePromesas(2);
}
// miAsyncFuncion().then(resultado => console.log('el resultado de aFunc es ', resultado)).catch(razon => console.log('la razon es => ', razon))
// miFuncion().then(resultado => console.log('el resultado de aFunc es ', resultado)).catch(razon => console.log('la razon es => ', razon))
*/
// Ejemplo 3 resolver varias promesas sin all

async function miAsyncFuncion () {
    try{
        let misPromesas = [];
        for(let i=0; i < 10; i++) {
            misPromesas = [...misPromesas, await fabricaDePromesas(i)];
        }
        console.log('variable => ', misPromesas);
        return misPromesas;
    }catch (error) {
        throw error;
    }
}
