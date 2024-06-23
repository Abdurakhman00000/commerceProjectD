import React, { useEffect , useState } from 'react';
import { useProduct } from '../../context/ProductContext';
import { Link, useParams } from 'react-router-dom';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';
import Footer from '../products/Footer';



const INIT = {
    image: '',
    name: '',
    price: '',
    description: '',
    color: '',
    year: '',
    wheelSize: '',
    material: '',
    country: '',
    brand: '',
    gearbox: '',
}

const Form = ({ isEdit }) => {

    const { addProduct, oneProduct, editProduct } = useProduct();
    const [inputValues, setInputValues] = useState(INIT);
    const { id } = useParams();

    useEffect(() => {
        if(oneProduct && isEdit) {
            setInputValues(oneProduct)
        }
    }, [oneProduct])

    // console.log(oneProduct);

    function handleInput (e) {
        if(e.target.name === 'price') {
            let obj = {...inputValues, [e.target.name]: +e.target.value}
            setInputValues(obj)
        } else {
            let obj = {...inputValues, [e.target.name]: e.target.value}
            setInputValues(obj)
        }
    }


    function handleInputSave () {
        addProduct(inputValues)
        setInputValues(INIT)
    }


    function handleEditValues () {
        editProduct(id, inputValues)
    }

    return (
        <div>
            <div className="main-main">
        <div id="main-admin-block">
                <div className="container">
                    <div className="main-admin-block">
                        <div className="admin-about">
                            <h1>Админ</h1>
                            <div className="lineadmin"></div>

                            <div className="about-btns">
                                {
                                    isEdit ? (<Link to='/list'><button onClick={handleEditValues}>Изменить</button></Link>) : (<Link to='/list'><button onClick={handleInputSave}>Добавить</button></Link>)
                                }
                                {
                                    isEdit ? (<Link to='/list'><button>Отменить</button></Link>) : (<Link to='/home'><button>Отменить</button></Link>)
                                }
                            </div>
                        </div>


                        <div className="admin-block">
                            {
                                isEdit ? ( <h1>Изменение продукта</h1>) : ( <h1>Добавление продукта</h1>)
                            }

                            <p>Изображение товара</p>
                            <input type="text" name='image' onChange={handleInput} value={inputValues.image}/>

                            <p>Название товара</p>
                            <input type="text" name='name' onChange={handleInput} value={inputValues.name}/>

                            <p>Цена</p>
                            <input type="text" name='price' onChange={handleInput} value={inputValues.price}/>

                            <p>Описание товара</p>
                            <input type="text" name='description' onChange={handleInput} value={inputValues.description}/>

                            <h2>Характеристики товара</h2>
                            <p>Цвет</p>
                            <input type="text" name='color' onChange={handleInput} value={inputValues.color}/>

                            <p>Год</p>
                            <input type="text" name='year' onChange={handleInput} value={inputValues.year}/>

                            <p>Диаметр колеса</p>
                            <input type="text" name='wheelSize' onChange={handleInput} value={inputValues.wheelSize}/>
                            
                            <p>Материал рамы</p>
                            <input type="text" name='material' onChange={handleInput} value={inputValues.material}/>

                            <p>Страна</p>
                            <input type="text" name='country' onChange={handleInput} value={inputValues.country}/>

                            <p>Производитель</p>
                            <input type="text" name='brand' onChange={handleInput} value={inputValues.brand}/>

                            <p>Количество скоростей</p>
                            <input type="text" name='gearbox' onChange={handleInput} value={inputValues.gearbox}/>
                        </div>
                    </div>
                </div>
                <ScrollToTopButton/>
            </div>
            <div className="footer-mainn">
            <Footer/>
            </div>
                    </div>
        </div>
    );
};

export default Form;