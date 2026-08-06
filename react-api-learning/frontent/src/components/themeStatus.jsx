import { useContext } from "react";
import themeContext from "../context/themeContext";

function ThemeStatus(){
    const {theme} = useContext(themeContext)
    return(
        <h1>Current Theme is {theme}</h1>
    )
}

export default ThemeStatus