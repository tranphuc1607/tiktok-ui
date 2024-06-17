import style from"./ButtonDarkMode.module.scss"
import classNames from "classnames/bind"
import { useState } from "react";


const cx = classNames.bind(style)

function ButtonDarkMode() {
    const [buttonDarkMode , setButtonDarkMode] =useState(false)

    const handlOnClick = () => {
        
        return setButtonDarkMode(!buttonDarkMode)
    }

    return ( 
            <label onClick={handlOnClick}  className={cx('toggle',{buttonDarkMode})}></label>
     );
}

export default ButtonDarkMode;