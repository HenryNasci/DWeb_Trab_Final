import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Header from '../Components/Header'

function MainPage() {
  const [posts, setPosts] = useState([]);

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

  const handleOnClickToProd = () => {
    window.location.href = './Produto';
  };

  return (
    <div className="baseMainPage">
      <Header />
      <div className="bodyMainPage">
        <div className="divProdutosMainPage">
          {posts.map((post) => (
            <div className="divProdutoMainPage" onClick={handleOnClickToProd}>
              <img className="imgProdutoMainPage" alt="Imagem do Produto" src={post.img} />
              <div className="divInfoProdutoMainPage">
                <p className="nomeProdutoMainPage">{post.nome}</p>
                <p className="marcaProdutoMainPage">{post.marca}</p>
                <p className="precoProdutoMainPage">{post.preco}€</p>
              </div>
            </div>
          ))}
        </div>
      </div>        
    </div>
  );
};

export default MainPage;
