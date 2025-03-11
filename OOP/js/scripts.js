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

console.log(Object.getPrototypeOf(mySecundObject) === myObjeto)