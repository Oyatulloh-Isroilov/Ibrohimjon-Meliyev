import React from 'react'

function Rezyume() {
    return (
        <>
            <div className="rezyume">
                <div className="About">
                    <div className="admin">
                        <div className="imgName">
                            <img className='avatar' src="./SMM.jpg" alt="smm" />
                            <h1>
                                IBROHIMJON MELIYEV
                                <h2>SMM MARKETING</h2>
                            </h1>
                        </div>
                        <div className="adminRezyume">
                            <div className="adminMenu">
                                <p className='adminInfo'> Men <b>06.10.2004</b> sanada tavalud topganman, yoshim <b>19</b> da. SMM marketing bo'yicha shug'ulanaman. Hozirda 4 ta biznes yurgu'zyabman: Online Rassrochka, Ibrohim Wedding, Meliyev, Glamour_Watch. Hozirda montaj bo'yicha ishlayman 4 va 5 ta soxalarni mukammal darajada bilaman. Zakas qabul qilamiz.</p>
                                <a className='adminTel' href="tel:+998900154229"><img className='infoLogo' src="./phone.webp" /> +998 90 015 42 29</a> <br />
                                <a className='adminGmail' href="gmail"><img className='infoLogo' src="gmail.svg" /> ibrohimmeliyev4229@gmail.com</a> <br />
                                <b><img className='infoLogo' src="./location.png" /> Toshkent shahar Sergeli tumani 6 Masiv qoyliq</b>
                            </div>
                            <div className="language">
                                <h1><img className='infoLogo' src="./language.svg" /> Language</h1>
                                <h2>Uzbekistan</h2>
                                <h2>Russia 65%</h2>
                            </div>
                            <div className="Expertise">
                                <h1><img className='infoLogo' src="./skills.webp" /> Expertise</h1>
                                <h2>LOGO creater</h2>
                                <h2>Content Maker</h2>
                                <h2>Video Editing</h2>
                                <h2>SMM Marketing</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Info">
                    <div className="SkillsSummarry">
                        <div className="allSkills">
                            <h1>Skills Summary</h1>
                            <div className="skills">
                                <div className="smm">
                                    <h2>SMM Marketing</h2>
                                    <p>81% BILLIM</p>
                                </div>
                                <div className="logoC">
                                    <h2>LOGO Creator</h2>
                                    <p>75% BILLIM</p>
                                </div>
                                <div className="videoE">
                                    <h2>Video Editing</h2>
                                    <p>70% BILLIM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rezyume