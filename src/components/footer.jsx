import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import location from "../../src/assets/location.png"
import mail from "../../src/assets/mail.png"
import phone from "../../src/assets/call.png"

const Footer = () => {
  return (
       <div className='Footer'>
         <div className='footer'>
            <div className='div1'>
                <p>УСЛУГИ</p>
                <a href="/">Изготовление фотокниг</a>
                <a href="/">Печать календарей</a>
                <a href="/">Печать полиграфии</a>
                <a href="/">Полиграфия к выставке</a>
                <a href="/">Печать сборных тиражей</a>
            </div>
            <div className='div1'>
                <p>ПОМОЩЬ</p>
                <Link to="/delivery">Доставка</Link>
                <Link to="/payment">Оплата</Link>
                <a href="/">Требования к макетам</a>
                <a href="/">Отзывы клиентов</a>
                <a href="/">Последние новости</a>
            </div>

            <div className='div1'>
                <p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
                <a href="/"><img className='footer-icons' src={location} alt="" /> Бишкек, Гостиничный проезд, 4Б, под. 3А, м.Окружная</a>
                <a href="/"><img className='footer-icons' src={mail} alt="" /> info@printelit.kg</a>
                <a href="/"><img className='footer-icons' src={phone} alt="" /> +996(999)999-999</a>
                <a href="/">Полиграфия к выставке</a>
                <a href="/">Печать сборных тиражей</a>
            </div>
        </div>
       </div>
  )
}

export default Footer

