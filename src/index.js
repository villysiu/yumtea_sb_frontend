import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import store from './app/store'


import LandingPage from './features/home/LandingPage';
import Home from './features/home/Home';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './features/headerNav/About'
import Collections from './features/menuitem/Collections'


import SecureApp from './features/user/SecureApp';

import Login from './features/user/Login';
import Signup from './features/user/Signup';
import Account from './features/user/Account';
import User from './features/user/User';
import OrderHistory from './features/order/OrderHistory';

import Checkout from './features/checkout/Checkout'
import OrderSuccessModal from './features/order/OrderSuccessModal';
import VisitTaste from './features/home/VisitTaste';
import GetData from './features/home/GetData';
import Support from "./features/support/Support";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GetData />,
        children:[

            {
                path: "/",
                element: <LandingPage />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: "/visit-taste",
                        element: <VisitTaste />,
                    },
                    {
                        path: "/support",
                        element: <Support />,
                    }, {
                        path: "/collection",
                        element: <Collections />,
                    },
                    {
                        path: "/user",
                        element: <User />,
                        children: [
                            {
                                path: '/user/signin',
                                element: <Login />
                            },
                            {
                                path: '/user/signup',
                                element: <Signup />
                            },
                        ]
                    },
                    {
                        path: "/secure",
                        element: <SecureApp />,
                        children: [
                            {
                                path: '/secure/account',
                                element: <Account />
                            },
                            {
                                path: "/secure/orders",
                                element: <OrderHistory />
                            },
                            {
                                path: "/secure/checkout",
                                element: <Checkout />
                            },
                            {
                                path: "/secure/ordersuccess",
                                element: <OrderSuccessModal />
                            },
                    
                        ]
                    },
                ]
            },
        
        ]

    },
    {
        path: "/about",
        element: <About />
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>

        <RouterProvider router={router} />
    </Provider>
)

