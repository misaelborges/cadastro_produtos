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
    setObjetoProduto({...objetoProduto, [e.target.name]:e.target.value});
  }

  const Cadastrar = () => [
    fetch('http://localhost:8080/produtos/save', {
      method:'POST',
      body:JSON.stringify(objetoProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resposta_conversao =>{
      alert('Produto Cadastrado com Sucesso!')
      limpaFormulario();
    })
  ]

  const limpaFormulario = () => {
    setObjetoProduto(produto);
  }

  return (
    <div className="App">
      <Formulario botao={btnCadastrar} eventoInsere={insereDados} cadastrar={Cadastrar} objeto={objetoProduto} />
      <Tabela lista={produtos} />
    </div>
  );
}

export default App;