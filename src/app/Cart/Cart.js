import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import './Cart.css';
import { useAuth } from '../../Components/AuthContext';
//import { useNavigate } from 'react-router-dom';


function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shouldPay, setShouldPay] = useState(false);
    const { user, isLoggedIn } = useAuth();
    const [requestData, setRequestData] = useState({ Pago: true, ClientesFK: user.person.id });
    //const navigate = useNavigate();
    //vai buscar os dados armazenados do cart
    useEffect(() => {

        //  preço total
        let total = 0;
        if (cartItems.length > 0) {
            total = cartItems.reduce((accumulator, item) => accumulator + item.preco, 0);
        }
        setTotalPrice(total);
    }, [cartItems]);

    useEffect(() => {
        const cartData = sessionStorage.getItem('carrinho');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }
    }, []);
    //obter dados dos produtos //request POST na rota api/ComprasController2 
    useEffect(() => {
        if (shouldPay) {

            console.log('Request Data:', requestData);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
                redirect: 'follow'
            };
            fetch("api/ComprasController2", requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log('Response Data:', data);
                    alert('Product added successfully');
                    setShouldPay(false); // Reset payment state
                })
                .catch((err) => {
                    console.log('Error:', err.message);
                    alert('Error adding product');
                    setShouldPay(false); // Reset payment state in case of error
                });
        }
    }, [shouldPay, user.person.id]);

    //remover artigo //splice remove o prod do array 
    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        sessionStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    };

    //pagamento
    const handlePay = () => {
        if (isLoggedIn) {
            setShouldPay(true);
            sessionStorage.removeItem('carrinho');
            window.location.href = './';
        } else {
            window.location.href = './Login';
        }
    };

    const handleGetCategoria = (catNome) => {
        sessionStorage.setItem('categoria', catNome);
        window.location.href = './';
    };

    return (
        <div className="baseCart">
            <Header handleGetCategoria={handleGetCategoria} />
            <div className="bodyCart">
                <h1 className='tituloCart'>Shopping Cart</h1>
                <p className="cartTotalPrice">Total: {totalPrice}€</p>
                <button className='butPay' onClick={() => handlePay()}>Payment</button>
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