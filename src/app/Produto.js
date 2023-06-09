import React from 'react';
import './Produto.css';
import prod from '../img/prod_teste.jpg'
import Header from '../Components/Header'

function Produto() {

    return (
        <div className="baseProduto">
            <Header />
            <div className="bodyProduto">
                <div className="divImgProduto">
                    <img className='imgProduto' alt='Imagem da Página Produto' src={prod} ></img>
                </div>
                <div className="divInfoProduto">
                    <h1 className='h1Produto'>Nome do Produto</h1>
                    <br></br>
                    <h3 className='h3Produto'>Marca do Produto</h3>
                    <br></br>
                    <h3 className='h3Produto'>Preço do Produto</h3>
                    <br></br>
                    <button className="buttonAddProduto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Produto;