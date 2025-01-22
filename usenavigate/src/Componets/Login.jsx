import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {

    const navigate = useNavigate()

    // const redirect = () => {
    //     navigate('/')
    // }

    // const redirect = (id) => {
    //     navigate(`/carrer/${id}`)
    // }

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])



    return (
        <div>
            <h1 className='heading'>This is Login Page Componenets</h1>
            {/* <button onClick={redirect} className='btn'>Home Page</button> */}
            {/* <button className='btn' onClick={() => redirect(1)}>User 1</button>
            <button className='btn' onClick={() => redirect(2)}>User 2</button> */}
        </div>
    )
}

export default Login