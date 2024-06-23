import React, { useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import { Link, useParams } from 'react-router-dom';
import CardDetails from '../component/card/CardDetails';
import { Typography } from '@mui/material';

const DetailsPage = () => {

    const {getOneProduct, oneProduct} = useProduct();
    const { id } = useParams();

    useEffect(() => {
        getOneProduct(id)
    }, [])
    return (
        <div>
            <Link to='/home'><p className='detailsP'>Главная</p></Link>
            {
                oneProduct ? (
                    <CardDetails oneProduct={oneProduct}/>
                ) : ( <Typography>Loading...</Typography>)
            }
        </div>
    );
};

export default DetailsPage;