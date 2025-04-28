let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > 5 && num2 > 5) {
  console.log("Ambos os números são maiores que 5.");
} else if (num1 > 5 || num2 > 5) {
  console.log("Pelo menos um dos números é maior que 5.");
} else {
  console.log("Nenhum dos números é maior que 5.");
}
