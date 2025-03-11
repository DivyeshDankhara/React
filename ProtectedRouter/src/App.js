import React from 'react'
import './index.css'
import Third from './Componets/Third'
import AuthProvider from './Context/AuthContext'

const App = () => {
  return (
    <div>
      <h1>API Key:{process.env.REACT_APP_API_KEY}</h1>
      <AuthProvider>
        <Third />
      </AuthProvider>
    </div>
  )
}

export default App
