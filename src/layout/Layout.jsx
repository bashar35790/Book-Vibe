import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/sections/Footer'
import { Outlet } from 'react-router'

export default function layout() {
  return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      
      </>
  )
}
