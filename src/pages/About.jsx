import { Link } from 'react-router-dom';
import mekanImg from '../assets/images/mekan-1.jpg';

function About() {
    return (
        <>
            {/* Page Header - Modified to match screenshot feel */}
            <div className="page-header" style={{ marginBottom: '0', background: 'transparent', padding: '20px 0' }}>
                <div className="container">
                    <div style={{ background: 'var(--dark-green)', padding: '24px', borderRadius: 'var(--radius)', color: '#fff', textAlign: 'left' }}>
                        <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 900 }}>Hikayemiz</h2>
                    </div>
                </div>
            </div>

            {/* About Content */}
            <section className="section" style={{ paddingTop: '20px' }}>
                <div className="container">
                    <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', alignItems: 'stretch' }}>
                        {/* Left Card - White */}
                        <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--dark-green)' }}>Hakkımızda</h3>
                            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: 'var(--muted)' }}>
                                1975 yılında Şanlıurfa'da kebap geleneğini yaşatmak amacıyla yola çıkan Öz Urfalım Kebap, 1992 yılında bu köklü lezzet mirasını Ankara'ya taşımıştır. Yaklaşık 35 yıldır Ankara'da Emek 4. Caddede misafirlerini ağırlayan Öz Urfalım Kebap, kalite ve lezzetten ödün vermeden, şimdi yeni yerinde ustalığını nesilden nesile aktarmaya devam etmektedir.
                            </p>
                        </div>

                        {/* Right Card - Dark Green */}
                        <div className="card" style={{ background: 'var(--dark-green)', padding: '32px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '12px', minHeight: '320px', border: 'none' }}>
                            <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '99px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                📍 Ankara Beştepe
                            </div>
                            <h3 style={{ margin: 0, fontSize: '28px', fontWeight: 800, color: '#fff' }}>Aile sofralarının tadı</h3>
                            <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>
                                Yeni konumumuzla tekrardan sizlerleyiz
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Link className="btn primary" to="/menu">Menüyü İncele</Link>
                        <Link className="btn" to="/iletisim">Yol Tarifi</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
