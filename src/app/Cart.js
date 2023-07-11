import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import './Cart.css';


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
        <div className="baseCart">
            <Header />
            <div className="bodyCart">
                <h1 className='tituloCart'>Shopping Cart</h1>
                <p className="cartTotalPrice">Total: {totalPrice}€</p>
                {cartItems.length === 0 ? (
                    <p className='cartVazio'>Cart is empty.</p>
                ) : (
                    <div className="cartItems">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cartItem">
                                <div className="cartItemInfo">
                                    <img align="left" className="imgProdutoMainPage" alt="Imagem do Produto" src={"https://localhost:7085/imagens/" + item.fotos[0].nomeFicheiro} />
                                    <br></br><br></br><br></br><br></br>
                                    <div className="cartItemText">
                                        <p className="cartItemName">{item.nome}</p>
                                        <p className="cartItemBrand">{item.marca}</p>
                                        <p className="cartItemPrice">{item.preco}€</p>
                                    </div>
                                    <button className='butRemove' onClick={() => handleRemoveItem(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;