import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logIn from "../../src/assets/Login.svg";
import logo from "../../src/assets/logo.png";
import basket from "../../src/assets/basket.png";
import arrowDown from "../../src/assets/down.svg";

export const Header = () => {
    return (
        <div>
            <div className='blackDiv-before___header'>
                <div className="predivOF__blackDiv">
                    <p>
                        В связи с нестабильной ситуацией на рынке заказы в интернет-магазине принимаются только через менеджера.
                        По телефонам: +996 (999) 999-999, +996 (777) 77-44-44 – или по электронной почте: info@printelit.kg, inform@yulis.kg
                    </p>
                </div>
            </div>

            <div className='container'>
                <header>
                    <nav>
                        <div className='leftPart-header'>
                            <Link to="/delivery">Доставка</Link>
                            <Link to="/payment">Оплата</Link>
                            <Link to="/about-us">О нас</Link>
                            <Link to="/vacancies">Вакансии</Link>
                            <Link to="/feedback">Обратная связь</Link>
                        </div>

                        <div className='rightPart-header'>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={logIn} alt="Вход" />
                                <Link className='a-header' to="/login">Вход</Link>
                            </div>
                            <Link to="/registration">Регистрация</Link>
                        </div>
                    </nav>
                </header>
            </div>

            <div className='section3'>
                <a href="/"><img className='logo' src={logo} alt="Логотип" /></a>
                <input type="text" placeholder='Поиск по сайту' />
                <div className='contacts'>
                    <p>+996(700)777-777</p>
                    <p>+996(700)777-777</p>
                    <a href="/">Перезвоните мне</a>
                </div>
                <img className='basket' src={basket} alt="Корзина" />
            </div>

            <div className='background'>
                <nav className='nav'>
                    <nav className="dropdown">
                        <span className='span'>ПОЛИГРАФИЯ <img src={arrowDown} alt="Стрелка вниз" /></span>
                        <div className="dropdown-content">
                            <div className="content">
                                <Link to="/business-cards">Визитки</Link>
                                <Link to="/brochures">Буклеты</Link>
                                <Link to="/flyers">Листовки</Link>
                                <Link to="/leaflets">Флаеры</Link>
                            </div>
                        </div>
                    </nav>
                    <Link className='a' to="/souvenirs">СУВЕНИРЫ</Link>
                    <Link className='a' to="/photo-books">ФОТОКНИГИ</Link>
                    <nav className="dropdown">
                        <span className='span'>ФОТОСУВЕНИРЫ <img src={arrowDown} alt="Стрелка вниз" /></span>
                        <div className="dropdown-content2">
                            <div className="content">
                                <Link to="/calendars">Календари</Link>
                                <Link to="/posters">Плакаты</Link>
                                <Link to="/leaflets">Листовки</Link>
                                <Link to="/folders">Папки</Link>
                            </div>
                        </div>
                    </nav>
                    <Link className='a' to="/agencies">АГЕНТСТВАМ</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
