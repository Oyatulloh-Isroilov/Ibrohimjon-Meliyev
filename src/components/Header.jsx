import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../i18next'
import './components.css'
import logo from '../assets/images/logo.svg'
import telegram from '../assets/images/telegram.png'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'

function Header() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en')
    }, [])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="header">
                <div className="headerLogo">
                    <img className='headerLogo' src={logo} alt="" />
                </div>
                <div className="headerPlace">
                    <h2>{t("addres")}</h2>
                    <p className='info'>{t('cityInfo')}</p>
                </div>
                <div className="headerContact">
                    <h2>{t("communation")}</h2>
                    <div className="logos">
                        <a href="https://t.me/Ibrohim_Mobilograf"><img className='logo' src={telegram} alt="logo" /></a>
                        <a href="https://www.instagram.com/meliyev_vvv/"><img className='logo' src={instagram} alt="logo" /></a>
                        <a href="https://www.facebook.com/ibrohim.meliyev.3701/"><img className='logo' src={facebook} alt="logo" /></a>
                    </div>
                </div>
                <div className="headerNumber">
                    <h2>{t("phoneNumber")}</h2>
                    <a className='phoneNumber phoneNumber1' href="tel:+998900154229">+998 90 015 42 29</a>
                    <a className='phoneNumber phoneNumber2' href="tel:+998974771005">+998 97 477 10 05</a>
                </div>
                <div className="languageSwitch">
                    <select className='languageForm' onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                        <option value="uz">O'zbek</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Header;
