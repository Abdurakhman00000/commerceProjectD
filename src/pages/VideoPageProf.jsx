import React from 'react';
import { Link } from 'react-router-dom';
import VeloProf from '../component/video/velo prof.mp4'

const VideoPageProf = () => {
    return (
        <>
            <div className="main-video">
            <div className="video-page">
                <video className='video-media' src={VeloProf} autoPlay muted loop></video>
            </div>
            </div>

            <div className="video-btn">
                <h1>INSANE RIDE</h1>
                <p>Extreme biking, often known as extreme mountain  biking or downhill <br /> biking, is an adventurous and thrilling sport that involves riding <br /> bicycles on challenging and rugged terrains.</p>
                <button><a href="https://www.youtube.com/watch?v=Jk7rliZpuSs" target='blank'>Смотреть видео на <span> YouTube</span></a></button>
                <Link to='/home'> <button className='video-btn-top'>На Главную</button></Link>
            </div>
            <div className="video-hover"></div>
        </>
    );
};

export default VideoPageProf;