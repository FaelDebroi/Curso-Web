// setTimeout

// console.log("ainda nao executou");

// setTimeout(() => {
//     console.log("requisicao assincrona")
// }, 2000);

// console.log("Ainda não executou 2")


// setIntterval

// console.log("Ainda nao comecou");

// setInterval(function () {
//     console.log("intervalo assincrono");
// }, 3000);

// console.log("Ainda não comecou 2")

// Promise
// const promessa = Promise.resolve(5 + 5);

// console.log("algum codigo");

// promessa.then(value => {
//     console.log("a soma é de: " + value);
//     return value;
// })
//     .then((value) => value - 1) // leva a diante
//     .then((value) => console.log("agora é " + value));

// console.log("outro codigo");


// falha na promise

// Promise.resolve(4 * "ads")
//     .then((n) => {
//         if (Number.isNaN(n)) {
//             throw new Error("Valores invalidos");
//         }
//     })
//     .catch((err) => console.log("Um erro ocorreu: " + err));

// rejeicão

// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if (n > 10) {
//             resolve("o numero é que 10");
//         } else {
//             reject(new Error("Numero muito baixo"));
//         }
//     });
// }

// const a = checkNumber(20);

// const b = checkNumber(10);


// a.then((v) => console.log("resultado é" + v)).catch((err) =>
//     console.log("Um erro ocoreu: " + err));

//  resolvendo
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10)
//     }, 1000)
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//     if (30 > 10) {
//         resolve(30);
//     } else {
//         reject("error!")
//     }
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// async functions
// async function somarComDelay(a, b) {
//     return a + b
// }

// somarComDelay(2, 4).then((values) => {
//     console.log("o valor da soma é: " + values);
// })

// console.log("teste async");

// //  async await
// function resolveComDelay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Resolveu a Promise");
//         }, 2000);
//     });
// }

// async function chamadaAsync() {
//     console.log("Chamando a Promise, e esperando o resultado");
//     const result = await resolveComDelay()
//     console.log("o resultado chegou: " + result)
// }

// chamadaAsync();


// generators
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);