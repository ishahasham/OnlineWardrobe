import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import About from './Screens/About/About'
import Products from './Screens/Products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './Screens/SingleProduct/SingleProduct'



function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='products/' element={<Products/>}/>
      <Route path='products/:id' element={<SingleProduct/>}/>
      <Route/>
    </Routes>
     </>
  )
}

export default App
