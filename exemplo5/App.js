// Função simples
function mensagemSimples() {
  //alert("Esta é uma função simples!");
  document.getElementById("resultado").innerText = "Esta é uma função simples!";
}

// Arrow function
const mensagemArrow = () => {
  //alert("Esta é uma arrow function!");
  document.getElementById("resultado").innerText = "Esta é uma arrow function!";
};

// Componente principal
function App() {
  return (
    <div>
      <h2>Exemplo JSX com Funções</h2>
      <button onClick={mensagemSimples}>Função Simples</button>
      <button onClick={mensagemArrow}>Arrow Function</button>
    </div>
  );
}

// Renderizando no DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
