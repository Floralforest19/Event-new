import React from 'react'
import LoginForm from '../components/LoginForm';

export default function LoginPage({token, setToken}) {
    return (
        <div>
            <h1>Event app </h1>
            <LoginForm token={token} setToken={setToken} />
        </div>
    )
}
