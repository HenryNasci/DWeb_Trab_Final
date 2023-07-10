import React from 'react';
import logo from '../img/Logo_v2.png';
import name from '../img/nome2.png';
import shopping_cart from '../img/shopping-cart.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {


  const handleOnClickToCart = () => {
    window.location.href = './Cart';

  };

  const handleOnClickToLog = () => {
    window.location.href = './Login';
  };

  const handleOnClickToSign = () => {
    window.location.href = './CreateUser';
  };

  const handleOnClickToMain = () => {
    window.location.href = './';
  };

  return (
    <div className="headerMainPage">
      <div className="divLogoMainPage" onClick={handleOnClickToMain}>
        <img className="imgLogoMainPage" alt="Imagem da Página MainPage" src={logo} />
        <img className="imgNameMainPage" alt="Imagem da Página MainPage" src={name} />
      </div>
      <div className="divDropdownsMainPage">
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            RIDER
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Boots</Dropdown.Item>
            <Dropdown.Item>Men's Helmets</Dropdown.Item>
            <Dropdown.Item>Women's Helmets</Dropdown.Item>
            <Dropdown.Item>Men's Breeches</Dropdown.Item>
            <Dropdown.Item>Women's Breeches</Dropdown.Item>
            <Dropdown.Item>Belts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            HORSE
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Saddle</Dropdown.Item>
            <Dropdown.Item>Saddle Pads</Dropdown.Item>
            <Dropdown.Item>Tendon Boots</Dropdown.Item>
            <Dropdown.Item>Rugs</Dropdown.Item>
            <Dropdown.Item>Bridles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            STABLE
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Forks</Dropdown.Item>
            <Dropdown.Item>Shovels</Dropdown.Item>
            <Dropdown.Item>Hay nets</Dropdown.Item>
            <Dropdown.Item>Brooms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            BRANDS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Horze</Dropdown.Item>
            <Dropdown.Item>Jumpin</Dropdown.Item>
            <Dropdown.Item>Kingsland</Dropdown.Item>
            <Dropdown.Item>Harcour</Dropdown.Item>
            <Dropdown.Item>Eskadron</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="btnLog">
        <img className="imgShoppingCart" alt="Imagem do carrinho de compras" src={shopping_cart} onClick={handleOnClickToCart} />
        <button className="buttonSignMainPage" onClick={handleOnClickToSign}>
          Sign up
        </button>
        <button className="buttonLogMainPage" onClick={handleOnClickToLog}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Header