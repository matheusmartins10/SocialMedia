import React, {useContext} from 'react'

import Input from '../Form/Input'
import Button from '../Form/Button'

import useForm from '../../hooks/useForm'

import { USER_POST } from '../../api'

import { UserContext } from '../../contexts/UserContext'

const LoginCreate = () => {

    const username = useForm()
    const email = useForm('email')
    const password = useForm('password')

    const { userLogin } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const response = await fetch(url, options)
        console.log(response)
        
        if(response.ok) userLogin(username.value, password.value)

    }

    return (
        <section className="animeleft">
            <h1 className="title" >Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="E-mail" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />

                <Button>Cadastrar</Button>
            </form>
        </section>
    )
}

export default LoginCreate
