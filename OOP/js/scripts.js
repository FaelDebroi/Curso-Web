// 1 - metodos

const animal = {
    nome: "bob",

    latir: function () {
        console.log("Au au");
    },
};

console.log(animal.nome)

animal.latir();

// 2 - apronfundando em metodos

const pessoa = {
    nome: "Matheus",

    getNome: function () {
        return this.nome;
    },

    setname: function (novoNome) {
        this.nome = novoNome;
    },
}


console.log(pessoa.nome);

console.log(pessoa.getNome());

console.log(pessoa.getNome());

pessoa.setname("Rafael")

console.log(pessoa.getNome());

//  3 - prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));



//  4- mais sobre prototype

const myObjeto = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObjeto));

console.log(Object.getPrototypeOf(myObjeto) === Object.prototype);

const mySecundObject = Object.create(myObjeto);

console.log(mySecundObject);

console.log(mySecundObject.a);

console.log(Object.getPrototypeOf(mySecundObject) === myObjeto);

//  5- classes basicas 

const cachorro = {
    raca: null,
    porte: null,
}

const pastoAlemao = Object.create(cachorro);

pastoAlemao.raca = "Pastor Alemão";
pastoAlemao.porte = "Medio";

console.log(pastoAlemao.raca);
console.log(pastoAlemao.porte);


const pitbull = Object.create(cachorro);

pitbull.raca = "pitbull";
pitbull.porte = "grande";

console.log(pitbull.raca);
console.log(pitbull.porte);

// 6 - funcao como classe - funcao construtora

function criarCachorro(nome, raca) {

    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro
}

const apolo = criarCachorro("Apolo", "labrador");

console.log(apolo);

// 7 - funcoes como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("ozzy", "Husky");

console.log(husky);

// 8 - metodos na funcao construtora

Cachorro.prototype.uivar = function () {
    console.log("auuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes 
class CachorroClasse{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));
console.log(jeff.nome);

// mais sobre class

class Caminhao {
    constructor(eixo, cor){
        this.eixo = eixo;
        this.cor = cor;
    }

    descreverCaminho(){
        console.log("este caminhão tem " + this.eixo + " e é da cor: " + this.cor)
    }
}

const scania = new Caminhao(4,"branco");

console.log(scania);

scania.descreverCaminho();
