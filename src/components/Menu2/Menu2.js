import { useEffect, useState } from "react";
import style from "./Menu2.module.scss";
import classNames from "classnames/bind";
import { Menu2Arrow } from "~/asset/fileSVG/SVG";

const cx = classNames.bind(style);


function Menu2({menu2InSearchResult,Menu2InList,checkBlur,Menu3Language,children , arrow}) {
    const [isArrow , setIsArrow] = useState(true); 

    useEffect(() => {
        if(arrow === false) {
            return setIsArrow(false);
        };
    },[arrow]);

    const className = cx('wraper',{
        menu2InSearchResult,
        Menu2InList,
        checkBlur,
        Menu3Language,
    })

    return ( 
        <div className={className}>
            {children}
            {isArrow && 
                <div className={cx("arrowSvg")}>
                    <Menu2Arrow />
                </div>
            }
        </div>
     );
}

export default Menu2;