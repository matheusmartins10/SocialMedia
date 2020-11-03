import React, {useState, useEffect, useContext} from 'react'

import { Link } from 'react-router-dom'

import Error from '../Helper/Error'

import styles from './LoginForm.module.css'

import stylesBtn from '../Form/Button.module.css'

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
        <section className="animeLeft" >
            <h1 className="title" >Login</h1>
            <form  className={styles.form} onSubmit={handleSubmit} >
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
                <Error error={error} />
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
               Perdeu a Senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle} >Cadastre-se</h2>
                <p>Ainda não possui conta ? Cadastre-se no site.</p>
                <Link  className={stylesBtn.button}  to="/login/criar" >Cadastro</Link>
            </div>
           
        </section>
    )
}

export default LoginForm
