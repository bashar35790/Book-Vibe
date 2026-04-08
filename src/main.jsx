import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import layout from './layout/Layout'
import Home from './pages/Home'
import Books from './pages/Books'

const router = createBrowserRouter([
  {
    path:"/",
    Component: layout,
    children:[
      {
        index:true,
        element: <Home></Home>
      },
      {
        path:"book",
        element: <Books></Books>
      }

    ]
  },
  

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
