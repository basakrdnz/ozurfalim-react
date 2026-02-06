import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderme işlemi burada yapılabilir
        alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <>
            {/* Page Header */}
            <div className="page-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '30px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                    <div>
                        <h1 style={{ fontSize: '32px', marginBottom: '0' }}>İletişim</h1>
                    </div>
                    <div>
                        <p style={{ color: 'rgba(255, 255, 255, .9)', fontSize: '15px', fontWeight: '500' }}>Şubemize kolayca ulaşın</p>
                    </div>
                </div>
            </div>

            {/* Contact Content */}
            <section className="section" id="map" style={{ paddingTop: '24px' }}>
                <div className="container">
                    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div className="split" style={{ gridTemplateColumns: 'minmax(300px, 1.2fr) 0.8fr', gap: '0' }}>
                            <div className="map-container" style={{ borderRadius: '0', border: 'none', minHeight: '450px' }}>
                                <iframe
                                    title="Öz Urfalım Beştepe"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.4962919855343!2d32.81165848885498!3d39.930287199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3454d6d30fb07%3A0xab162d994d2e6335!2zw5Z6IFVyZmFsxLFtIEtlYmFwIEJlxZ90ZXBl!5e0!3m2!1str!2str!4v1770390867616!5m2!1str!2str"
                                ></iframe>
                            </div>

                            <div style={{ padding: '40px' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--dark-green)', marginBottom: '16px' }}>Konum ve İletişim Bilgilerimiz</h2>
                                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                                    Adres bilgilerimiz ve yol tarifi için haritayı kullanabilir, telefon butonu üzerinden bize ulaşabilirsiniz.
                                </p>

                                <div className="minirow" style={{ gap: '12px' }}>
                                    <a className="btn" href="tel:+903122137979" style={{ color: 'var(--green)', padding: '12px 28px' }}>Telefon</a>
                                    <a className="btn" href="https://www.google.com/maps/dir//Be%C5%9Ftepe,+Alparslan+T%C3%BCrke%C5%9F+Cd.+15%2FA,+06600+Yenimahalle%2FAnkara" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', padding: '12px 28px' }}>Yol Tarifi</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Address Card */}
                    <div className="card" style={{ marginTop: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', borderBottom: '1px solid var(--line)', paddingBottom: '12px', marginBottom: '16px' }}>Adres</h3>
                        <p style={{ fontSize: '15px', color: 'var(--text)', fontWeight: '600' }}>
                            Beştepe, Alparslan Türkeş Cd. 15/A, 06600 Yenimahalle/Ankara
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
