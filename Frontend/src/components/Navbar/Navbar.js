import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Link to="/">Главная</Link>
      <Link to="/products">Товары</Link>
      <Link to="/admin">Админка</Link>
      <Link to="/cart">Корзина</Link>
    </nav>
  );
};
