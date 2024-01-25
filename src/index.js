import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import store from './app/store'


import App from './App';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './features/headerNav/About'
import WineList from './features/wine/WineList';
import WineApp from './features/wine/WineApp';
import SingleWine from './features/wine/SIngleWine';
import Secure from './features/user/Secure';
import Cart from './features/cart/Cart';
import Login from './features/user/Login';
import Signup from './features/user/Signup';
import Account from './features/user/Account';
import User from './features/user/User';
import OrderHistory from './features/order/OrderHistory';
import Checkout from './features/order/Checkout';
import OrderSuccess from './features/order/OrderSuccess';
import Location from './features/headerNav/Location';
import Reserve from './features/reservation/Reserve';
import ReservationSuccess from './features/reservation/ReservationSuccess';
import Reservations from './features/reservation/Reservations';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <WineApp />,
              children: [
                  {
                    path: "/",
                    element: <WineList />,
                  },
                  {
                    path: "/wines",
                    element: <WineList />,
                  },
                  {
                    path: "wines/cat/:categoryId",
                    element: <WineList />,
                  },
                  {
                    path: "wines/:itemId",
                    element: <SingleWine />,
                  },
                  {
                    path: "/cart",
                    element: <Cart />
                  },
              ]
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
            path: "/visit-taste",
              element: <Location />,
          },
          {
              path: "/secure",
              element: <Secure />,
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
                  element: <OrderSuccess />
                },
                {
                  path: "/secure/reserve",
                  element: <Reserve />
                },
                {
                  path: "/secure/reservation_success",
                  element: <ReservationSuccess />
                },
                {
                  path: "/secure/reservations",
                  element: <Reservations />
                },

              ]


          },
          
          {
              path: "/about",
              element: <About />
          },

      ],
      
    }
  ])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>
)

