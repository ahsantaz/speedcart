import React from 'react'
import { Routes, Route, Router } from 'react-router'
import Home from '../Pages/Home'

import CartEditor from '../Pages/Cart-editor'
import StickyCart from '../Pages/Sticky-cart'
import AbandonedCart from '../Pages/Abandoned-cart'
import Header from '../Components/sections/header'
import Footer from '../Components/sections/footer'
import NotFound from '../Pages/NotFound'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Privacy from '../Pages/Privacy-policy'
import ScrollToTop from '../Components/scrolltop'

export default function PageRouter() {
  return (
    <>

      <Header />
    

    <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart-editor' element={<CartEditor />} />
        <Route path='/sticky-cart' element={<StickyCart />} />
        <Route path='/abandoned-cart' element={<AbandonedCart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
       
      <Footer />
    </>
  )
}
