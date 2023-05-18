import React from 'react';
import './MainPage.css';
import logo from '../img/Logo_v2.png';
import Dropdown from 'react-bootstrap/Dropdown';

function MainPage() {
    //const [marca, setMarca] = React.useState('RIDER');

    return (
        <div className="baseMainPage">
            <div className="headerMainPage">
                <div className="divLogoMainPage">
                    <img className='imgLogoMainPage' alt='Imagem da Página Login' src={logo} onClick={handleOnClickToMain}></img>
                    <h1 className="titleMainPage">Gold Saddle</h1>
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
                    <button className="buttonSignMainPage" onClick={handleOnClickToSign}>Sign up</button>
                    <button className="buttonLogMainPage" onClick={handleOnClickToLog}>Login</button>
                </div>
            </div>
        </div>
    );
}



function handleOnClickToLog() {
    window.location.href = './Login';
}

function handleOnClickToSign() {
    window.location.href = './CreateUser';
}

function handleOnClickToMain() {
    window.location.href = './';
}

export default MainPage;



