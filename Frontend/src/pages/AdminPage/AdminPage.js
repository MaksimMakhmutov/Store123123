import React, { useEffect, useState } from 'react';
import { AdminProductForm } from '../../components';

export const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // товар для редактирования

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:3001/products');
    const data = await res.json();
    setProducts(data);
    setEditProduct(null); // закрываем форму после обновления
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Админ-панель</h2>

      <AdminProductForm onProductAdded={fetchProducts} />

      <h3>Список товаров</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '1.5rem' }}>
            <strong>{p.name}</strong> — {p.price} ₽
            <br />
            <button onClick={() => setEditProduct(p)}>Редактировать</button>
            <button
              onClick={() => handleDelete(p.id)}
              style={{ marginLeft: '0.5rem' }}
            >
              Удалить
            </button>
            {editProduct && editProduct.id === p.id && (
              <div style={{ marginTop: '1rem' }}>
                <AdminProductForm
                  product={editProduct}
                  onProductAdded={fetchProducts}
                  isEditMode={true}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
