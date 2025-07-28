import React, { useEffect, useState } from 'react';
import { CartItem } from '../../components';

export const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Загрузка корзины из localStorage при загрузке страницы
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Обновляем localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 style={{ padding: '2rem' }}>Корзина пуста</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Корзина</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
      <h3>Общая сумма: {total.toFixed(2)} ₽</h3>
    </div>
  );
};
