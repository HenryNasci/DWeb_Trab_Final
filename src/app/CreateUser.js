import React, { Component } from 'react';
import './CreateUser.css';
import logo from '../img/Logo_v2.png';

class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
        console.log(this.state.username);
    }

    handleChangePasswd = (event) => {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    }

    handleChangeConfPasswd = (event) => {
        this.setState({ confirmPassword: event.target.value });
        console.log(this.state.confirmPassword);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            fetch('https://localhost:7085/Clientes/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        console.log('User created successfully!');
                        window.location.href = './Login';
                    } else {
                        console.log('Error creating user!');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log('Passwords do not match!');
        }
    }

    render() {
        return (
            <div className="baseCreateUser">
                <div className="CreateUser">
                    <img className='imgLogoCreateUser' alt='Imagem da Página CreateUser' src={logo} onClick={this.handleOnClickToMain}></img>
                    <div className='signIn'>
                        <h1 style={{ color: 'white' }}>SIGN UP</h1>
                        <form >
                            <div className='divInputsCreateUser'>
                                <input className='inputCreateUser' type='text' placeholder='Email' onChange={this.handleChangeEmail}></input>
                                <input className='inputCreateUser' type='text' placeholder='Username' onChange={this.handleChangeUsername}></input>
                                <input className='inputCreateUser' type='password' placeholder='Password' onChange={this.handleChangePasswd}></input>
                                <input className='inputCreateUser' type='password' placeholder='Confirm Password' onChange={this.handleChangeConfPasswd}></input>
                            </div>
                            <button className='buttonCreateUser' type='submit' onClick={this.handleSubmit}>Sign Up</button>
                            <a href='./Login' style={{ color: 'white' }}>Already have an account?</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleOnClickToMain() {
        window.location.href = './';
    }

}



export default CreateUser;