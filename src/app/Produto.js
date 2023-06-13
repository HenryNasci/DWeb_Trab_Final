import React, { useEffect, useState } from 'react';
import './Produto.css';
import Header from '../Components/Header'

function Produto() {

    const post = JSON.parse(sessionStorage.getItem('produto'));
    console.log(post);

    return (
        <div className="baseProduto">
            <Header />
            <div className="bodyProduto">
                <div className="divImgProduto">
                    <img className='imgProduto' alt='Imagem da Página Produto' src={"https://localhost:7085/imagens/" + post.fotos[0].nomeFicheiro}></img>
                </div>
                <div className="divInfoProduto">
                    <h1 className='h1Produto'>{post.nome}</h1>
                    <br></br>
                    <h3 className='h3Produto'>{post.marca}</h3>
                    <br></br>
                    <h3 className='h3Produto'>{post.preco}€</h3>
                    <br></br>
                    <button className="buttonAddProduto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Produto;