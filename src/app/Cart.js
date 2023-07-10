import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';


function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //vai buscar os dados armazenados do cart
    useEffect(() => {
        const cartData = sessionStorage.getItem('carrinho');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }
        //  preço total
        let total = 0;
        if (cartItems.length > 0) {
            total = cartItems.reduce((accumulator, item) => accumulator + item.preco, 0);
        }
        setTotalPrice(total);
    }, [cartItems]);


    //remover artigo //splice remove o prod do array 
    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);

        sessionStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="baseMainPage">
            <Header />
            <div className="cartPage">
                <br></br><br></br><br></br><br></br>
                <h1>Carrinho de Compras</h1>
                {cartItems.length === 0 ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <ul className="cartItems">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cartItem">
                                <div className="cartItemInfo">
                                    <img align="left" className="imgProdutoMainPage" alt="Imagem do Produto" src={"https://localhost:7085/imagens/" + item.fotos[0].nomeFicheiro} />
                                    <br></br><br></br><br></br><br></br>
                                    <div className="cartItemText">
                                        <p className="cartItemName">{item.nome}</p>
                                        <p className="cartItemBrand">{item.marca}</p>
                                        <p className="cartItemPrice">{item.preco}€</p>
                                    </div>
                                </div>
                                <button onClick={() => handleRemoveItem(index)}>Remover</button>
                            </li>
                        ))}
                        <p className="cartTotalPrice">Total: {totalPrice}€</p>

                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartPage;