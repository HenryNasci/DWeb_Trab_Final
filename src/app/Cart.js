import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';


function CartPage() {
    const [cartItems, setCartItems] = useState([]);



    useEffect(() => {
        const cartData = sessionStorage.getItem('carrinho');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }

    }, []);


    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);

        sessionStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="paginacart">
            <Header />
            <h1>Carrinho de Compras</h1>
            {cartItems.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <p>Nome: {item.nome}</p>
                            <p>Marca: {item.marca}</p>
                            <p>Preço: {item.preco}€</p>
                            <button onClick={() => handleRemoveItem(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;