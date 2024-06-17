import style from "./IconItem.module.scss"
import classNames from "classnames/bind"
import { useEffect ,useState} from "react"


const cx = classNames.bind(style)


function IconItem({name , Icon , value}) {
    const[onclickIcon ,setOnclickIcon ] = useState(false)

    const classWrapIcon = cx("backGroundDefaultOfIcon",{
        changeBackGround : onclickIcon,
    })

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if(onclickIcon) {
                setOnclickIcon(false)
            }
        },200)
        return () => clearTimeout(timeOut)
    }, [onclickIcon])

    return ( 
        <div  className="w-[48px] h-[83px]">
            <div onClick={() => setOnclickIcon(true)} className={classWrapIcon}>
                <Icon/>
            </div>
            <div className="w-full text-center select-none">{value}</div>
        </div>
     );
}

export default IconItem;