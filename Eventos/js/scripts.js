// 1- adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("testellllll");
});

// 2 - removendo evento 
const secondBtn = document.querySelector("#btn");

function imprimirmensagem() {
    console.log("testeeeh")
}

secondBtn.addEventListener("click", imprimirmensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirmensagem);
});

// 3 - argumentos do evento
const mytitle = document.querySelector("#my-title")

mytitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});


//4- propagacao
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2");
});

// 5 - removendo evento padrao

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("nao alterou a pagina");
})


// 6- evento de tecla
document.addEventListener("keyup", (e) => {
    console.log(`solta a tecla ${e.key}`);
});

// 7-

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou o botao");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botao");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("click dublo");
});

// 8 - movimento do mouse

// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo x: ${e.x}`);
//     console.log(`No eixo y: ${e.y}`);
// })

// 9- evento de scroll
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("passamos de 200 " + `${window.pageYOffset}`)
    }
});

// 10- evento de focus/blur

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu no input");
});

// 11 - evento de carregamento

window.addEventListener("load", () => {
    console.log("A pagina carregou!");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
});

//12- debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};


window.addEventListener("mousemove", debounce(() => {
    console.log("Execultando a cada 400ms");
}, 400)
);