import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import ResturantDetail from './components/ResturantDetail.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

const appRoutes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/resutrant/:resId',
        element:<ResturantDetail/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRoutes}/>
    </Provider>
  </React.StrictMode>,
)
