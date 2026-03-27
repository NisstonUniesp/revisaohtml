document.getElementById("btnMostrar").addEventListener("click", () => {
  const valor = document.getElementById("texto").value.trim();

  if (valor === "") {
    alert("Por favor, digite algo!");
  } else {
    document.getElementById("resultado").innerText = valor;
  }
});
