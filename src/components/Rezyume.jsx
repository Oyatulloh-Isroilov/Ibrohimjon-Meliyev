import React from 'react'
import './components.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import logo from '../assets/images/logo.svg'
import language from '../assets/images/language.svg'
import skills from '../assets/images/skills.png'
import phone from '../assets/images/phone.webp'
import gmail from '../assets/images/gmail.svg'
import location from '../assets/images/location.png'

function Rezyume() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    return (
        <>
            <div className="rezyume">
                <div className="About">
                    <div className="admin">
                        <div className="imgName">
                            <img className='avatar' src={logo} alt="smm" />
                            <div className="info1">
                                <h1>IBROHIMJON MELIYEV</h1>
                                <h2>{t("smmMarketText")}</h2>
                            </div>
                        </div>
                        <div className="adminRezyume">
                            <div className="adminMenu">
                                <p className='adminInfo'>{t("adminInfo")} </p>
                                <a className='adminTel' href="tel:+998900154229"><img className='infoLogo' src={phone} /> +998 90 015 42 29</a> <br />
                                <a className='adminGmail' href="gmail"><img className='infoLogo' src={gmail} /> ibrohimmeliyev4229@gmail.com</a> <br />
                                <b><img className='infoLogo' src={location} />{t("cityInfo")}</b>
                            </div>
                            <div className="lengEx">
                                <div className="language">
                                    <h1><img className='infoLogo' src={language} />{t("languageText")}</h1>
                                    <h2>Uzbekistan</h2>
                                    <h2>Russia 65%</h2>
                                </div>
                                <div className="Expertise">
                                    <h1><img className='infoLogo' src={skills} />{t("expertiseText")}</h1>
                                    <h2>{t("logoCreatorText")}</h2>
                                    <h2>{t("contentMakingText")}</h2>
                                    <h2>{t("videoEditText")}</h2>
                                    <h2>{t("smmMarketText")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Info">
                    <div className="SkillsSummarry">
                        <div className="allSkills">
                            <h1>{t("SkillsS")}</h1>
                            <div className="skills">
                                <div className="smm">
                                    <h2>{t("smmMarketText")}</h2>
                                    <p>81% {t("knowledgeText")}</p>
                                </div>
                                <div className="logoC">
                                    <h2>{t("logoCreatorText")}</h2>
                                    <p>75% {t("knowledgeText")}</p>
                                </div>
                                <div className="videoE">
                                    <h2>{t("videoEditText")}</h2>
                                    <p>70% {t("knowledgeText")}</p>
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