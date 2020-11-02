import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import Input from '../Form/Input'
import Button from '../Form/Button'

import { TOKEN_POST, USER_GET } from '../../api'

import useForm from '../../hooks/useForm'

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    useEffect(() => {
       const token = localStorage.getItem('token')
       if(token){
           getUser(token)
       }
    }, [])

    const getUser = async (token) => {
        const { url, options } = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        console.log(json)
    }

    const handleSubmit =  async (e) => {
       e.preventDefault()

       if(username.validate() && password.validate()){
           const { url, options } = TOKEN_POST({
               username: username.value,
               password: password.value
           })

           const response = await fetch(url, options)
           const json = await response.json()
           localStorage.setItem('token', json.token)
           getUser(json.token)
       }
    
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <Input 
                label="Username" 
                name="username" 
                type="text" 
                {...username}
                />
                <Input label="Senha" name="password" type="password" {...password} />
                <Button> Entrar </Button>
            </form>
            <Link to="/login/criar" >Cadastro</Link>
        </section>
    )
}

export default LoginForm
