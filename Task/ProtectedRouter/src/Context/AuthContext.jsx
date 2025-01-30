import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false)

  const [user , setUser] = useState([])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider

export const useAuth = () => useContext(AuthContext)