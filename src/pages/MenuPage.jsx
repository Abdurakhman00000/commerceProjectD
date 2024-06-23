import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const MenuPage = () => {
    return (
        <>
            <div id="mainMenuPage">
                <div className="mainMenuPage">
                    <div className="menuClose">
                        <Link to='/home'> <CloseIcon sx={{fontSize: '44px', marginLeft: '300px', color: 'black', marginTop: '20px'}}/></Link>
                    </div>
                    <div className="menuItems">
                        <Link to='/home'>  <p>Главная</p></Link>
                        <Link to='/admin'> <p>Admin</p></Link>
                        <p>О нас</p>
                        <p>Велосипеды</p>
                        <Link to='/list'><p>Покупка</p></Link>
                        <Link to='/card'><p>Корзина</p></Link>
                        <p>Блог</p>
                        <p>Контакты</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuPage;