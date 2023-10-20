import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import { Shop, SignIn } from './components/index.js'
import Store from './Pages/Store/Store.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
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
        path: '/store',
        element: <Store />
      },
      {
        path: '/shop',
        element: <Shop />
      }
    ]
  },
  {
    path: '/signIn',
    element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
