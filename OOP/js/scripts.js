// // 1 - metodos

// const animal = {
//     nome: "bob",

//     latir: function () {
//         console.log("Au au");
//     },
// };

// console.log(animal.nome)

// animal.latir();

// // 2 - apronfundando em metodos

// const pessoa = {
//     nome: "Matheus",

//     getNome: function () {
//         return this.nome;
//     },

//     setname: function (novoNome) {
//         this.nome = novoNome;
//     },
// }


// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// console.log(pessoa.getNome());

// pessoa.setname("Rafael")

// console.log(pessoa.getNome());

// //  3 - prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));



// //  4- mais sobre prototype

// const myObjeto = {
//     a: "b",
// }

// console.log(Object.getPrototypeOf(myObjeto));

// console.log(Object.getPrototypeOf(myObjeto) === Object.prototype);

// const mySecundObject = Object.create(myObjeto);

// console.log(mySecundObject);

// console.log(mySecundObject.a);

// console.log(Object.getPrototypeOf(mySecundObject) === myObjeto);

// //  5- classes basicas

// const cachorro = {
//     raca: null,
//     porte: null,
// }

// const pastoAlemao = Object.create(cachorro);

// pastoAlemao.raca = "Pastor Alemão";
// pastoAlemao.porte = "Medio";

// console.log(pastoAlemao.raca);
// console.log(pastoAlemao.porte);


// const pitbull = Object.create(cachorro);

// pitbull.raca = "pitbull";
// pitbull.porte = "grande";

// console.log(pitbull.raca);
// console.log(pitbull.porte);

// // 6 - funcao como classe - funcao construtora

// function criarCachorro(nome, raca) {

//     const cachorro = Object.create({});

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro
// }

// const apolo = criarCachorro("Apolo", "labrador");

// console.log(apolo);

// // 7 - funcoes como classe

// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("ozzy", "Husky");

// console.log(husky);

// // 8 - metodos na funcao construtora

// Cachorro.prototype.uivar = function () {
//     console.log("auuu!");
// };

// console.log(Cachorro.prototype);

// husky.uivar();

// // 9 - classes
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse("Jeff", "labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));
// console.log(jeff.nome);

// // mais sobre class

// class Caminhao {
//     constructor(eixo, cor) {
//         this.eixo = eixo;
//         this.cor = cor;
//     }

//     descreverCaminho() {
//         console.log("este caminhão tem " + this.eixo + " e é da cor: " + this.cor)
//     }
// }

// const scania = new Caminhao(4, "branco");

// console.log(scania);

// scania.descreverCaminho();

// // override das propriedades via prototype

// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const Fael = new Humano("Rafael", 22);

// console.log(Fael);

// Humano.prototype.idade = "Nao definida";

// console.log(Fael.idade);
// console.log(Fael.nome);

// console.log(Humano.prototype.idade);

// symbol
class Aviao {
    construtor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol;
const pilotos = Symbol;

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// getter e setter

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return "voce esta lendo" + this.titulo;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(",")
        this.tags = tagsArrays
    }

}

const myPost = new Post("algum post ", "é im post sobre programacao");

console.log(myPost);

console.log(myPost.exibirTitulo); // get

myPost.adicionarTags = "Rafael Debroi"; // set

// heranca 
class Mamifero {
    construtor(patas) {
        this.patas = patas;
    }
}


class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas) // envia patas da classe pai
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");

console.log(shark);

//  instanceof

console.log(shark instanceof Lobo); //verificacao

console.log(Lobo instanceof Mamifero);

