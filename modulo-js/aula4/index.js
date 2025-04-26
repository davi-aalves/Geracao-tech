// function boasVindas(nome) {
//   document.write(`<h1>Seja bem-vindo ao meu site, ${nome}!</h1>`);
// }

// boasVindas("Davi");

// function somar(numero1, numero2) {
//   return numero1 + numero2;
// }

// let resultado = somar(5, 10);
// console.log(resultado);

function preencherSelects(tag, limite) {
  for (let i = 1; i < limite; i++) {
    tag.innerHTML += `<option>${i}</option>`;
  }
}

preencherSelects(dia, 32);
preencherSelects(mes, 13);
