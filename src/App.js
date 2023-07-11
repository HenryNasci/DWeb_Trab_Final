import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './app/MainPage';
import Login from './app/Login';
import CreateUser from './app/CreateUser';
import Produto from './app/Produto';
import Cart from './app/Cart';
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
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
