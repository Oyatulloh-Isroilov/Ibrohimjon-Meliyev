import React from 'react'

function Header() {
    return (
        <>
            <div className="header">
                <div className="headerLogo">
                    <img className='headerLogo' src="./logo.svg" alt="" />
                </div>
                <div className="headerPlace">
                    <h2>Manzilimiz</h2>
                    <p className='info'>Toshkent shahar Sergeli tumani 6 Masiv qoyliq</p>
                </div>
                <div className="headerContact">
                    <h2>Aloqa uchun</h2>
                    <a href="https://t.me/Ibrohim_Mobilograf"><img className='logo' src="./telegram.png" alt="logo" /></a>
                    <a href="https://www.instagram.com/meliyev_vvv/"><img className='logo' src="./instagram.png" alt="logo" /></a>
                    <a href="https://www.facebook.com/ibrohim.meliyev.3701/"><img className='logo' src="./facebook.png" alt="logo" /></a>
                </div>
                <div className="headerNumber">
                    <h2>Telefon raqamlarimiz</h2>
                    <a className='phoneNumber phoneNumber1' href="tel:+998900154229">+998 90 015 42 29</a>
                    <a className='phoneNumber phoneNumber2' href="tel:+998974771005">+998 97 477 10 05</a>
                </div>
            </div>
        </>
    )
}


export default Header;