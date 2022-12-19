import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/produtos/list')
    .then(resposta => resposta.json())
    .then(resposta_conversao => setProdutos(resposta_conversao))
  })

  return (
    <div className="App">
      <Formulario botao={btnCadastrar} />
      <Tabela lista={produtos} />
    </div>
  );
}

export default App;
