import React, { useState } from 'react'
import Wish_context from './Context'

const WishProviderContext = ({ children }) => {
    const [wishData, setWishData] = useState([])
    const [cartData, setCartData] = useState([])

    return (
        <div>
            <Wish_context.Provider value={{ wishData, setWishData, cartData, setCartData }}>
                {children}
            </Wish_context.Provider>
        </div>
    )
}

export default WishProviderContext