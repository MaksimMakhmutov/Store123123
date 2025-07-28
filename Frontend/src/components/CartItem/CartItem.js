import React from 'react';

export const CartItem = ({ item, onRemove }) => {
  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <h4>{item.title}</h4>
      <p>Цена: {item.price} ₽</p>
      <p>Количество: {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Удалить</button>
    </div>
  );
};
