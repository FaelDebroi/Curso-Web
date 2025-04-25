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
})