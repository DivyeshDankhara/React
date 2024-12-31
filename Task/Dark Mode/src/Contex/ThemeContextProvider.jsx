import ThemeContext from "./ThemeContex";
import { useState } from "react";

const ThemeContextProvider = ({children}) => {

    const [theme , setTheme] = useState()
    const [value , setValue] = useState(false)

    return(
        <div>
            <ThemeContext.Provider value={{setTheme , value , setValue}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeContextProvider