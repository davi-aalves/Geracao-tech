// Adicionando os dias de 1 a 31
let diaSelect = document.querySelector("#dia");

for (let dia = 1; dia <= 31; dia++) {
  let option = document.createElement("option");
  option.value = dia;
  option.textContent = dia;
  diaSelect.appendChild(option);
}

// Adicionando os meses de Janeiro a Dezembro
let mesSelect = document.querySelector("#mes");
let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

for (let i = 0; i < meses.length; i++) {
  let option = document.createElement("option");
  option.value = i + 1; // Meses começam do 1
  option.textContent = meses[i];
  mesSelect.appendChild(option);
}

// Adicionando os anos de 2025 a 1975
let anoSelect = document.querySelector("#ano");
let anoAtual = new Date().getFullYear();

for (let ano = anoAtual; ano >= anoAtual - 50; ano--) {
  let option = document.createElement("option");
  option.value = ano;
  option.textContent = ano;
  anoSelect.appendChild(option);
}
