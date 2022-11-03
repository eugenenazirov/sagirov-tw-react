import './Header.css';
import './HeaderAdaptive.css';
import { useState } from "react";

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className="header first-screen__header">
            <div className="container header__container">
                <a href="#" className="header__logo-block">
                    <div className="header__corner header__corner_top-left">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8V1H8" stroke="white"/>
                        </svg>
                    </div>
                    <div className="header__corner header__corner_bottom-left">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0V7H8" stroke="white"/>
                        </svg>
                    </div>
                    <div className="header__corner header__corner_top-right">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8V1H0" stroke="white"/>
                        </svg>
                    </div>
                    <div className="header__corner header__corner_bottom-right">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0V7H0" stroke="white"/>
                        </svg>
                    </div>
                    <div className="logo__image">
                        <img className="logo__image-img" src="/SpaceX-Logo.svg" alt="Логотип SpaceX"/>
                    </div>
                </a>
                <nav className={menuActive ? 'menu active' : 'menu'}>
                    <button className="close" onClick={() => setMenuActive(!menuActive)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                        </svg>
                    </button>
                    <ul className="menu__items" onClick={() => setMenuActive(!menuActive)}>
                        <li><a className="menu__item" href="#main">Главная</a></li>
                        <li><a className="menu__item" href="#tech">Технология</a></li>
                        <li><a className="menu__item" href="#schedule">График полетов</a></li>
                        <li><a className="menu__item" href="#guarantee">Гарантии</a></li>
                        <li><a className="menu__item" href="#about">О компании</a></li>
                        <li><a className="menu__item" href="#contacts">Контакты</a></li>
                    </ul>
                </nav>
                <button className="burger" id="burger" onClick={() => setMenuActive(!menuActive)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="burgerPath">
                        <defs>
                            <linearGradient id="burgerGradient" gradientTransform="rotate(10)">
                                <stop offset="5%" stopColor="#ffffff"/>
                                <stop offset="90%" stopColor="#ff3f04"/>
                            </linearGradient>
                        </defs>
                        <rect width="352" height="32" x="80" y="96"/>
                        <rect width="352" height="32" x="80" y="240"/>
                        <rect width="352" height="32" x="80" y="384"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;