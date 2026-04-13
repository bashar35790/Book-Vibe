import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import layout from './layout/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import BookDetais from './pages/BookDetais'

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
        path:"/bookDetails/:bookId",
        element: <BookDetais ></BookDetais>,
        loader: () => fetch("/booksData.json")
    }

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
