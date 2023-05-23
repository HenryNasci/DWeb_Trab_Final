import React from 'react';
import './CreateUser.css';
import logo from '../img/Logo_v2.png'

function CreateUser() {
    return (
        <div className="baseCreateUser">
            <div className="CreateUser">
                <img className='imgLogoCreateUser' alt='Imagem da Página CreateUser' src={logo} onClick={handleOnClickToMain}></img>
                <div className='signIn'>
                    <h1 style={{ color: 'white' }}>SIGN UP</h1>
                    <form >
                        <div className='divTxtCreateUser'>
                            <b><p className='paragCreateUser'>Email:  </p></b>
                            <b><p className='paragCreateUser'>Username:  </p></b>
                            <b><p className='paragCreateUser'>Password:  </p></b>
                            <b><p className='paragCreateUser'>Confirm Password:  </p></b>
                        </div>
                        <div className='divInputsCreateUser'>
                            <input className='inputCreateUser' type='text' placeholder=''></input>
                            <input className='inputCreateUser' type='text' placeholder=''></input>
                            <input className='inputCreateUser' type='password' placeholder=''></input>
                            <input className='inputCreateUser' type='password' placeholder=''></input>
                        </div>
                        <button className='buttonCreateUser' type='submit'>Sign Up</button>
                        <a href='./Login' style={{color: 'white'}}>Already have an account?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

function handleOnClickToMain() {
    window.location.href = './';
}

export default CreateUser;