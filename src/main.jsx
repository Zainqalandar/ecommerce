import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import { Detail, Person, Shop, SignIn, Signup, User } from './components/index.js'
import Store from './Pages/Store/Store.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import Product from './Pages/Store/Product/Product.jsx'
import BoySho0 from './Pages/Store/Boy-Shoes/BoySho0.jsx'
import GirlSho0 from './Pages/Store/Boy-Shoes/GirlSho0.jsx'
import GirlShirt from './Pages/Store/Boy-Shoes/GirlShirt.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'store',
        element: <Store />,
        children: [
          {
            path: 'product',
            element: <Product />,

          },
          {
            path: 'detail/:slug',
            element: <Detail />
          },
          {
            path: "boysho",
            element: <BoySho0 />
          },
          {
            path: 'girlsho',
            element: <GirlSho0 />
          },
          {
            path: 'girlshirt',
            element: <GirlShirt />
          }
        ]
      },
      {
        path: '/adToCart',
        element: <Shop />
      },
      {
        path: 'person',
        element: <Person />
      },
    ]
  },
  {
    path: 'signIn',
    element: <SignIn />
  },
  {
    path: 'signup',
    element: <Signup />

  },
  {
    path: ':userid',
    element: <User />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
