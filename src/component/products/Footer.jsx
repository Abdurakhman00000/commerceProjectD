import React from 'react';
import bikeLogo from '../image/bike logo.png';
import footerPhone from '../image/footer phone.png';
import footerPoint from '../image/footer point.png';
import footerMessage from '../image/footer message.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                        <div className="footer">
                            <div className="container">
                                <div className="row">

                                    <div className="boxx">
                                        <Link to='/home'>
                                        <img src={bikeLogo} alt="" />
                                        </Link>
                                        <p>Компания World-bikes <br /> специализируется на продаже <br /> товаров для велосипедного спорта.</p>
                                    </div>


                                    <div className="boxx">
                                        <h3>Каталог</h3>

                                        <ul>
                                            <li className='li'>Trade-in</li>
                                            <li className='li'>Велосипеды</li>
                                            <li className='li'>Экипировка</li>
                                            <li className='li'>Запчасти</li>
                                            <li className='li'>Велостанки</li>
                                            <li className='li'>Аксессуары</li>
                                        </ul>
                                    </div>

                                    <div className="boxx">
                                        <h3>Для клиента</h3>

                                        <ul>
                                            <li className='li'>О нас</li>
                                            <li className='li'>Доставка и оплата</li>
                                            <li className='li'>Блог</li>
                                            <li className='li'>Контакты</li>
                                            <li className='li'>Веломастерская</li>
                                            <li className='li'>Гарантии</li>
                                        </ul>
                                    </div>

                                    <div className="boxx">
                                        <h3>Контакты</h3>

                                        <ul>
                                            <div className="footer-group">
                                                <img src={footerPhone} alt="" />
                                            <li className='li' >+996 559 70 85 15</li>
                                            </div>

                                            <div className="footer-group">
                                                <img className='point' src={footerPoint} alt="" />
                                            <li className='li'>г.Бишкек</li>
                                            </div>

                                            <div className="footer-group">
                                                <img src={footerMessage} alt="" />
                                            <li className='li'>abdibatovabdurahman@gmail.com</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="footerLine"></div>
                                <div className="lineText">
                                    <p>© 2023 WORLD BIKE</p>
                                    <p>Пользовательское соглашение</p>
                                </div> */}
                            </div>
                        </div>
                    </footer>
        </>
    );
};

export default Footer;