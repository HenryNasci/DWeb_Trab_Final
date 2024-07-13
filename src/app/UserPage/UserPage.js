import React, { useState, useEffect } from 'react';
import './UserPage.css';
import Header from '../../Components/Header';
import Info from '../../Components/Info';
import { useAuth } from '../../Components/AuthContext';


function UserPage() {

    const { user, setUser, isLoggedIn, setIsLoggedIn  } = useAuth();

    // Se não estiver logado, redirecionar para a página de login
    /*useEffect(() => {
        if (!isLoggedIn) {
            handleToLogIn();
        }
    }, [isLoggedIn]);*/

    //armazenar dados da categoria selecionada, rederecionar para a página inicial
    const handleGetCategoria = (catNome) => {
        sessionStorage.setItem('categoria', catNome);
        window.location.href = './';
    };

    // Função para redirecionar para a página de login
    const handleToLogIn = () => {
        window.location.href = './Login';
    };

    return (
        <div className="baseMainPage">
            <Header handleGetCategoria={handleGetCategoria} />
            <div className="bodyMainPage">
                <div className="divUserPageParent">
                    <div className="divUserPage">
                        <h1 className="h1UserPage">Olá, {user.person.nome}</h1>
                    </div>
                    <div className="divInfo">
                        <h2 className="h2Info">Nome: {user.person.nome}</h2><br/> 
                        <h2 className="h2Info">Email: {user.person.email}</h2><br/> 
                        <h2 className="h2Info">Morada: {user.person.morada}</h2><br/> 
                        <h2 className="h2Info">Código Postal: {user.person.codPostal}</h2><br/> 
                        <h2 className="h2Info">Telemóvel: {user.person.telemovel}</h2>
                    </div>
                </div>
                <div className="divInfoEmpresa">
                <Info />
                </div>
            </div>
        </div>
    );
}

export default UserPage;