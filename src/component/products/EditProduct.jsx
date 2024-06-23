import { FormControl } from '@mui/material';
import React, { useEffect } from 'react';
import Form from '../form/Form';
import { useProduct } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';

const EditProduct = () => {

    const { getOneProduct } = useProduct();
    const { id } = useParams();

    useEffect(() => {
        getOneProduct(id);
    }, [])

    return (
        <FormControl>
            <Form isEdit={true}/>
        </FormControl>
    );
};

export default EditProduct;