import React, { useState } from 'react';
import './Login.css';
import logo from '../img/Logo_v2.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn } = useAuth();
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleCheckEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleCheckpasswd = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (email === '' || password === '') {
                alert('Dados em falta');
            } else {
                const response = await fetch('api/Login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });

                if (!response.ok) {
                    if (response.status === 404) {
                        alert('Utilizador não encontrado');
                    } else if (response.status === 401) {
                        alert('A password está incorreta');
                    } else {
                        throw new Error('Erro ao efetuar o login');
                    }
                } else {
                    const data = await response.json();
                    setUser(data);
                    setIsLoggedIn(true);
                    navigate('../');
                }
            }
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao efetuar o login');
        }
    };

    const handleOnClickToMain = () => {
        window.location.href = './';
    };

    return (
        <div className="baseLog">
            <div className="LOGIN">
                <img className="imgLogoLogin" alt="Imagem da Página Login" src={logo} onClick={handleOnClickToMain} />
                <div className="login">
                    <h1 style={{ color: 'white' }}>LOG IN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="divTxtLogin">
                            <b>
                                <p className="paragLogin"> </p>
                            </b>
                            <b>
                                <p className="paragLogin"> </p>
                            </b>
                        </div>
                        <div className="divInputsLogin">
                            <input className="inputLogin" type="text" placeholder="Email" onChange={handleCheckEmail} />
                            <input className="inputLogin" type="password" placeholder="Password" onChange={handleCheckpasswd} />
                        </div>
                        <button className="buttonLogin" type="submit">Log in</button>
                    </form>

                    <a href="./CreateUser" style={{ color: 'white' }}>Don't have an account?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
