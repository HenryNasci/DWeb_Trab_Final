import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './app/MainPage';
import Login from './app/Login';
import CreateUser from './app/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
