import React from 'react';
import './Login.css';
import logo from '../img/Logo_v2.png';

function Login() {
    return (
        <div className="baseLog">
            <div className="LOGIN">
                <img className='imgLogoLogin' alt='Imagem da Página Login' src={logo} onClick={handleOnClickToMain}></img>
                <div className='login'>
                    <h1 style={{ color: 'white' }}>LOG IN</h1>
                    <form >
                        <div className='divTxtLogin'>
                            <b><p className='paragLogin'>Username:  </p></b>
                            <b><p className='paragLogin'>Password:  </p></b>
                        </div>
                        <div className='divInputsLogin'>
                            <input className='inputLogin' type='text' placeholder=''></input>
                            <input className='inputLogin' type='password' placeholder=''></input>
                        </div>    
                        <button className='buttonLogin' type='submit'>Log in</button>
                    </form>
                    
                    <a href='./CreateUser' style={{color: 'white'}}>Don't have an acount?</a>
                </div>
            </div>
        </div>
    );
}

function handleOnClickToMain() {
    window.location.href = './';
}
  
export default Login;