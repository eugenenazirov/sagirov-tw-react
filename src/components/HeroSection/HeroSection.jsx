import './HeroSection.css';
import './HeroSectionAdaptive.css';
import flare1 from '../../images/flare1.png';
import flare2 from '../../images/flare2.png';
import bgMars from '../../images/bg-mars.png';
import rocketLine from '../../images/rocket-line.png';

function HeroSection() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__info">
                    <h1 className="hero__title">Путешествие <span className="small__title">на красную планету</span>
                    </h1>
                    <div className="hero__action">
                        <img className="action__flare action__flare_bottom-left" src={flare1} alt="Блик"/>
                            <button className="btn hero__btn">Начать путешествие</button>
                            <img className="action__flare action__flare_top-right" src={flare2} alt="Блик"/>
                    </div>
                </div>
                <div className="hero__benefits">
                    <div className="hero__benefit hero__benefit_top-left">
                        <div className="benefit__gradient benefit__gradient_top-left"></div>
                        <div className="benefit__border benefit__border_top-left"></div>
                        <p className="benefit__text benefit__top-text">мы</p>
                        <p className="benefit__text benefit__large-number">1</p>
                        <p className="benefit__text benefit__bottom-text">на рынке</p>
                    </div>
                    <div className="hero__benefit hero__benefit_top-right">
                        <div className="benefit__gradient benefit__gradient_top-right"></div>
                        <div className="benefit__border benefit__border_top-right"></div>
                        <p className="benefit__text benefit__top-text">гарантируем</p>
                        <p className="benefit__text benefit__large-number">50%</p>
                        <p className="benefit__text benefit__bottom-text">безопасность</p>
                    </div>
                    <div className="hero__benefit hero__benefit_bottom-left">
                        <div className="benefit__gradient benefit__gradient-bottom-left"></div>
                        <div className="benefit__border benefit__border_bottom-left"></div>
                        <p className="benefit__text benefit__top-text">календарик за</p>
                        <p className="benefit__text benefit__large-number">2001<span
                            className="number__small-text">г.</span></p>
                        <p className="benefit__text benefit__bottom-text">в подарок</p>
                    </div>
                    <div className="hero__benefit hero__benefit_bottom-right">
                        <div className="benefit__gradient benefit__gradient-bottom-right"></div>
                        <div className="benefit__border benefit__border_bottom-right"></div>
                        <p className="benefit__text benefit__top-text">путешествие</p>
                        <p className="benefit__text benefit__large-number">597</p>
                        <p className="benefit__text benefit__bottom-text">дней</p>
                    </div>
                </div>
                <div className="hero__planet">
                    <img className="hero__planet-img" src={bgMars} alt="Планета Марс"/>
                </div>
                <div className="hero__rocket-line">
                    <img className="hero__rocket-line-img" src={rocketLine} alt="Указатель"/>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;