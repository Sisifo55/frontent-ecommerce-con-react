import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './componentes/Register';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Products from './componentes/Products/Products';
import Cart from './componentes/Cart';
import Perfil from './componentes/Perfil';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  )
 }
 

/*const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
    <Footer />
  </Router>
)*/
export default App;
