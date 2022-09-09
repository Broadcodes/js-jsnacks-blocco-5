/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */


/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


/* SNACK 1*/

squadraCalcio = [
    {
        nome: 'Italia',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Barcellona',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Francia',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Spagna',
        'punti fatti': 0,
        'falli subiti': 0
    }
]

console.log({ squadraCalcio });

squadraCalcio.forEach(element => {
    element['punti fatti'] = random();
    element['falli subiti'] = random();
});

function random() {
    return Math.floor(Math.random() * 10) + 1;
}

/* SNACK 2 vers1 creata da me*/

const array = [];
let a1 = 3;
let b2 = 24;

console.log("SNACK 2: Prima versione " + nomeFunzione(array, a1, b2));

function nomeFunzione(arr, num1, num2) {

    const arrApp = [];

    for (let index = 0; index < 100; index++) {
        let number = Math.floor(Math.random() * 10) + 1;
        arr.push(number)
    }

    for (let index = num1; index < num2; index++) {
        arrApp.push(arr[index])
    }

    return arrApp;
}

/* SNACK 2 vers2 creata da tutto il team 5*/
let a = 10;
let b = 30;
const myArray = [];
for (let index = 0; index < 100; index += 2) {
    myArray.push(index);
}
getGenerateInterval(myArray, a, b);
console.log(myArray);
/**
 *
 * @param {put array} myArray
 * @param {put value a} a
 * @param {put value blu} b
 */
function getGenerateInterval(myArray, a, b) {
    const second = [];
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > a && myArray[index] < b) {
            second.push(myArray[index]);
        }
    }
    console.log(second);
}


/* SNACK 3

 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const minore15 = [];
const maggiore15 = [];
let pesoTotaleMin15 = [];
let pesoTotaleMax15 = [];

for (let index = 0; index < 10; index++) {
    const zucchina = {};
    zucchina.misura = Math.floor(Math.random() * 20) + 1;

    zucchina.misura < 15 ? minore15.push(zucchina) : maggiore15.push(zucchina);
    zucchina.misura < 15 ? pesoTotaleMin15.push(zucchina.misura) : pesoTotaleMax15.push(zucchina.misura);
}

let val1 = 0;
let val2 = 0;

for (let index = 0; index < pesoTotaleMin15.length; index++) {
    val1 += pesoTotaleMin15[index];
}

for (let index = 0; index < pesoTotaleMax15.length; index++) {
    val2 += pesoTotaleMax15[index];
}

console.log(`Il peso totale per le zucchine < 15: ${val1}`)
console.log(`Il peso totale per le zucchine < 15: ${val2}`)

console.log(minore15, maggiore15);

