import React, { useEffect } from 'react';
import { useProduct } from '../../context/ProductContext';
import CardProduct from '../card/CardProduct';
import listImg from '../image/list img.png'
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';
import PaginProduct from './PaginProduct';


const ListProduct = () => {

    const {readProduct, data, currentPage, searcheProduct, searchWhite, searchBlue, searchGray, searchYellow, searchRed} = useProduct();

    const location = useLocation();

    useEffect(() => {
        readProduct();
    }, [])

    useEffect(() => {
        if(location.pathname === '/white') {
            searchWhite();
        } else if (location.pathname === '/blue') {
            searchBlue();
        }
        else if (location.pathname === '/gray') {
            searchGray();
        }

        else if (location.pathname === '/yellow') {
            searchYellow();
        }

        else if (location.pathname === '/red') {
            searchRed();
        }
         else {
            readProduct();
        }
    })
    return (
        <>
        <div className="listImg">
            <Link to='/home'><p>Главная</p></Link>
            <h1>Магазин</h1>
            <img src={listImg} alt="" />
        </div>

       <div id="filter-block">
        <div className="filter-container">
        <div className="filter-block">
            <div className="filtered">
                <p>Цвет:</p>
                <Link to='/white'><div className="boxColor1"></div></Link>
                <Link to='/blue'><div className="boxColor2"></div></Link>
                <Link to='/gray'><div className="boxColor3"></div></Link>
                <Link to='/yellow'><div className="boxColor4"></div></Link>
                <Link to='/red'><div className="boxColor5"></div></Link>
            </div>
            <div className="search">
                <input onChange={(e) => searcheProduct(e.target.value)} type="search" placeholder='search...'/>
            </div>
        </div>
        </div>
       </div>
        <div id="main-productList">
            <div className="card-container">
            <div className="main-card-card">
            {
                data.length > 0 ? (
                    currentPage().map((el, index) => <CardProduct el={el} key={index}/>)
                ) : (

                    <div id="main-productList">
                        <div className="skeleton-card-card">
                        <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>


                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>

                                <div className="skeleton-card">
                                    <div className="italia1">
                                    </div>
                                    

                                    <div className="product-text1">
                                    </div>

                                    <div className="product-active-card1">
                                        
                                    </div>

                                    
                                </div>
                        </div>
                    </div>
                   
                )
            }
            </div>
            </div>
        </div>
        <div className="pagination">
        <PaginProduct/>
        </div>
        <ScrollToTopButton/>
            <Footer/>
        </>
    );
};

export default ListProduct;