import React from 'react'
import './index.css'
import Third from './Componets/Third'
import AuthProvider from './Context/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Third />
      </AuthProvider>
    </div>
  )
}

export default App
