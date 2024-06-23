import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { BASKET } from '../helpers/const';
import { calcSubPrice, totalSubPrice } from '../helpers/function';



const cardContext = createContext();
export const useCard = () => useContext(cardContext);


const INIT = {
    card: JSON.parse(localStorage.getItem("cards")),
}


const reducer = (state = INIT, action) => {
    switch (action.type) {
        case BASKET.GET:
            
            return {...state, card: action.payload};
    
        default:
            return state;
    }
}

const CardContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT)




    /// ADD PRODUCT TO CARD
    function addProductToCard (product) {
    let card = JSON.parse(localStorage.getItem("cards"));
    if(!card) {
        card = {
            products: [],
            totalCount: 0
        };
    }

    let newProduct = {
        item: product,
        count: 1,
        subPrice: +product.price,
    }

    card.products.push(newProduct)
    localStorage.setItem("cards", JSON.stringify(card));
    }
    /// ADD PRODUCT TO CARD



    /// GET PRODUT FROM CARD
    function getProductFromCard() {
    let card = JSON.parse(localStorage.getItem("cards"));
        if(!card) {
            card = {
                products: [],
                totalCount: 0
            };
        }
        dispatch({
            type: BASKET.GET,
            payload: card,
        })
    }

    useEffect(() => {
        getProductFromCard();
    }, [])
    /// GET PRODUT FROM CARD



    /// CHECK PRODUCT IN CARD
    function checkProductInCard(id) {
        let card = JSON.parse(localStorage.getItem("cards"));
        if(card) {
            let obj = card.products.find((el) => el.item.id === id);
            return obj ? true : false;
        }
    }
    /// CHECK PRODUCT IN CARD



    /// DELETE ONE PRODUCT FROM CARD
    function deleteOneProductFromCard(id) {
        let card = JSON.parse(localStorage.getItem("cards"));
        card.products = card.products.filter((el) => el.item.id !== id)
        card.totalCount = totalSubPrice(card.products)
        localStorage.setItem("cards", JSON.stringify(card))
        getProductFromCard();
    }
    /// DELETE ONE PRODUCT FROM CARD



    /// CHANCE PRODUCT COUNT ITEM
    function changeProductCount (count, id) {
        if(count < 1) {
            alert('error');
            return;
        }

    let card = JSON.parse(localStorage.getItem("cards"));
    card.products = card.products.map((product) => {
        if(product.item.id === id) {
            product.count = count;
        product.subPrice = calcSubPrice(product)
        }
        return product
    });
    card.totalCount = totalSubPrice(card.products);
    localStorage.setItem("cards", JSON.stringify(card))
    getProductFromCard();
    }
    /// CHANCE PRODUCT COUNT ITEM



    const values = {
        addProductToCard,
        card: state.card,
        checkProductInCard,
        deleteOneProductFromCard,
        changeProductCount,
    }
    return (
        <cardContext.Provider value={values}>
            {children}
        </cardContext.Provider>
    );
};

export default CardContext;