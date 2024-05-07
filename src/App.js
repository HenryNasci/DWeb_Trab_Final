import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './app/MainPage/MainPage';
import Login from './app/Login/Login';
import CreateUser from './app/CreateUser/CreateUser';
import Produto from './app/Produto/Produto';
import Cart from './app/Cart/Cart';
import UserPage from './app/UserPage/UserPage';
import { AuthProvider } from './Components/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
