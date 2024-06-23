import React from 'react';
import BikeLogo from '../component/image/bike logo.png'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Canyon from '../component/video/canyon drive.mp4'

const CanyounRide = () => {
    return (
        <>
               <div className="main-video">
            <div className="video-page">
                <video className='video-media' src={Canyon} autoPlay muted loop></video>
            </div>
            </div>

            <div className="video-btn">
                <h1>INSANE RIDE</h1>
                <p>Extreme biking, often known as extreme mountain  biking or downhill <br /> biking, is an adventurous and thrilling sport that involves riding <br /> bicycles on challenging and rugged terrains.</p>
                <button><a href="https://www.youtube.com/watch?v=95LQJ_qhYag" target='blank1'>Смотреть видео на <span> YouTube</span></a></button>
                <Link to='/home'> <button className='video-btn-top'>На Главную</button></Link>
            </div>
            <div className="video-hover"></div>
        </>
    );
};

export default CanyounRide;