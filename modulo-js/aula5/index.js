/* 
Operadores em JavaScript:
- Atribuição: =, +=, -=, *=, /=, %=
- Aritméticos: +, -, *, /, %
- Comparação: ==, ===, !=, !==, >, <, >=, <=
- Lógicos:
  - AND (&&): Retorna verdadeiro se ambos os operandos forem verdadeiros.
  - OR (||): Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
  - NOT (!): Inverte o valor lógico do operando.


*/

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > 5 && num2 > 5) {
  console.log("Ambos os números são maiores que 5.");
} else if (num1 > 5 || num2 > 5) {
  console.log("Pelo menos um dos números é maior que 5.");
} else {
  console.log("Nenhum dos números é maior que 5.");
}
