import React from 'react'
import './components.css'
import banner3 from '../assets/images/3.jpg'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Info() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    return (
        <>
            <h1 className='onsonRassrochka'> <span className='onson'>{t("easyText")} </span> RASS<span className='rasrochka'>ROCHKA</span> </h1>
            <img className='banner3' src={banner3} />
            <p className='infoP'>{t("footerText")}</p>
        </>
    )
}

export default Info