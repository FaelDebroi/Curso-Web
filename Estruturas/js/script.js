



// resursividade

const untilten = (n,m) =>{
    if( n < 10 ){
        console.log("A funcao parou de executar!")
    }else{
        const x = n-m;
        
        console.log(x);

        untilten(x,m);
    }
}

untilten(100,7);

// parametro opcional

// const multiplication = function(m,n){
//     if(n === undefined){
//         return m*2
//     }else{
//         m * n;
//     }
// }

// console.log(multiplication(5))

// console.log(multiplication(2,4))

// const greeting = (name) =>{
//     if(!name){
//         console.log("Ola")
//     }
// }



// mais sobre Functions

// const raizQuadrada =(x) =>{
//     return x*x;
// }

// console.log(raizQuadrada(4));

// const raizQuadrada2 =(x) => x*x

// console.log(raizQuadrada(2));

// console.log(raizQuadrada2(12));

// // arrow function
// const testeArrow = () =>{
//     console.log("esta é uma arrow function");
// }

// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2===0 ){
//         console.log("par "+n)
//         return;
//     }

//     console.log("impar "+n)
// }

// parOuImpar(5);
// parOuImpar(10);



// escopo aninha

// let m =10;

// function escopoAninhado(){
//     let m = 20;
//     if(true){
//         let m = 30;

//         if(true){
//             let m = 40;
//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }
// escopoAninhado();

// console.log(m);



// escopo da funcao

// let y = 10;
// function testandoescopo(){
//     let y = 20;
//     console.log(`Y dentro da funcao é: ${y}`);
// }

// testandoescopo();

// console.log(`Y fora da funcao é: ${y}`)

// Criando Fucnoes
//  function MinhaFuncao(){
//     console.log("MinhaFuncao")
//  } 


// MinhaFuncao()
// MinhaFuncao()
// MinhaFuncao()
// const minhaFuncaoEmvariavel = function(){
//     console.log("MinhaFuncao")
// }

// minhaFuncaoEmvariavel();

// function soma(n1,n2){
//     return n1 +n2;
// }

// const teste = soma(5,2);
// console.log(`teste ${teste}`)


// Variaveis
// let nome = "Debroi";

// console.log(nome);

// nome ="Rafael Debroi";

// console.log(nome);

//  prompt

// const age = prompt("Digite a sua idade:")
// console.log(`Voce tem ${age} anos`)

// alert
// alert("testando")

// math
// console.log(Math.max(5,2,1,20));

// console.log(Math.floor(5.14));

// console.log(Math.ceil(5.14));

// console

// console.log("teste!");

// console.error("testeee!");

// if

// const m = 10;

// if(m > 5){
//     console.log("m e maior que 5");
// }else{
//     console.log("m e menor que 5");
// }

// while
// let p = 0;

// while(p < 10){
//     console.log(`Repetindo ${p}`);
//     p =  p + 1;
// }

// // do while

// let o = 10

// do{
//     console.log(`Valor de o: ${o}`)
//     o--
// }while( o > 2 )

// for
// for (let t = 20; t > 10; t--) {
//   console.log(`repetindo algo ${t}`);

//   if (t === 12) {
//     console.log("é 12");
//     break;
//   }
// }

// continue
// for (let s = 0; s < 10; s = s + 1) {
//   if (s % 2 === 0) {
//     console.log("numero par");
//     continue;
//   }
//   console.log(s);
// }

// const job = "nada";

// switch (job) {
//   case "Programador":
//     console.log("voce é um Programador");
//     break;
//   case "Advogado":
//     console.log("voce é um Advogado");
//     break;
//   case "Engenheiro":
//     console.log("voce é um Engenheiro");
//     break;
//     default:
//         console.log("Vagabundo");
        
// }
