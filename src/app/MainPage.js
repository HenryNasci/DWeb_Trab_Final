import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Header from '../Components/Header';
import Info from '../Components/Info';


function MainPage() {
  //posts vai ser preenchido com os dados dos produtos
  const [posts, setPosts] = useState([]);
  //carrinho vai ser preenchido com os produtos
  const [carrinho, setCarrinho] = useState([]);

  //obter dados dos produtos //request GET na rota api/ProdutosController2 //dados armazenados em "posts"
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("api/ProdutosController2", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //verificar se há um carrinho na sessão 
  useEffect(() => {
    if (sessionStorage.getItem('carrinho')) {
      setCarrinho(JSON.parse(sessionStorage.getItem('carrinho')));
    }
  }, []);
  console.log('carrinho');
  console.log(carrinho);

  //armazenar dados do produto selecionado, rederecionar para a página do produto
  const handleOnClickToProd = (index) => {
    sessionStorage.setItem('produto', JSON.stringify(posts[index]));
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.href = './Produto';
  };

  return (
    <div className="baseMainPage">
      <Header />
      <div className="bodyMainPage">
        <div className="divProdutosMainPage">
          {posts.map((post, index) => (
            <div className="divProdutoMainPage" onClick={() => handleOnClickToProd(index)}>
              <img className="imgProdutoMainPage" alt="Imagem do Produto" src={"https://localhost:7085/imagens/" + post.fotos[0].nomeFicheiro} />
              <div className="divInfoProdutoMainPage">
                <p className="nomeProdutoMainPage">{post.nome}</p>
                <p className="marcaProdutoMainPage">{post.marca}</p>
                <p className="precoProdutoMainPage">{post.preco}€</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divInfoEmpresa">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default MainPage;