function App() {
  const [valor, setValor] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  // Função simples
  function calcularDobro() {
    if (valor === "") {
      setResultado("Digite um valor");
    } else {
      setResultado(Number(valor) * 2);
    }
  }

  // Arrow function
  const calcularTriplo = () => {
    if (valor === "") {
      setResultado("Digite um valor");
    } else {
      setResultado(Number(valor) * 3);
    }
  };

  return (
    <div>
      <h2>Exemplo React com Input</h2>
      <input
        type="number"
        placeholder="Digite um número"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Resultado"
        value={resultado}
        readOnly
      />
      <br />
      <button onClick={calcularDobro}>Dobrar (Função Simples)</button>
      <button onClick={calcularTriplo}>Triplicar (Arrow Function)</button>
    </div>
  );
}

// Renderizando no DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
