import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './app/MainPage';
import Login from './app/Login';
import CreateUser from './app/CreateUser';
import Produto from './app/Produto';
import Cart from './app/Cart';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
