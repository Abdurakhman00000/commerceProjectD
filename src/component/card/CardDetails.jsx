import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import italia from '../image/italia flag.png';
import usa from '../image/usa flag.png';
import product1 from '../image/product1.png';
import product2 from '../image/product2.png';
import product3 from '../image/product3.png';
import Footer from '../products/Footer';
import { useCard } from '../../context/CardContext';
import { Button } from '@mui/material';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';


const CardDetails = ({oneProduct}) => {
    const { addProductToCard, checkProductInCard } = useCard();



    return (
        <div id='productDetails'>
            <div className="container">
                <div className="productDetails">
                <div className="details-card">
                                    <div className="details-img">
                                    <img src={oneProduct.image} alt="" />
                                    </div>

                                    <div className="details-text">
                                        <div className="sontainer">
                                        <h2>{oneProduct.name}</h2>
                                        <p className='brand'>{oneProduct.brand}</p>
                                        <p className='art'>Артикул: 7654-188</p>
                                        <p className='nal'>В наличии</p>
                                        <p className='details-money'>{oneProduct.price} сом</p>
                                        <p className='details-descr'>{oneProduct.description}</p>
                                        {
                                            checkProductInCard(oneProduct.id) ? (
                                                <>
                                                <Link to='/list'><button onClick={() => addProductToCard(oneProduct)}>Вернуться к покупкам</button></Link>
                                                </>
                                            ) : (
                                                <button onClick={() => addProductToCard(oneProduct)}>В корзину</button>
                                            )
                                        }
                                        </div>
                                    </div>
                                </div>


                                <div className="characters">
                                    <div className="opisanie">
                                        <h2>Описание</h2>
                                        <p>{oneProduct.description} Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри. Scott Scale 700 RC — это рама из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01 1×11, дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros XR RC. Байк Нино Шуртера для шорт-трек кросс-кантри.</p>
                                    </div>

                                    <div className="character">
                                        <h2>Характеристики</h2>

                                        <div className="sontai">
                                        <div className="character-word">
                                            <p className='word'>Цвет</p>
                                            <p className='db'>{oneProduct.color}</p>
                                        </div>

                                        <div className="character-word2">
                                            <p className='word'>Год</p>
                                            <p className='db'>{oneProduct.year}</p>
                                        </div>

                                        <div className="character-word">
                                            <p className='word'>Диаметр колеса</p>
                                            <p className='db'>{oneProduct.wheelSize}</p>
                                        </div>

                                        <div className="character-word2">
                                            <p className='word'>Материал рамы</p>
                                            <p className='db'>{oneProduct.material}</p>
                                        </div>

                                        <div className="character-word">
                                            <p className='word'>Страна</p>
                                            <p className='db'>{oneProduct.country}</p>
                                        </div>

                                        <div className="character-word2">
                                            <p className='word'>Производитель</p>
                                            <p className='db'>{oneProduct.brand}</p>
                                        </div>

                                        <div className="character-word">
                                            <p className='word'>Количество скоростей</p>
                                            <p className='db'>{oneProduct.gearbox}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </div>

            <section id='product-section'>
                        <div className="container">
                        <h1>ПОХОЖИЕ ТОВАРЫ</h1>
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
                    <ScrollToTopButton/>
                    <Footer/>
        </div>
    );
};

export default CardDetails;