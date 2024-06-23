import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../products/Footer';
import ScrollToTopButton from '../scrolltop/ScrollToTopButton';

const Register = () => {
    const { register, signInWithGoogle } = useAuth();

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


   

    function signUp() {
        try {
          register(name, lastName, email, password);
          navigate("/home");
        } catch (error) {
          setError(error.message);
        }
      }

    return (
        <div id='main-register'>
            <div className="register">
                {
                    error && <Alert severity='error'>{error}</Alert>
                }
                <h1>Регистрация</h1>
                <div className="register-inputs">
                    <div className="pName">
                    <p>Name</p>
                    </div>
                    <input onChange={(e) => setName(e.target.value)} type="text" />
                    <div className="pLastName">
                    <p>Last Name</p>
                    </div>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" />
                    <div className="pEmail">
                    <p>Email</p>
                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} type="text"/>
                    <div className="pPassword">
                    <p>Password</p>
                    </div>
                    <input onChange={(e) => setPassword(e.target.value)} type="text"/>
                </div>

                <div className="register-btns">
                <button onClick={signUp}>Регистрация</button>
                <button onClick={() => signInWithGoogle()}>Регистрация через  <span className='google1'>G</span><span className='google2'>o</span><span className='google3'>o</span><span className='google4'>g</span><span className='google5'>l</span><span className='google6'>e</span></button>
                <p>Уже регистрировались? <Link to='/signIn'><span className='log'>Войти</span></Link> </p>
                </div>
            </div>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    );
};

export default Register;