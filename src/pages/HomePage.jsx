import React from 'react';
import BikeBack from '../component/image/bike back img.png';
import { Link } from 'react-router-dom';
import slide1 from '../component/image/slide1.png';
import slide2 from '../component/image/slide2.png';
import slide3 from '../component/image/slide3.png';
import slide4 from '../component/image/slide4.png';
import slide5 from '../component/image/slide5.png';
import slide6 from '../component/image/slide6.png';
import slide7 from '../component/image/slide7.png';
import product1 from '../component/image/product1.png';
import product2 from '../component/image/product2.png';
import product3 from '../component/image/product3.png';
import product4 from '../component/image/product4.png';
import product5 from '../component/image/product5.png';
import product6 from '../component/image/product6.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import italia from '../component/image/italia flag.png';
import usa from '../component/image/usa flag.png';
import sectionBike from '../component/image/section bike img.png';
import minLogo1 from '../component/image/min-logo1.png';
import minLogo2 from '../component/image/min-logo2.png';
import minLogo3 from '../component/image/min-logo3.png';
import minLogo4 from '../component/image/min-logo4.png';
import ScrollToTopButton from '../component/scrolltop/ScrollToTopButton';
import mounLogo1 from '../component/image/moun-logo1.png';
import mounLogo2 from '../component/image/moun-logo2.png';
import mounLogo3 from '../component/image/moun-logo3.png';
import mounLogo4 from '../component/image/moun-logo4.png';
import mountainBike from '../component/image/mountain bike.png';
import productImage1 from '../component/image/product img1.png';
import productImage2 from '../component/image/product img2.png';
import helmet1 from '../component/image/helmet1.png';
import helmet2 from '../component/image/helmet2.png';
import helmet3 from '../component/image/helmet3.png';
import bikeLogo from '../component/image/bike logo.png';
import footerPhone from '../component/image/footer phone.png';
import footerPoint from '../component/image/footer point.png';
import footerMessage from '../component/image/footer message.png';


const HomePage = () => {
    return (
        <section id='section'>
            <div className="container">
                <div className="section">

                    <div className="section-text">
                        <h1>ЭЛЕКТРО <br /> ВЕЛОСИПЕДЫ</h1>
                        <p>Cento10 Hybrid — это гоночный велосипед с  <br /> помогающим педалированию электроприводом, <br /> который устанавливает новый, очень высокий <br /> стандарт для данной категории</p>
                        <button>Подробнее</button>
                    </div>

                    <div className="back-img">
                        <img src={BikeBack} alt="" />
                    </div>

                </div>
            </div>

            {/* VIDEO LINK */}
            <div className="video-link-blocks">
                        <div className="link1-block">
                            <Link to='/video'>
                            <h3>Экстремальное <br /> вождение на горном <br /> велосипеде</h3>
                            </Link>
                        </div>
                        <div className="link2-block">
                            <Link to='/videoProf'> <h3>Велосипеды <br /> для профессионалов</h3></Link>
                        </div>
                        <div className="link3-block">
                            <Link to='/canyon'> <h3>Долгая поездка <br /> на шоссейном велосипеде</h3></Link>
                        </div>
                    </div>

                    {/* SLIDER  */}
                    <section id='slider'>
                        <div className="slider">
                            <div className="slider-track">
                                <div className="slide">
                                    <img src={slide1} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide2} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide3} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide4} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide5} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide6} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide7} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide1} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide2} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide3} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide4} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide5} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide6} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide7} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide1} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide2} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide3} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide4} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide5} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide6} alt="" />
                                </div>

                                <div className="slide">
                                    <img src={slide7} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id='product-section'>
                        <div className="container">
                        <h1>НОВИНКИ</h1>
                            <div className="product-section">
                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={italia} alt="" />
                                    </div>
                                    <img src={product1} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>684 840 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>


                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img src={product2} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>89 000 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>


                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img src={product3} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>113 000 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>
                            </div>
                            <Link to='/list'><h6>ПОКАЗАТЬ ВСЕ</h6></Link>
                        </div>
                    </section>



                    <section id='product-section2'>
                        <div className="container">
                            <div className="product-section2">
                                <div className="product-section2-text">
                                    <h1>НИЧЕГО НЕ СМОЖЕТ <br /> ОСТАНОВИТЬ ВАС</h1>
                                    <div className="product-section2-p">
                                    <p>Наша компания специализируется на продаже товаров <br /> для велосипедного спорта — велосипедов, запасных частей, <br /> аксессуаров и различного спортивного инвентаря <br /> для активного спорта и отдыха.</p>
                                    <p>Подробнее</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-section-img">
                                    <img src={sectionBike} alt="" />
                                </div>

                                <div className="min-about-section">
                                    <div className="min-about1">
                                        <div className="min-about">
                                            <img src={minLogo1} alt="" />
                                            <h5>Европейские бренды</h5>
                                        </div>
                                        <p>Представляем десятки <br /> европейских брендов</p>
                                    </div>

                                    <div className="min-about1">
                                        <div className="min-about">
                                            <img src={minLogo2} alt="" />
                                            <h5>Вечная гарантия</h5>
                                        </div>
                                        <p>На некоторые бренды <br /> предоставляем пожизненную <br /> гарантию</p>
                                    </div>

                                    <div className="min-about1">
                                        <div className="min-about">
                                            <img src={minLogo3} alt="" />
                                            <h5>Предпродажная настройка</h5>
                                        </div>
                                        <p>Специалисты настроят ваш <br /> велосипед наилучшим <br /> образом</p>
                                    </div>

                                    <div className="min-about1">
                                        <div className="min-about">
                                            <img src={minLogo4} alt="" />
                                            <h5>Доставка за 24 часа</h5>
                                        </div>
                                        <p>Доставляем товар всеми <br /> популярными транспортными <br /> компаниями</p>
                                    </div>
                                </div>

                                <div className="bikeForWinter">
                                    <div className="container">
                                        <h1>Лучшие модели <br /> для зимней <br /> езды</h1>
                                        <div className="winterBikeCard">
                                        <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={italia} alt="" />
                                    </div>
                                    <img src={product4} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>259 840 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>

                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img src={product5} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>38 000 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>


                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img src={product6} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>34 000 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>
                                        </div>
                                    </div>

                                    {/* <div className="winterBack">
                                        <div className="coveer"></div>
                                        <img src={winterBack} alt="" />
                                    </div> */}
                                </div>
                    </section>



                    <section id='product-section3'>
                        <div className="container">
                            <div className="product-section3">
                                <h1>Горные <br /> велосипеды</h1>
                                <div className="mountainBike">
                                    <div className="mountainBikeBlock1">
                                        <div className="mounBikeBlock1">
                                            <div className="minmounBike">
                                                <div className="logo-moun">
                                                    <h5>Рама</h5>
                                                    <img src={mounLogo1} alt="" />
                                                </div>
                                                <p>It is a long established fact that <br /> a reader will be distracted by <br /> the readable content of</p>
                                            </div>
                                            <div className="minmounBike">
                                                <div className="logo-moun">
                                                    <h5>Бортовой <br /> компьютер</h5>
                                                    <img src={mounLogo2} alt="" />
                                                </div>
                                                <p>The point of using lorem ipsum <br /> is that it has a more-or-less <br /> normal distribution of letters</p>
                                            </div>
                                        </div>

                                        <div className="mounBikeBlock2">
                                        <div className="minmounBike">
                                            <div className="logo-moun">
                                                <h5>Трансмиссия</h5>
                                                <img src={mounLogo3} alt="" />
                                            </div>
                                            <p>Many desktop publishing <br /> packages and web page <br /> editors now use lorem ipsum as</p>
                                        </div>
                                        <div className="minmounBike">
                                            <div className="logo-moun">
                                                <h5>Обородувание</h5>
                                                <img src={mounLogo4} alt="" />
                                            </div>
                                            <p>Contrary to popular belief, <br /> lorem ipsum is not simply <br /> random text. It has roots in</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="mountainBikeBlock2">
                                        <img src={mountainBike} alt="" />
                                        <p>Горный велосипед несмотря на свое название часто и активно <br /> используются в условиях города, так как обладает рядом <br /> характеристик, позволяющих сделать велопрогулку <br /> максимально приятной и комфортной</p>
                                        <button>Каталог</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                    <section id='product-section4'>
                        <div className="container">
                            <h1>Преимущества</h1>
                        </div>
                        <div className="product-section4">
                            <img className='img' src={productImage1} alt="" />

                            <div className="product-section4-main-block">

                                <div className="product-section4-blocks1">
                                    <div className="product-section4-block">
                                        <h5>БЕСПЛАТНАЯ <br /> ДОСТАВКА</h5>
                                        <p> Мы пользуемся всеми <br /> популярными видами <br /> доставки</p>
                                    </div>
                                    <div className="product-section4-block">
                                        <h5>ОБМЕН <br /> И ВОЗВРАТ</h5>
                                        <p>Мы пользуемся всеми <br /> популярными видами <br /> доставки</p>
                                    </div>
                                </div>

                                <div className="product-section4-blocks2">
                                <div className="product-section4-block">
                                    <h5>ДОП. <br /> ОБСЛУЖИВАНИЕ</h5>
                                    <p>Мы пользуемся всеми <br /> популярными видами <br /> доставки</p>
                                </div>
                                <div className="product-section4-block">
                                    <h5>ОНЛАЙН <br /> ОПЛАТА</h5>
                                    <p>Мы пользуемся всеми <br /> популярными видами <br /> доставки</p>
                                </div>
                                </div>

                            </div>

                            <img className='img2' src={productImage2} alt="" />
                        </div>
                    </section>


                    <section id='product-section'>
                        <div className="container">
                            <h1>Экипировка</h1>
                            <div className="product-section">
                            <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={italia} alt="" />
                                    </div>
                                    <img src={helmet1} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>14 930 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>

                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img src={helmet2} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>9880 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>

                                <div className="product-card">
                                    <div className="italia">
                                    <img className='italia' src={italia} alt="" />
                                    </div>
                                    <img src={helmet3} alt="" />

                                    <div className="product-text">
                                        <h4> Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021</h4>
                                        <p>8840 Сом</p>
                                    </div>

                                    <div className="product-active">
                                        <ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



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
                    <ScrollToTopButton/>
        </section>
    );
};

export default HomePage;