import React from 'react';
import notFound from '../component/image/notFound.jpg'

const NotFoundPage = () => {
    return (
        <div>
            <div className="notFoundImage">
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;