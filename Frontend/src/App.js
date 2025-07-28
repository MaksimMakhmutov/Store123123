import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AdminPage,
  ProductPage,
  HomePage,
  DetailPage,
  CartPage,
} from './pages';
import './App.css'; // Импортируем стили
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
