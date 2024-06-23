import React from 'react';
import { useCard } from '../context/CardContext';
import CardTable from '../component/card/CardTable';

const CardPage = () => {
    const { card } = useCard();
    return (
        <div>
            {
                card.products.length > 0 && card !== null ? (
                    <CardTable card={card}/>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    );
};

export default CardPage;