import React, { Component } from 'react';
import './MainPage.css';
import logo from '../img/Logo_v2.png';
import name from '../img/nome2.png';
import shopping_cart from '../img/shopping-cart.png';
import Dropdown from 'react-bootstrap/Dropdown';

class MainPage extends Component {

    
    render() {
        return (
            <div className="baseMainPage">
                <div className="headerMainPage">
                    <div className="divLogoMainPage" onClick={this.handleOnClickToMain}>
                        <img className='imgLogoMainPage' alt='Imagem da Página MainPage' src={logo} ></img>
                        <img className='imgNameMainPage' alt='Imagem da Página MainPage' src={name} ></img>
                    </div>
                    <div className='divDropdownsMainPage'>
                        <Dropdown className='dropdownMainPage'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                RIDER
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='dropdownMainPage'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                HORSE
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                        <Dropdown className='dropdownMainPage'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                STABLE
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                                <Dropdown.Item >...</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                        <Dropdown className='dropdownMainPage'>
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
                        <button className="buttonSignMainPage" onClick={this.handleOnClickToSign}>Sign up</button>
                        <button className="buttonLogMainPage" onClick={this.handleOnClickToLog}>Login</button>
                    </div>
                </div>
            </div>
        );
    }

    handleOnClickToLog() {
        window.location.href = './Login';
    }
    
    handleOnClickToSign() {
        window.location.href = './CreateUser';
    }
    
    handleOnClickToMain() {
        window.location.href = './';
    }

}

    

export default MainPage;



