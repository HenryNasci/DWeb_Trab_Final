import React from 'react';
import './Produto.css';
import logo from '../img/Logo_v2.png';
import name from '../img/nome2.png';
import prod from '../img/prod_teste.jpg'
import shopping_cart from '../img/shopping-cart.png';
import Dropdown from 'react-bootstrap/Dropdown';

function Produto() {

    function handleOnClickToLog() {
        window.location.href = './Login';
    }
    
    function handleOnClickToSign() {
        window.location.href = './CreateUser';
    }
    
    function handleOnClickToMain() {
        window.location.href = './';
    }

    return (
        <div className="baseProduto">
            <div className="headerProduto">
                <div className="divLogoProduto" onClick={handleOnClickToMain}>
                    <img className='imgLogoProduto' alt='Imagem da Página Produto' src={logo} ></img>
                    <img className='imgNameProduto' alt='Imagem da Página Produto' src={name} ></img>
                </div>
                <div className='divDropdownsProduto'>
                    <Dropdown className='dropdownProduto'>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            RIDER
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='dropdownProduto'>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            HORSE
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                    <Dropdown className='dropdownProduto'>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            STABLE
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                    <Dropdown className='dropdownProduto'>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            BRANDS
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                            <Dropdown.Item >...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='btnLog'>
                    <img className='imgSoppingCart' alt='Imagem do carrinho de compras' src={shopping_cart} ></img>
                    <button className="buttonSignProduto" onClick={handleOnClickToSign}>Sign up</button>
                    <button className="buttonLogProduto" onClick={handleOnClickToLog}>Login</button>
                </div>
            </div>
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