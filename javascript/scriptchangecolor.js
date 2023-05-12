const container = document.querySelector('.container');
const cor = document.querySelector('input');

const corpadrao = '#fff';

container.style.backgroundColor = `${corpadrao}`;

function mudarBG() {
    container.style.backgroundColor = `${cor.value}`;
}