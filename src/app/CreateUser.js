import React, { useState } from 'react';
import './CreateUser.css';
import logo from '../img/Logo_v2.png';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [morada, setMorada] = useState('');
  const [codPostal, setCodPostal] = useState('');
  const [tele, setTele] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    const input = event.target.value;
    // Verifica se o valor do e-mail atende ao formato desejado (no caso, ser do Gmail)
    if (/^[a-z._0-9]+@gmail.com$/.test(input)) {
      setEmail(input);
    } else {
      // Caso o valor não atenda ao formato desejado, exiba uma mensagem de erro ou tome a ação apropriada
      alert('O e-mail deve ser do (...)@gmail.com');
    }
  };

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeMorada = (event) => {
    setMorada(event.target.value);
  };

  const handleChangeCodPostal = (event) => {
    const input = event.target.value;
    // Verifica se o valor do código postal corresponde ao formato XXXX-XXX NOME DA TERRA
    if (/^[1-9]\d{3}-\d{3} [A-ZÇÁÉÍÓÚÊÂÎÔÛÀÃÕ ]+$/.test(input)) {
      setCodPostal(input);
      console.log(codPostal);
    } else {
      // Caso o valor não corresponda ao formato esperado, você pode exibir uma mensagem de erro ou tomar alguma ação adequada
      alert('O código postal deve estar no formato XXXX-XXX NOME DA TERRA');
    }
  };

  const handleChangeTele = (event) => {
    const input = event.target.value;
    
    // Verifica se é um número
    if (!isNaN(input)) {
        // Verifica se possui 9 algarismos
        if (input.length === 9) {
            // Verifica se o primeiro algarismo é 9
            if (input.charAt(0) === '9') {
                // Verifica se o segundo algarismo é 1, 2, 3 ou 6
                if (['1', '2', '3', '6'].includes(input.charAt(1))) {
                    // Todas as condições foram atendidas
                    setTele(input);
                    console.log(tele);
                    return;
                }
            }
        }
    }
    // Caso alguma das condições falhe, você pode tratar o erro aqui
    alert('Telemóvel inválido, por favor insira um telemóvel válido');
};

  const handleChangePasswd = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfPasswd = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const data = {
      nome: nome,
      telemovel: tele,
      email: email,
      morada: morada,
      codPostal: codPostal,
      password: password,
    };

    try {
      const response = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('User registered successfully');
        navigate('/Login');
      } else {
        alert('Error occurred while registering');
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred while registering');
    }
  };

  const handleOnClickToMain = () => {
    window.location.href = './';
  };

  return (
    <div className="baseCreateUser">
      <div className="CreateUser">
        <img className="imgLogoCreateUser" alt="Imagem da Página CreateUser" src={logo} onClick={handleOnClickToMain}></img>
        <div className="signIn">
          <h1 style={{ color: 'white' }}>SIGN UP</h1>
          <form>
            <div className="divInputsCreateUser">
                <input className="inputCreateUser" type="text" placeholder="Email" onBlur={handleChangeEmail} />
                <input className="inputCreateUser" type="text" placeholder="Nome" onBlur={handleChangeNome} />
                <input className="inputCreateUser" type="text" placeholder="Código Postal" onBlur={handleChangeCodPostal} />
                <input className="inputCreateUser" type="text" placeholder="Morada" onBlur={handleChangeMorada} />
                <input className="inputCreateUser" type="text" placeholder="Telemóvel" onBlur={handleChangeTele} />
                <input className="inputCreateUser" type="password" placeholder="Password" onBlur={handleChangePasswd} />
                <input className="inputCreateUser" type="password" placeholder="Confirm Password" onBlur={handleChangeConfPasswd} />
            </div>
            <button className="buttonCreateUser" type="submit" onClick={handleSubmit}>Sign Up</button>
            <a href="./Login" style={{ color: 'white' }}>Already have an account?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
