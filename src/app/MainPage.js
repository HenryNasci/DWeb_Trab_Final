import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Header from '../Components/Header';
import Info from '../Components/Info';
import { useLocation } from 'react-router-dom';

function MainPage() {
  const [posts, setPosts] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.prodProduto) {
      const produtoObjt = location.state.prodProduto;
      setCarrinho([...carrinho, produtoObjt]);
    }
  }, [location.state]);
  console.log('carrinho');
  console.log(carrinho);


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

  const handleOnClickToProd = (index) => {
    sessionStorage.setItem('produto', JSON.stringify(posts[index]));
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