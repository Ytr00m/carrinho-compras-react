import { useState } from 'react'
import './App.css'

function App() {
  const [lista_produtos, setListaProdutos] = useState([])
  const [nome_produto, setNomeProduto] = useState("")
  const [qtd_carrinho, setCarrinho]  = useState(lista_produtos.length)

  function addProduto() {
    if (!(nome_produto === "")){

      let newProdutos = [...lista_produtos,  nome_produto];
      setNomeProduto("");
      setCarrinho(qtd_carrinho+1);
      setListaProdutos(newProdutos);
    }
  }

  function removeProduto(index) {
    let newProdutos = [];
    for (let i=0;i<lista_produtos.length;i++) {
      if (i !== index) {
        newProdutos.push(lista_produtos[i])
    }
    setCarrinho(qtd_carrinho-1)
    setListaProdutos(newProdutos);
  }}
  return (
    <div className="main">
      <h1>Carrinho de compras</h1>
      <div className="container">
        <div>
          <input type="text" placeholder='Nome do produto' value={nome_produto} onChange={(e) =>setNomeProduto(e.target.value)}/>
          <button onClick={addProduto}>Adicionar Produto</button>
        </div>
        <h2>Quantidade:  {qtd_carrinho}</h2>
        <div className='lista'>
          {lista_produtos.map((produto, index) => (
            <div key={index} className='row'>
                <span>{produto}</span>
                <button onClick={() => removeProduto(index)}>apagar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
