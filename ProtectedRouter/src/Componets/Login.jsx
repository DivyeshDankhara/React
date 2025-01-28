import React from 'react'
import { useAuth } from '../Context/AuthContext'

const Login = () => {

    const { setIsAuth, isAuth } = useAuth();

    return (
        <div>
            <h1 className='heading'>This is Login Page Componenets</h1>
            {
                isAuth ? <button className='btn' onClick={() => setIsAuth(false)}>Logout</button> :
                    <button className='btn' onClick={() => setIsAuth(true)}>Login</button>
            }
        </div>
    )
}

export default Login