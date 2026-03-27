function App() {
  // Criando uma variável de estado chamada "contador"
  const [contador, setContador] = React.useState(0);

  // Função simples para incrementar
  function incrementar() {
    setContador(contador + 1);
  }

  // Arrow function para decrementar
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Exemplo de useState</h2>
      <p>Valor atual: {contador}</p>
      <button onClick={incrementar}>Incrementar (Função Simples)</button>
      <button onClick={decrementar}>Decrementar (Arrow Function)</button>
    </div>
  );
}

// Renderizando no DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);