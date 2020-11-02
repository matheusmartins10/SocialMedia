import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import Input from '../Form/Input'
import Button from '../Form/Button'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault()

       fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           }, 
           body: JSON.stringify({username, password})
       }).then(response => {
           console.log(response)
           return response.json()
       })
       .then((json) => {
           console.log(json)
       })
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <Input label="Username" name="username" type="text" />
                <Input label="Senha" name="password" type="password" />
                <Button> Entrar </Button>
            </form>
            <Link to="/login/criar" >Cadastro</Link>
        </section>
    )
}

export default LoginForm
