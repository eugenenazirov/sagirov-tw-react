import './Header.css';

function Header() {
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
                    <div href="#" className="logo__image">
                        <img className="logo__image-img" src="/SpaceX-Logo.svg" alt="Логотип SpaceX" />
                    </div>
                </a>
                <nav className="menu">
                    <ul className="menu__items">
                        <li><a className="menu__item" href="#main">Главная</a></li>
                        <li><a className="menu__item" href="#tech">Технология</a></li>
                        <li><a className="menu__item" href="#schedule">График полетов</a></li>
                        <li><a className="menu__item" href="#guarantee">Гарантии</a></li>
                        <li><a className="menu__item" href="#about">О компании</a></li>
                        <li><a className="menu__item" href="#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;