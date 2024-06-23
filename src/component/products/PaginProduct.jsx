import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useProduct } from '../../context/ProductContext';

export default function PaginProduct() {
    const {setPage, count} = useProduct();

    function handlePaginPage (p, n) {
        setPage(n)
    }
  return (
      <Pagination onChange={handlePaginPage} count={count} variant="outlined" shape="rounded" />
  );
}