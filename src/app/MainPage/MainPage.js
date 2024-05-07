import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Header from '../../Components/Header';
import Info from '../../Components/Info';

function MainPage() {
  //posts vai ser preenchido com os dados dos produtos
  const [posts, setPosts] = useState([]);
  //carrinho vai ser preenchido com os produtos
  const [carrinho, setCarrinho] = useState([]);
  //categoria vai ser preenchido com a categoria selecionada
  const [categoria, setCategoria] = useState('');

  //obter dados dos produtos //request GET na rota api/ProdutosController2 
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("api/ProdutosController2", requestOptions)
      .then((res) => res.json())
      .then((data) => {
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

  //armazenar dados do produto selecionado, rederecionar para a página do produto
  const handleOnClickToProd = (index) => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === index) {
        index = i;
      }
    }
    console.log('index', index);
    sessionStorage.setItem('produto', JSON.stringify(posts[index]));
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.href = './Produto';
  };

  //verificar se há uma categoria na sessão 
  useEffect(() => {
    if (sessionStorage.getItem('categoria')) {
      setCategoria(sessionStorage.getItem('categoria'));
    }
  }, []);

  // Filtrar os produtos com base na categoria selecionada
  const produtosFiltrados = categoria
    ? posts.filter((post) => post.categoria.nome === categoria)
    : posts;

  //armazenar dados da categoria selecionada, rederecionar para a página inicial
  const handleGetCategoria = (catNome) => {
    sessionStorage.setItem('categoria', catNome);
    window.location.href = './';
  };
  console.log('posts', posts);

  return (
    <div className="baseMainPage">
      <Header handleGetCategoria={handleGetCategoria} />
      <div className="bodyMainPage">
        <div className="divProdutosMainPage">
          {produtosFiltrados.map((post) => (
            <div className="divProdutoMainPage" onClick={() => handleOnClickToProd(post.id)} key={post.id} >
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
}

export default MainPage;