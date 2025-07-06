import  { useState } from 'react';

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
    <div style={{ backgroundColor: '#0f1c2e', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* 최상단 내비게이션 */}
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px 40px', backgroundColor: '#101820', borderBottom: '1px solid #333' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '30px', color: '#67c1f5' }}>
          STEAM<sup style={{ fontSize: '10px', color: '#ccc' }}>Lite</sup>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#67c1f5', cursor: 'pointer' }}>상점</span>
          <span style={{ color: '#ccc', cursor: 'pointer' }}>라이브러리</span>
        </nav>
      </header>

      {/* 본문 */}
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '30px' }}>카트</h1>

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
                style={{ width: '120px', height: '60px', objectFit: 'cover', marginRight: '20px', borderRadius: '4px' }}
              />
              <span style={{ fontSize: '18px' }}>{item.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontWeight: 'bold' }}>{item.price.toLocaleString()}원</span>
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
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <strong style={{ fontSize: '18px' }}>{total.toLocaleString()}원</strong>
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

      {/* 푸터 */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#1a1a1a', marginTop: '60px', color: '#888', fontSize: '14px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>VALVE <span style={{ color: '#67c1f5' }}>STEAM</span><sup style={{ fontSize: '10px' }}>Lite</sup></div>
        <p>© 2025 Valve Corporation. All rights reserved.<br />Reproduction by Yumin's Slave</p>
        <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
          <p>Seo Yumin, Jang Giwon, Kim Minwoo, Park Jooyoung, Kim Hyunseo</p>
          <p>Kwon Youngjun, Kim Minjun, Ko Kyungmin, Kim Sunwoo, Park Woohyun</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
