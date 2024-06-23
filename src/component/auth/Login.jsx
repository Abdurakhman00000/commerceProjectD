import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Alert } from '@mui/material';
import Footer from '../products/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';

const Login = () => {

    const { loginUser } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    async function login() {
        try {
            await loginUser(email, password);
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div id='main-register'>
            <div className="register">
                {
                    error && <Alert severity='error'>{error}</Alert>
                }
                <h1>С возвращением!</h1>
                <div className="register-inputs">
                    <div className="pEmail">
                    <p>Email</p>
                    </div>
                    <input type="text" />
                    <div className="pPassword">
                    <p>Password</p>
                    </div>
                    <input type="text" />
                </div>

                <button onClick={login}>Войти</button>
                <div className="logg">
                <p>У вас нет аккаунта? <Link to='/signUp'><span className='log'>Регистрация</span></Link> </p>
                </div>
            </div>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    );
};

export default Login;