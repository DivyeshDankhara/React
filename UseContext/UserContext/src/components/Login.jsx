import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const [userName , setUserName] = useState('')
    const [password  ,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
        setUser({userName , password})
    }

  return (
    <div className='container mx-auto'>
      <input className='border border-black' type="text" placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input className='border border-black' type="password" placeholder='Password' name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit} className='btn'>Submit</button>
    </div>
  )
}

export default Login