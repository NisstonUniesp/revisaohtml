function App() {
  // Declarando o state
  const [contador, setContador] = React.useState(0);

  // Funções para manipular o state
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetar = () => setContador(0);

  return (
    <div>
      <h2>Explorando useState</h2>
      <p>Valor atual: {contador}</p>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

// Renderizar
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
