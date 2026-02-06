import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

// Görseller - Gerçek yemek fotoğrafları
import adanaKebap from '../assets/images/adanakebap.jpg';
import patlicanKebap from '../assets/images/patlicankebabi.jpg';
import karisikTabak from '../assets/images/karisiktabak.jpg';
import urfaKebap from '../assets/images/adanakebap2.jpg';
import beytiKebap from '../assets/images/beyti.jpg';
import domatesliKebap from '../assets/images/domateslikebap.jpg';
import hashasKebap from '../assets/images/hashaskebap.jpg';
import copSis from '../assets/images/copsis.jpg';
import cigerSis from '../assets/images/cigersis.jpg';
import tavukSis from '../assets/images/tavuksis.jpg';
import kuzuSirt from '../assets/images/kuzusirt.jpg';
import kulbasti from '../assets/images/kulbasti.jpg';
import pirzola from '../assets/images/pirzola.jpg';
import tepsiKebap from '../assets/images/tepsikebap.jpg';

import lahmacun from '../assets/images/lahmacun.jpg';
import aciliLahmacun from '../assets/images/lahmacun2.jpg';
import ozelLahmacun from '../assets/images/ozellahmacun.jpg';
import cevizliLahmacun from '../assets/images/cevizlilahmacun.jpg';

import kusbasiliPide from '../assets/images/kusbasipide.jpg';
import kasarliPide from '../assets/images/kiymakasarpide.jpg';
import karisikPide from '../assets/images/karisikpide.jpg';
import kusbasiliKasarpide from '../assets/images/kusbasikasarpide.jpg';
import kiymaliPide from '../assets/images/kiymalipide.jpg';

import mercimekCorba from '../assets/images/mercimekcorba.jpg';
import ezogelinCorba from '../assets/images/ezogelincorba.jpg';

import cobanSalata from '../assets/images/cobansalata.jpg';
import gavurdagiSalata from '../assets/images/gavurdagsalata.jpg';

import icliKofte from '../assets/images/iclikofte.jpg';

import kunefe from '../assets/images/kunefe.jpg';



function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'corba', name: 'Çorbalar' },
        { id: 'kebap', name: 'Kebaplar' },
        { id: 'lahmacun', name: 'Lahmacunlar' },
        { id: 'pide', name: 'Pideler' },
        { id: 'arasicak', name: 'Ara Sıcaklar' },
        { id: 'salata', name: 'Salatalar' },
        { id: 'tatli', name: 'Tatlılar' }
    ];

    const menuItems = [
        // Çorbalar
        { id: 13, category: 'corba', image: mercimekCorba, title: 'Mercimek Çorbası', description: 'Geleneksel süzme mercimek.' },
        { id: 14, category: 'corba', image: ezogelinCorba, title: 'Ezogelin Çorbası', description: 'Bol baharatlı ezogelin.' },

        // Kebaplar
        { id: 1, category: 'kebap', image: adanaKebap, title: 'Adana Kebap', description: 'Köz ve lavaş ile servis.' },
        { id: 2, category: 'kebap', image: patlicanKebap, title: 'Patlıcan Kebabı', description: 'Taze patlıcan ve zırh kıyması.' },
        { id: 3, category: 'kebap', image: karisikTabak, title: 'Karışık Kebap', description: 'Seçme lezzetler bir arada.' },
        { id: 4, category: 'kebap', image: urfaKebap, title: 'Urfa Kebap', description: 'Baharatsız, yumuşak lezzet.' },
        { id: 5, category: 'kebap', image: beytiKebap, title: 'Beyti Kebap', description: 'Lavaş sarmalı, yoğurtlu.' },
        { id: 15, category: 'kebap', image: domatesliKebap, title: 'Domatesli Kebap', description: 'Domates ve köfte uyumu.' },
        { id: 16, category: 'kebap', image: hashasKebap, title: 'Haşhaş Kebap', description: 'Özel baharatlı zırh kıyması.' },
        { id: 17, category: 'kebap', image: copSis, title: 'Çöp Şiş', description: 'Lokum gibi kuzu eti.' },
        { id: 18, category: 'kebap', image: cigerSis, title: 'Ciğer Şiş', description: 'Urfa usulü taze ciğer.' },
        { id: 19, category: 'kebap', image: tavukSis, title: 'Tavuk Şiş', description: 'Marine edilmiş tavuk göğsü.' },
        { id: 20, category: 'kebap', image: kuzuSirt, title: 'Kuzu Sırt', description: 'En seçkin kuzu eti.' },
        { id: 21, category: 'kebap', image: kulbasti, title: 'Külbastı', description: 'İnce dövülmüş özel biftek.' },
        { id: 22, category: 'kebap', image: pirzola, title: 'Pirzola', description: 'Taze kuzu kaburga.' },
        { id: 23, category: 'kebap', image: tepsiKebap, title: 'Tepsi Kebabı', description: 'Bol harçlı Hatay usulü.' },

        // Lahmacunlar
        { id: 6, category: 'lahmacun', image: lahmacun, title: 'Lahmacun', description: 'Klasik taş fırın.' },
        { id: 7, category: 'lahmacun', image: aciliLahmacun, title: 'Acılı Lahmacun', description: 'Baharat dengesi yüksek.' },
        { id: 8, category: 'lahmacun', image: ozelLahmacun, title: 'Özel Lahmacun', description: 'Bol harç, ince hamur.' },
        { id: 24, category: 'lahmacun', image: cevizliLahmacun, title: 'Cevizli Lahmacun', description: 'Özel cevizli harç.' },

        // Pideler
        { id: 9, category: 'pide', image: kusbasiliPide, title: 'Kuşbaşılı Pide', description: 'Yumuşak iç, çıtır kenar.' },
        { id: 10, category: 'pide', image: kasarliPide, title: 'Kaşarlı Pide', description: 'Uzayan kaşar lezzeti.' },
        { id: 11, category: 'pide', image: karisikPide, title: 'Karışık Pide', description: 'Kuşbaşı, kıyma, kaşar.' },
        { id: 12, category: 'pide', image: kusbasiliKasarpide, title: 'Kuşbaşılı Kaşarlı Pide', description: 'Doyurucu lezzet.' },
        { id: 25, category: 'pide', image: kiymaliPide, title: 'Kıymalı Pide', description: 'Klasik fırın pidesi.' },

        // Ara Sıcaklar
        { id: 26, category: 'arasicak', image: icliKofte, title: 'İçli Köfte', description: 'Bol cevizli ve kıymalı.' },

        // Salatalar
        { id: 27, category: 'salata', image: cobanSalata, title: 'Çoban Salata', description: 'En taze mevsim sebzeleri.' },
        { id: 28, category: 'salata', image: gavurdagiSalata, title: 'Gavurdağı Salata', description: 'Bol cevizli ve nar ekşili.' },

        // Tatlılar
        { id: 29, category: 'tatli', image: kunefe, title: 'Künefe', description: 'Tuzsuz peynirli, şerbetli.' },


    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <h1>Menü</h1>
                    <p>Kebaplar, lahmacunlar ve pideler. Kategorili modern menü.</p>
                </div>
            </div>

            {/* Menu Content */}
            <section className="section">
                <div className="container">
                    {/* Modern Category Selector */}
                    <div className="filter-container">
                        <div className="category-chips">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`chip ${activeCategory === category.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Çorbalar Section */}
                    {(activeCategory === 'all' || activeCategory === 'corba') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Çorbalar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'corba')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Kebaplar Section */}
                    {(activeCategory === 'all' || activeCategory === 'kebap') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Kebaplar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'kebap')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Lahmacunlar Section */}
                    {(activeCategory === 'all' || activeCategory === 'lahmacun') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Lahmacunlar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'lahmacun')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Pideler Section */}
                    {(activeCategory === 'all' || activeCategory === 'pide') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Pideler</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'pide')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Ara Sıcaklar Section */}
                    {(activeCategory === 'all' || activeCategory === 'arasicak') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Ara Sıcaklar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'arasicak')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Salatalar Section */}
                    {(activeCategory === 'all' || activeCategory === 'salata') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Salatalar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'salata')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Tatlılar Section */}
                    {(activeCategory === 'all' || activeCategory === 'tatli') && (
                        <div style={{ marginBottom: '32px' }}>
                            <div className="section-title">
                                <h2>Tatlılar</h2>
                            </div>
                            <div className="menu-grid">
                                {menuItems
                                    .filter(item => item.category === 'tatli')
                                    .map(item => (
                                        <MenuCard
                                            key={item.id}
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <a className="btn primary" href="https://getir.com/yemek/restoran/oz-urfalim-yenimahalle-bestepe-mah-yenimahalle-ankara/" target="_blank" rel="noopener noreferrer">Getir'den Sipariş Ver</a>
                        <Link className="btn" to="/iletisim#map">Konum</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Menu;
