import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'

export default function PageRouter() {
  return (
    <>
          

    <Routes>
        <Route index element={<Home />} />
       
    </Routes>
    </>
  )
}
