import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Blog from '../Pages/Blog'
import HowItWorks from '../Pages/HowItWorks'
import Pricing from '../Pages/Pricing'
import FAQ from '../Pages/FAQ'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}   />
      <Route path='/faq' element={<FAQ/>}   />
      <Route path='/pricing' element={<Pricing/>}   />
      <Route path='/how' element={<HowItWorks/>}   />
      <Route path='/blog' element={<Blog/>}   />
    </Routes>
  )
}

export default MainRoutes