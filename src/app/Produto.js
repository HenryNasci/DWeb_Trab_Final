import './Produto.css';
import Header from '../Components/Header';
import Info from '../Components/Info';
import { useNavigate } from 'react-router-dom';

function Produto() {
    const navigate = useNavigate();

    const handleOnClickAddCarrinho = (post) => {
        const carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
        if (carrinho) {
            carrinho.push(post);
            sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
        } else {
            sessionStorage.setItem('carrinho', JSON.stringify([post]));
        }
        console.log('carrinho');
        console.log(carrinho);
        navigate('/');
    };

    const post = JSON.parse(sessionStorage.getItem('produto'));
    console.log(post);

    return (
        <div className="baseProduto">
            <Header />
            <div className="bodyProduto">
                <div className="divImgProduto">
                    <img className='imgProduto' alt='Imagem da Página Produto' src={"https://localhost:7085/imagens/" + post.fotos[0].nomeFicheiro}></img>
                </div>
                <div className="divInfoProduto">
                    <h1 className='h1Produto'>{post.nome}</h1>
                    <br></br>
                    <h3 className='h3Produto'>{post.marca}</h3>
                    <br></br>
                    <h3 className='h3Produto'>{post.preco}€</h3>
                    <br></br>
                    <button className="buttonAddProduto" onClick={() => handleOnClickAddCarrinho(post)}>Add to Cart</button>
                </div>
            </div>
            <div className='divInfoEmpresa'>
                <Info />
            </div>
        </div>
    );
}

export default Produto;