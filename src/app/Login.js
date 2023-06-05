import React, { Component } from 'react';
import './Login.css';
import logo from '../img/Logo_v2.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleCheckUsername = (event) => {
        this.setState({ username: event.target.value });
        console.log(this.state.username);
    }

    handleCheckpasswd = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://localhost:7085/Clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                passwd: this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    console.log('User logged in successfully!');
                    window.location.href = './';
                } else {
                    console.log('Error logging in!');
                }
            })
            .catch(error => {
                console.log('Error logging in!');
            });
    }

    render() {
        return (
            <div className="baseLog">
                <div className="LOGIN">
                    <img className='imgLogoLogin' alt='Imagem da Página Login' src={logo} onClick={this.handleOnClickToMain}></img>
                    <div className='login'>
                        <h1 style={{ color: 'white' }}>LOG IN</h1>
                        <form >
                            <div className='divTxtLogin'>
                                <b><p className='paragLogin'>  </p></b>
                                <b><p className='paragLogin'>  </p></b>
                            </div>
                            <div className='divInputsLogin'>
                                <input className='inputLogin' type='text' placeholder='Username' onChange={this.handleCheckUsername}></input>
                                <input className='inputLogin' type='password' placeholder='Password' onChange={this.handleCheckpasswd}></input>
                            </div>
                            <button className='buttonLogin' type='submit' >Log in</button>
                        </form>

                        <a href='./CreateUser' style={{ color: 'white' }}>Don't have an acount?</a>
                    </div>
                </div>
            </div>
        );
    }

    handleOnClickToMain() {
        window.location.href = './';
    }

}


export default Login;