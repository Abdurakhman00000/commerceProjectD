import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTION } from '../helpers/const';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import axios from 'axios';


const productContext = createContext();
export const useProduct = () => useContext(productContext);


const INIT_STATE = {
    data: [],
    oneProduct: {},
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTION.GET:
            return {...state, data: action.payload};
            case "GET_ONE":
                return {...state, oneProduct: action.payload};
        
        default:
            return state;
    }
}

const ProductContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const productCollectionRef = collection(db, "data");
    const [newData, setNewData] = useState([]);


    /// ADD PRODUCT
    async function addProduct (newProduct) {
        await addDoc(productCollectionRef, newProduct)
    }
    /// ADD PRODUCT



    /// READ PRODUCT
    async function readProduct () {
      let data = await getDocs(productCollectionRef);
      data = data.docs.map((doc) => ({...doc.data(), id: doc.id}));

      dispatch({
        type: ACTION.GET,
        payload: data,
      })
    }
    /// READ PRODUCT



    /// DELETE PRODUCT
    async function deleteProduct(id) {
        let productRef = doc(db, "data", id);
        await deleteDoc(productRef, id)
        readProduct()
    }
    /// DELETE PRODUCT



        /// UPDATE PRODUCT
        async function getOneProduct(id) {
            let productRef = doc(db, "data", id);
            let data = await getDoc(productRef, id);
            data = {...data.data(), id: data.id}
            console.log(data);
            dispatch({
                type: "GET_ONE",
                payload: data,
            })

        }


        async function editProduct (id, editedProduct) {
            let productRef = doc(db, "data", id);
            await updateDoc(productRef, editedProduct)
            readProduct();
        }
        /// UPDATE PRODUCT





    /// PAGINATION PRODUCT
    const [page, setPage] = useState(1);
    let itemPerPage = 9;
    let count = Math.ceil(state.data.length / itemPerPage);

    function currentPage () {
        let start = (page - 1) * itemPerPage;
        let end = start + itemPerPage;
        return state.data.slice(start, end)
    }
    /// PAGINATION PRODUCT



    /// CONNECTED WITH TELEGRAM BOT
    const TOKEN_API = `7481346234:AAHXPZ4xCjhze6LBimWkcX8XijERI7IK7zI`;
    const URL_API = `https://api.telegram.org/bot${TOKEN_API}/sendMessage`;
    const MY_ID = `-1002202162288`;


    async function sendProductToTelegram(product) {

        let values = `Заказ:\n`;
    product.map((el) => {
      values += `${el.item.image}\n`;
      values += `${el.item.name}\n`;
      values += `Цена: ${el.item.price} сом\n `;
      values += `Кол-во: ${el.count}`;
    });

        let object = {
            chat_id: MY_ID,
            parse_model: "html",
            text: values,
        };

        await axios.post(URL_API, object);
    }
    /// CONNECTED WITH TELEGRAM BOT



    /// SEARCH PRODUCT
    function searcheProduct(value) {
        let result = state.data.filter((el) => el.brand.toLowerCase().includes(value.toLowerCase()))

        dispatch({
            type: 'GET',
            payload: result,
        })
    }
    /// SEARCH PRODUCT


    /// FILTERED PRODUCTS BY COLOR
    function searchWhite () {
        let res = newData.filter((el) => el.color === 'white')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }

    function searchBlue () {
        let res = newData.filter((el) => el.color === 'blue')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }

    function searchGray () {
        let res = newData.filter((el) => el.color === 'gray')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }

    function searchYellow () {
        let res = newData.filter((el) => el.color === 'yellow')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }

    function searchRed () {
        let res = newData.filter((el) => el.color === 'red')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }
    /// FILTERED PRODUCTS BY COLOR


    const values = {
        addProduct,
        readProduct,
        data: state.data,
        deleteProduct,
        getOneProduct,
        oneProduct: state.oneProduct,
        currentPage,
        setPage,
        count,
        editProduct,
        sendProductToTelegram,
        searcheProduct,
        searchWhite,
        searchBlue,
        searchGray,
        searchYellow,
        searchRed,
    }

    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;