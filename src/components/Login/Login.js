import React from 'react'

import { Routes, Route } from 'react-router-dom'

import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordReset from './LoginPasswordReset'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/criar" element={<LoginCreate />} />
                <Route path="/perdeu" element={<LoginPasswordLost />} />
                <Route path="/resetar" element={ <LoginPasswordReset /> } />
            </Routes>
        </div>
    )
}

export default Login
