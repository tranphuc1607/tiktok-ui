import style from "./Proper.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(style)

function Wraper({children}) {
    return ( 
            <div className={cx("wraper")}>
                {children}
            </div>
     );
}

export default Wraper;