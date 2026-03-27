// Função simples
function somarNumeros() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let resultado = n1 + n2;
  document.getElementById("resultado").innerText = "Soma: " + resultado;
}

// Arrow function
const multiplicarNumeros = () => {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let resultado = n1 * n2;
  document.getElementById("resultado").innerText = "Multiplicação: " + resultado;
}

function subtrairNumeros() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let resultado = n1 - n2;
  document.getElementById("resultado").innerText = "Subtrair: " + resultado;
}

function dividirNumeros() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let resultado = n1 / n2;
  document.getElementById("resultado").innerText = "Dividir: " + resultado;
}