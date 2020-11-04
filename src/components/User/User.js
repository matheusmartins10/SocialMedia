import React from 'react'
import { UserContext } from '../../contexts/UserContext'

import UserHeader from './UserHeader'

const User = () => {
    return (
        <section className="container">
            <UserHeader />
        </section>
    )
}

export default User
