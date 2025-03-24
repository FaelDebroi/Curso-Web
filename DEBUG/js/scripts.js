// // 1- strict
// "use strict";

// const opa = "teste";

// // const undefined = 10;

// // delete [].length;

// // 2- console.log

// let a = 1;

// let b = 2;

// if (a == 1) {
//     a = b + 2;
// }

// console.log(a);

// for (let i = 0; i < b; i++) {
//     a = a + 2;
//     console.log(a);
// }

// if (a > 5) {
//     a = 25;
// }
// console.log(a);

// // Debugger

// let c = 1;
// let d = 2;

// if (c == 1) {
//     c = d + 2;
// }

// debugger;
// for (let i = 0; í < d; i++) {
//     c = 25;
// }

// // tratamento de dados

// function checkNumber(n) {
//     const result = Number(n);

//     if (Number.isNaN(result)) {
//         console.log("Valor incorreto!")
//         result;
//     }

//     console.log("valor correto!");
//     return result;
// }

// checkNumber(5);
// checkNumber("10");
// checkNumber([]);
// checkNumber("teste");

// exceptions

// let x = 10;
// console.log(x);

// if (x != 11) {
//     throw new Error("O valor de x nao pode ser diferente de 11!");
// }

// try catch
try {
    const soma = x + y;
} catch (error) {
    console.log("erro no programa: " + error);
}


// finally

try {
    const value = checkNumber("asd");

    if (!value) {
        throw new Error("Valores invalidos");
    }
} catch (err) {
    console.log("opa aconteceu um problema" + err)
} finally {
    console.log("o codigo foi executado!")
}

// assertion

function checkArray(arr) {

    if (arr.length == 0) {
        throw new Error("o array precisa ter elementos");
    } else {
        console.log("o array tem: " + arr.length);
    }
}

checkArray([1, 2, 3]);