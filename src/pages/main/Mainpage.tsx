import styles from './Mainpage.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../icons/header_logo.png";
import cloudtop from "../../icons/img_2.png";
import back from "../../icons/img_7.png";
import people from "../../icons/img_3.png";
import slide from "../../icons/slide-down-arrow.svg";

export function MainPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState('поиск почившего на сайте');

    const updatePlaceholder = () => {
        if (window.innerWidth < 1290) {
            setPlaceholder('поиск почившего');
        } else {
            setPlaceholder('поиск почившего на сайте');
        }
    };

    useEffect(() => {
        updatePlaceholder();
        window.addEventListener('resize', updatePlaceholder);
        return () => {
            window.removeEventListener('resize', updatePlaceholder);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className={styles.mainheader}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.burger} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.logo}>
                            <a href="/"><img src={logo} alt=''></img></a>
                            <p>социальный сервис</p>
                        </div>
                        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
                            <a href="/memory-pages">Страницы памяти</a>
                            <a href="/o-proekte">О проекте</a>
                        </div>
                        <div className={styles.search_block}>
                            <form>
                                <span className={styles.search_icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="#A8B5C8" d="M10 2a8 8 0 105.293 14.707l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
                                    </svg>
                                </span>
                                <input type="text" className={styles.search_input} placeholder={placeholder} name="search"></input>
                            </form>
                        </div>
                        <div className={styles.button_block}>
                            <a className={styles.auth} href="#login">Вход/Регистрация</a>
                        </div>
                        <div className={styles.burger2} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.main_container}>
                <section className={styles.mainbanner}>
                    <div className={styles.container2}>
                        <div className={styles.bannercontent}>
                            <h3>Следы прошлого - на карте настоящего</h3>
                            <h4>Наш сервис помогает</h4>
                            <div className={styles.main_buttons}>
                                <div className={styles.main_button_main_btn}>
                                    <a className={styles.main_link_button_popup_run_button} href="#login">
                                        <p className={styles.main_btn_img_siblings}></p>
                                        <span className={styles.first_text}>ОПОВЕСТИТЬ БЛИЗКИХ</span>
                                        <span className={styles.slide_text}>ПО СМС И E-MAIL</span>
                                    </a>
                                </div>
                                <div className={styles.main_button}>
                                    <a className={styles.second_link_button_popup_run_button} href="#login">
                                        <p className={styles.main_btn_img_save}></p>
                                        <span className={styles.first_text}>СОХРАНИТЬ ПАМЯТЬ</span>
                                        <span className={styles.slide_text}>О ЧЕЛОВЕКЕ</span>
                                    </a>    
                                </div>
                            </div>
                        </div>
                        <div className={styles.person_wrap}>
                            <div className={styles.person}>
                                <div className={styles.black_oval}></div>
                                <div className={styles.white_oval}></div>
                                <div className={styles.clouds_top}>
                                    <div className={styles.clouds_img_clouds_top_img1}>
                                        <img src={cloudtop} alt=""></img>
                                    </div>
                                    <div className={styles.clouds_img_clouds_top_img2}>
                                        <img src={cloudtop} alt=""></img>
                                    </div>
                                </div>
                                <div className={styles.clouds_bottom}>
                                    <div className={styles.clouds_img_clouds_bottom_img1}>
                                        <img src={cloudtop} alt=""></img>
                                    </div>
                                    <div className={styles.clouds_img_clouds_bottom_img2}>
                                        <img src={cloudtop} alt=""></img>
                                    </div>
                                </div>
                                <div className={styles.bg_person}>
                                    <img src={back} alt=""></img>
                                </div>
                                <div className={styles.user}>
                                    <img src={people} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className={styles.features_list}>
                            <div className={styles.feature_item}>
                                <h4 id="countCondolencesAndMemories" data-count="211">211</h4>
                                <p><span>Оставленно соболезнований</span> и воспоминаний</p>
                            </div>
                            <div className={styles.feature_item}>
                                <h4 id="countDead" data-count="114">114</h4>
                                <p><span>Добавлено страниц памяти</span> о почивших</p>
                            </div>
                        </div>
                        <a href="#news-scroll" className={styles.main_banner_scroll}>
                            <img src={slide} alt=""></img>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}