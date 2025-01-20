import React from 'react'
import { useState } from 'react'
import Wishlist from './Context'

const ContextProvider = ({children}) => {

    const [wishData , setWishData] = useState([]);

  return (
    <div>
        <Wishlist.Provider value={{wishData , setWishData}}>
            {children}
        </Wishlist.Provider>
    </div>
  )
}

export default ContextProvider
