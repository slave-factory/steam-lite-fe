

const Store = () => {
  return (
    <div style={{ backgroundColor: '#0f1c2e', color: 'white', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* 헤더 */}
      <header style={{ padding: '10px 40px', backgroundColor: '#101820', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#67c1f5', marginRight: '30px' }}>
          STEAM<sup style={{ fontSize: '10px', color: '#ccc' }}>Lite</sup>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#67c1f5', cursor: 'pointer' }}>상점</span>
          <span style={{ color: '#ccc', cursor: 'pointer' }}>라이브러리</span>
        </nav>
      </header>

      {/* 배너 */}
      <section style={{ background: 'url("https://store.cloudflare.steamstatic.com/public/images/v6/sale/sale_bg_2.jpg") center/cover no-repeat', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '36px', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px 20px', borderRadius: '5px' }}>Summer Sale</h1>
      </section>

      {/* 컨텐츠 래퍼 */}
      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* 추천 섹션 */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>추천</h2>
          <div style={{ height: '200px', backgroundColor: '#1b2a3b', borderRadius: '8px' }}>
            {/* 여기에 추천 게임 추가 가능 */}
          </div>
        </section>

        {/* 특별 할인 섹션 */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>특별 할인</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* 여기에 특별 할인 게임 추가 가능 */}
          </div>
        </section>

        {/* 무료 플레이 섹션 */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>무료 플레이</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* 여기에 무료 게임 추가 가능 */}
          </div>
        </section>

        {/* 인기 판매 섹션 */}
        <section>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>인기 판매</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* 여기에 인기 게임 추가 가능 */}
          </div>
        </section>
      </main>

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

export default Store;
