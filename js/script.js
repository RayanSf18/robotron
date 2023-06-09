// busquei e peguei esses elementos do HTML...
const dataControle = document.querySelectorAll("[data-controle]"); // peguei todos elementos com essa classe...
const dataEstatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

console.log(pecas)

dataControle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados (operacao, controle) {
    const dataPeca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        dataPeca.value = parseInt(dataPeca.value) - 1;
    } else {
        dataPeca.value = parseInt(dataPeca.value) + 1;
    }
}

function atualizaEstatisticas (peca) {
    dataEstatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
};