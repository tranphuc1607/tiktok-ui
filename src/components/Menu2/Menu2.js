import { useState } from "react"
import style from "./Menu2.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(style)


function Menu2({location,children , arrow}) {
    let top =  false
    let bottom = false
    let right = false
    let left =  false
    const [isArrow , setIsArrow] = useState(true)

    if(arrow) {
        setIsArrow(arrow)
    }
    
    switch (location) {
        case "bottom":
            bottom = true
        break
        case "top":
            top = true
        break
        case "right":
            right = true
        break
        case "left":
            left = true
        break
        default :
            console.log("lỗi")
    }

    const className = cx('wraper',{
        bottom,
        top,
        right,
        left
    })
    return ( 
        <div className={className}>
            {children}
            {isArrow && 
                <div className="arrowSvg">
                    
                </div>
            }
        </div>
     );
}

export default Menu2;