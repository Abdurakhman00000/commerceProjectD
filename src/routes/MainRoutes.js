import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import VideoPage from '../pages/VideoPage';
import VideoPageProf from '../pages/VideoPageProf';
import CanyounRide from '../pages/CanyounRide';
import AdminPage from '../pages/AdminPage';
import EditPage from '../pages/EditPage';
import ListProduct from '../component/products/ListProduct';
import Login from '../component/auth/Login';
import Register from '../component/auth/Register';
import MenuPage from '../pages/MenuPage';
import DetailsPage from '../pages/DetailsPage';
import CardPage from '../pages/CardPage';
import { useAuth } from '../context/AuthContext';
import { ADMIN } from '../helpers/const';
import NotFoundPage from '../pages/NotFoundPage';
import WhitePage from '../component/FilterNavPage/WhitePage';
import BluePage from '../component/FilterNavPage/BluePage';
import GrayPage from '../component/FilterNavPage/GrayPage';
import YellowPage from '../component/FilterNavPage/YellowPage';
import RedPage from '../component/FilterNavPage/RedPage';

const MainRoutes = () => {

    const { user } = useAuth();


    const PRIVATE = [
        {
            link: '/admin',
            element: <AdminPage/>,
            id: 1,
        },

        {
            link: '/edit/:id',
            element: <EditPage/>,
            id: 2,
        },
    ]


    const ROUTES = [
        {
            link: '/home',
            element: <HomePage/>,
            id: 3,
        }, 


        {
            link: '/canyon',
            element: <CanyounRide/>,
            id: 6,
        },


        {
            link: '/list',
            element: <ListProduct/>,
            id: 7,
        }, 

        {
            link: '/signIn',
            element: <Login/>,
            id: 8,
        },

        {
            link: '/signUp',
            element: <Register/>,
            id: 9,
        },

        {
            link: '/menuPage',
            element: <MenuPage/>,
            id: 10,
        },

        {
            link: '/detailsPage/:id',
            element: <DetailsPage/>,
            id: 11,
        }, 

        {
            link: '/card',
            element: <CardPage/>,
            id: 12,
        },

        {
            link: '*',
            element: <NotFoundPage/>,
            id: 13,
        },

        {
            link: '/white',
            element: <WhitePage/>,
            id: 14,
        },

        {
            link: '/blue',
            element: <BluePage/>,
            id: 15,
        },

        {
            link: '/gray',
            element: <GrayPage/>,
            id: 16,
        },

        {
            link: '/yellow',
            element: <YellowPage/>,
            id: 17,
        },

        {
            link: '/red',
            element: <RedPage/>,
            id: 18,
        },
    ]
    return (
        <Routes>
            {
                user ? (
                    ADMIN.map((el) => user.email === el.email  ? (
                        PRIVATE.map((el) => (
                            <Route path={el.link} element={el.element} key={el.id}/>
                        ))
                    ) : null)
                ) : null
            }

            {
                ROUTES.map((el) => (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;