import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Footer from '../products/Footer';
import usa from '../image/usa flag.png';
import italia from '../image/italia flag.png';
import product1 from '../image/product1.png';
import product2 from '../image/product2.png';
import product3 from '../image/product3.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';
import { useCard } from '../../context/CardContext';
import { useProduct } from '../../context/ProductContext';


const CardTable = ({ card }) => {
    const {deleteOneProductFromCard, changeProductCount} = useCard();
    const { sendProductToTelegram } = useProduct();

    return (
        <div id='basket'>
            <div className="container">
                <div className="basket-text">
                <p>Главная</p>
                <h1>Корзина</h1>
                </div>
                <div className="basket">

                {
                    card.products.map((el) => (
                        <div className="basket-container">
                            <div className="basket-card">
                       
                       <div className="basket-img-name">
                       <div className="basket-img">
                       <img src={el.item.image} alt="" />
                       </div>

                       <div className="cont">
                       <p>{el.item.name}</p>
                       </div>
                       </div>

                       <div className="basket-active-block">
                       <select onChange={(e) => changeProductCount(e.target.value, el.item.id)} value={el.count} className='select'>
                           <option value={1}>1</option>
                           <option value={2}>2</option>
                           <option value={3}>3</option>
                           <option value={4}>4</option>
                           <option value={5}>5</option>
                           <option value={6}>6</option>
                       </select>

                       <div className="price">
                           <p>{el.subPrice} сом</p>
                       </div>

                       <div onClick={() => deleteOneProductFromCard(el.item.id)} className="deleteIconBasket">
                           <ClearIcon sx={{color: 'black'}}/>
                       </div>
                       </div>
               </div>
                        </div>
                    ))
                }

                <div className="basket-total">
                    <h3>Итого: {card.totalCount} сом</h3>
                    <button onClick={() => sendProductToTelegram(card.products)}>Оформить заказ</button>
                </div>
                </div>
            </div>

            {/* SIMPLE PRODUCT RECOMENDET  */}
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

export default CardTable;

