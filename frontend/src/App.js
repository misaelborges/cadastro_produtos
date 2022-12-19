import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {

  const produto = {
    codigo: 0,
    nome: '',
    marca: '',
    preco: ''
  }

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objetoProduto, setObjetoProduto] = useState(produto);

  useEffect(() => {
    fetch('http://localhost:8080/produtos/list')
    .then(resposta => resposta.json())
    .then(resposta_conversao => setProdutos(resposta_conversao))
  })

  const insereDados = (e) => {
    console.log(e.target);
  }

  return (
    <div className="App">
      <p>{JSON.stringify(objetoProduto)}</p>
      <Formulario botao={btnCadastrar} eventoInsere={insereDados} />
      <Tabela lista={produtos} />
    </div>
  );
}

export default App;