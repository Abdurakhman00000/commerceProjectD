import { FormControl } from '@mui/material';
import React from 'react';
import Form from '../form/Form';

const AddProduct = () => {
    return (
        <FormControl>
            <Form isEdit={false}/>
        </FormControl>
    );
};

export default AddProduct;