import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

// Görseller - Gerçek yemek fotoğrafları
import heroImg from '../assets/images/hero.jpg';
import patlicanKebap from '../assets/images/patlicankebabi.jpg';
import cigerSis from '../assets/images/cigersis.jpg';
import ozelLahmacun from '../assets/images/ozellahmacun.jpg';

function Home() {
    const popularItems = [
        {
            id: 2,
            image: patlicanKebap,
            title: 'Patlıcan Kebabı',
            description: 'Taze patlıcan ve zırh kıymasının eşsiz uyumu.'
        },
        {
            id: 18,
            image: cigerSis,
            title: 'Ciğer Şiş',
            description: 'Urfa usulü taze kuzu ciğeri.'
        },
        {
            id: 8,
            image: ozelLahmacun,
            title: 'Özel Lahmacun',
            description: 'İnce hamur, bol harç, taş fırın lezzeti.'
        }
    ];

    const features = [
        {
            title: 'Taş fırın',
            description: 'Lahmacun ve pideler, taş fırında odun ateşinde pişirilir'
        },
        {
            title: 'Usta işi kebap',
            description: 'Doğru kıyım, doğru ateş ve dinlendirme ile hazırlanan kebaplar'
        },
        {
            title: 'Kolay ulaşım',
            description: 'Merkezi konum, harita ve hızlı yol tarifi tek noktada'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <main className="hero">
                <div className="container hero-grid">
                    <section className="hero-card hero-media" style={{ backgroundImage: `url(${heroImg})` }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content">
                            <h1 className="h1">Güneydoğu'nun İncisi</h1>
                            <p className="sub">
                                Günlük hazırlanan mezeler, taş fırından lahmacun ve ustalıkla pişen kebaplar.
                                Paket servis.
                            </p>
                            <div className="hero-actions">
                                <Link className="btn primary" to="/menu">Menüyü İncele</Link>
                                <a className="btn" href="https://getir.com/yemek/restoran/oz-urfalim-yenimahalle-bestepe-mah-yenimahalle-ankara/" target="_blank" rel="noopener noreferrer">Getir Yemek</a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Neden burası?</h2>
                        <p className="desc">Gelenekten gelen lezzet, bugün de aynı ustalık</p>
                    </div>

                    <div className="grid3">
                        {features.map((feature, index) => (
                            <div className="feature fade-in-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                <b>{feature.title}</b>
                                <span>{feature.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Items Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Popüler Seçimler</h2>
                    </div>

                    <div className="menu-grid">
                        {popularItems.map((item) => (
                            <MenuCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                    <div className="actions-row">
                        <Link className="btn primary" to="/menu">Tüm Menüyü Gör</Link>
                        <Link className="btn" to="/iletisim">Konum &amp; İletişim</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
