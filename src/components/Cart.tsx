import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Elden Ring',
      price: 64800,
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    },
  ]);

  const handleDelete = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: 'sans-serif', color: 'white', width: '100%' }}>
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto', // 가운데 정렬
          padding: 0,
        }}
      >
        <h1 style={{ fontSize: '28px', margin: '0 0 30px 0' }}>카트</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#1b2a3b',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '120px',
                  height: '60px',
                  objectFit: 'cover',
                  marginRight: '20px',
                  borderRadius: '4px',
                }}
              />
              <span style={{ fontSize: '18px' }}>{item.title}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>
                {item.price.toLocaleString()}원
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ccc',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}

        <div
          style={{
            backgroundColor: '#1b2a3b',
            padding: '30px',
            borderRadius: '8px',
            marginTop: '40px',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>합계 금액</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <strong style={{ fontSize: '18px' }}>
              {total.toLocaleString()}원
            </strong>
            <div>
              <button
                style={{
                  backgroundColor: '#2c2f32',
                  color: '#ccc',
                  border: 'none',
                  padding: '10px 20px',
                  marginRight: '10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
                onClick={() => alert('쇼핑 이어하기')}
              >
                쇼핑 이어하기
              </button>
              <button
                style={{
                  backgroundColor: '#6c7ac9',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
                onClick={() => alert('라이브러리에 추가되었습니다!')}
              >
                라이브러리에 추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
