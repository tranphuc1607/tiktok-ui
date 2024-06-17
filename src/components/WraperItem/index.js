import {useState , useContext} from "react"

import style from"./ProperItem.module.scss"
import classNames from "classnames/bind"

import Menu2 from "../Menu2/Menu2"
import { Valiable } from "~/App"
import { HeaderSearchContext } from "../../Layout/components/header/HeaderShared"
import { WraperItemIconList , WraperItemTickBlue} from "~/asset/fileSVG/SVG"


const cx = classNames.bind(style)

function ProperItem({...props}) {
    const value = useContext(Valiable)
    const handlOnClickItem2 = useContext(HeaderSearchContext)
    const [hoverIconList , setHoverIconList] = useState(false)
    const [hoverMenu2,setHoverMenu2] = useState(false)

    const IconTiker = () => {
        if(props.check) {
            return <div className= {cx('iconTicket')}>
                <WraperItemTickBlue/>
            </div>
        }
    }

    const handlMouseEnter = () => {
        if(handlOnClickItem2.setDeleteMenu2) {
            handlOnClickItem2.setDeleteMenu2(true)
        }
        return setHoverIconList(true)
    }

    const handlMouseLeave = () => {
      return  setTimeout(() => setHoverIconList(false),3000)
    }
    clearTimeout(handlMouseLeave)

    const handlMouseLeaveMenu2 = () => {
        return setTimeout(() => setHoverMenu2(false),3000)
    }
    clearTimeout(handlMouseLeaveMenu2)

    return (
        <div  className={cx('wraper')}>
                <img  className={cx('img')} src={props.img} alt={props.name} />
                <div className={cx('wraper-item')}>
                    <div className={cx('wrap-nameandUserName')}>
                        <div className={cx('wrapName')}>
                            <h4 className="name">{props.name}</h4>
                            <IconTiker classNames = {cx('iconTicket')}/>
                        </div>
                        <p className={cx('usename')}>{props.useName}</p>
                    </div>
                    <div onMouseEnter={handlMouseEnter} onMouseLeave={handlMouseLeave} className={cx('iconList')}>
                        <WraperItemIconList/>
                        {((hoverIconList || hoverMenu2) && handlOnClickItem2.deleteMenu2WhenClickMenu2Item2) &&
                            <Menu2 menu2InSearchResult>
                                <div onMouseEnter={() => setHoverMenu2(true)} onMouseLeave={handlMouseLeaveMenu2} className={cx('warperMenu2')}>
                                    <div onClick={() => value.setClickMenu2Item(true)} className={cx('Menu2-Item')}>
                                        <div className={cx("Menu2-Item--icon")}>
                                            <svg className={cx('handlHover')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"/>
                                            </svg>
                                        </div>
                                        <p className={cx('Menu2-Item--Letter')}>Report</p>
                                    </div>
                                    <div onClick={handlOnClickItem2.handlOnclickMenu2Item2} className={cx('Menu2-Item')}>
                                        <div className={cx('Menu2-Item--icon')}>
                                            <svg  className={cx('handlHover')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z"/>
                                            </svg>
                                        </div>
                                        <p className={cx('Menu2-Item--Letter')}>
                                            Mark as irrelevant
                                        </p>
                                    </div>
                                </div>
                            </Menu2>
                        }
                    </div>
                </div>
        </div>
    )
}

export default ProperItem;
