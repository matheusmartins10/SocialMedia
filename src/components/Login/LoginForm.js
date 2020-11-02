import React, {useState, useEffect, useContext} from 'react'

import { Link } from 'react-router-dom'

import Input from '../Form/Input'
import Button from '../Form/Button'

import { UserContext } from '../../contexts/UserContext'

import useForm from '../../hooks/useForm'

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = useContext(UserContext)

    const handleSubmit =  async (e) => {
       e.preventDefault()

       if(username.validate() && password.validate()){
           userLogin(username.value, password.value)
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
                {loading ? (
                    <Button disabled > Carregando... </Button>
                ) : (
                    <Button> Entrar </Button>
                )}
                {error && <p> {error} </p>}
            </form>
            <Link to="/login/criar" >Cadastro</Link>
        </section>
    )
}

export default LoginForm
