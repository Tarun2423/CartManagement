import React from 'react'
import './App.css'
import Product from './Product';
import Login from './Login';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();







  return (
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/product' element={<Product/>} />
  </Routes>
  )
}

export default App
