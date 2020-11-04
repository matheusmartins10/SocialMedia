import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/Home'
import Login from './components/Login/Login'
import User from './components/User/User'

import ProtectedRoute from './components/Helper/ProtectedRoute'

import { UserStorage } from './contexts/UserContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
     <UserStorage>
      <Header />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="login/*" element={<Login />} />
         <ProtectedRoute path="conta/*" element={<User  />} />
      </Routes>
      <Footer />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
