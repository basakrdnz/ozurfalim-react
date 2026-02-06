function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="inner container">
                <div>© {currentYear} Öz Urfalım Kebap • Tüm hakları saklıdır.</div>
                <div>
                    Adres: Emek 4. Cadde, Çankaya / Ankara •
                    <a href="tel:+903122226665"> (312) 222 66 65</a> -
                    <a href="tel:+905322416306"> (532) 241 6306</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
