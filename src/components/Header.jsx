import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logonobg.png';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="inner container">
          <div className="left">
            <div className="mini">Sipariş: <b>(312) 222 66 65 - (532) 241 6306</b></div>
            <div className="mini">E-posta: <b>ozurfalim63@gmail.com</b></div>
          </div>
          <div className="right social">
            <a className="mini" href="https://www.instagram.com/ozurfalimkebapestepe/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="nav">
        <div className="inner container">
          <Link className="logo" to="/" onClick={closeMobile}>
            <img className="logo-img" src={logo} alt="Öz Urfalım Logo" />
          </Link>

          <nav className="navlinks">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Ana Sayfa</NavLink>
            <NavLink to="/hakkimizda" className={({ isActive }) => isActive ? 'active' : ''}>Hakkımızda</NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>Menü</NavLink>
            <NavLink to="/iletisim" className={({ isActive }) => isActive ? 'active' : ''}>İletişim</NavLink>
          </nav>

          <div className="navcta">
            <Link className="btn ghost hide-m" to="/menu">Menüyü Gör</Link>
            <button
              className={`burger ${mobileOpen ? 'active' : ''}`}
              onClick={toggleMobile}
              aria-label="Menü"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu container ${mobileOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>Hakkımızda</NavLink>
          <NavLink to="/menu" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>Menü</NavLink>
          <NavLink to="/iletisim" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>İletişim</NavLink>
          <div className="mobile-cta">
            <Link className="btn" to="/menu" onClick={closeMobile}>Menüyü Gör</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
