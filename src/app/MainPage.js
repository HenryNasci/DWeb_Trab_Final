import React, { useState, useEffect } from 'react';
import './MainPage.css';
import logo from '../img/Logo_v2.png';
import name from '../img/nome2.png';
import shopping_cart from '../img/shopping-cart.png';
import Dropdown from 'react-bootstrap/Dropdown';


function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("Produtos", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
    <div className="baseMainPage">
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
              <Dropdown.Item>...</Dropdown.Item>
              <Dropdown.Item>...</Dropdown.Item>
              <Dropdown.Item>...</Dropdown.Item>
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
              <Dropdown.Item>...</Dropdown.Item>
              <Dropdown.Item>...</Dropdown.Item>
              <Dropdown.Item>...</Dropdown.Item>
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
          <img className="imgSoppingCart" alt="Imagem do carrinho de compras" src={shopping_cart} />
          <button className="buttonSignMainPage" onClick={handleOnClickToSign}>
            Sign up
          </button>
          <button className="buttonLogMainPage" onClick={handleOnClickToLog}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
