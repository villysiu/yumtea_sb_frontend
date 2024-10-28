import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import store from './app/store'


import App from './App';
import Home from './features/home/Home'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './features/headerNav/About'
import Collections from './features/menuitem/Collections'
import MenuitemList from './features/menuitem/MenuitemList';
// import MenuitemApp from './features/menuitem/MenuitemApp';
import SingleMenuitem from './features/menuitem/SingleMenuitem';
import Secure from './features/user/Secure';
import Cart from './features/cart/Cart';
import Login from './features/user/Login';
import Signup from './features/user/Signup';
import Account from './features/user/Account';
import User from './features/user/User';
import OrderHistory from './features/order/OrderHistory';
import Checkout from './features/order/Checkout';
import OrderSuccess from './features/order/OrderSuccess';
import VisitTaste from './features/home/VisitTaste';
import Reserve from './features/reservation/Reserve';
import ReservationSuccess from './features/reservation/ReservationSuccess';
import Reservations from './features/reservation/Reservations';
import UpdateReservation from './features/reservation/UpdateReservation';
// import UpdateReservationFrom from './features/reservation/ReservationsApp';

import MenuitemsList from './features/menuitem/MenuItemsList';
import EnterPage from './features/home/EnterPage';
// import ResetApp from './features/home/ResetApp';
import ReservationsApp from './features/reservation/ReservationsApp';
const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,

      children: [
        {
            path: "/",
            element: <EnterPage />,
            children:[
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "collection",
                element: <Collections />,
              },
              {
                path: "collection/:itemId",
                element: <SingleMenuitem />,
              },
              {
                path: "collection/:categoryName",
                element: <MenuitemsList />,
              },
              {
                path: "/cart",
                element: <Cart />
              },
                ]
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
                    path: "/secure/reservations/",
                    element: <ReservationsApp />,
                    children: [
                        {
                          path: "/secure/reservations/",
                          element: <Reservations />,
                        },
                        {
                          path: "/secure/reservations/reserve",
                          element: <Reserve />
                        },
                        {
                          path: "/secure/reservations/:resId/update",
                          element: <UpdateReservation />,
                        },
                        {
                          path: "/secure/reservations/success",
                          element: <ReservationSuccess />
                        },
                    ]
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
                element: <VisitTaste />,
            },
            {
                path: "/about",
                element: <About />
            },
          ]}

      ],
      
  //   }
  // ]
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>
)

