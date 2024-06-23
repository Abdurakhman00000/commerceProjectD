import React from 'react';
import usa from '../image/usa flag.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useProduct } from '../../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ADMIN } from '../../helpers/const';


const CardProduct = ({el}) => {
    const navigate = useNavigate();
    const {deleteProduct} = useProduct();

    const { user } = useAuth();


    return (
        <div id='productList'>
            <div className="container">
                <div className="productList">
                <div className="product-card1">
                                    <div className="italia1">
                                    <img className='italia' src={usa} alt="" />
                                    </div>
                                    <img onClick={() => navigate(`/detailsPage/${el.id}`)}  src={el.image} alt="" />

                                    <div className="product-text1">
                                        <h4>{el.name}</h4>
                                        <p>{el.price} сом</p>
                                    </div>

                                     {
                                        user ? (
                                            ADMIN.map((el) => user.email === el.email ? (
                                               <>
                                                <div className="product-active-card1">
                                        <button onClick={() => navigate(`/edit/${el.id}`)}> <EditNoteIcon sx={{color: 'rgb(119, 119, 119)'}}/></button>
                                        <button onClick={() => deleteProduct(el.id)}><ClearIcon sx={{color: 'rgb(119, 119, 119)'}} /></button>
                                        </div>
                                               </>
                                            ) : (""))
                                   
                                        ) : null
                                    } 

{/* <div className="product-active-card1">
                                        <button onClick={() => navigate(`/edit/${el.id}`)}> <EditNoteIcon sx={{color: 'rgb(119, 119, 119)'}}/></button>
                                        <button onClick={() => deleteProduct(el.id)}><ClearIcon sx={{color: 'rgb(119, 119, 119)'}} /></button>
                                        </div> */}

                                    

                                    <div className="product-active-card2">
                                    <Link to='/card'><button><ShoppingCartIcon sx={{color: 'rgb(119, 119, 119)'}}/></button></Link>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;