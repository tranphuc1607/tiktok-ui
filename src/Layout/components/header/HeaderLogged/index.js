import classNames from "classnames/bind";
import style from './HeaderLogged.module.scss'

import HeaderDifferent from "../HeaderDifferent/index";
import { HeaderLoggedMessage , HeaderLoggedInbox } from "~/asset/fileSVG/SVG";


const cx = classNames.bind(style)


function HeaderItemForLogged() {
    return ( 
        <div>
            <div className={cx("wraper")}>
                <HeaderDifferent />
                <div className={cx("wrap-listOptions")}>
                    <div className={cx("listOption-Messages")}>
                        <HeaderLoggedMessage/>
                    </div>
                    <div className={cx("listOption-Inbox")}>
                        <HeaderLoggedInbox/>
                        <div className={cx("listOption-Inbox--item1")}></div>
                        <div className={cx("listOption-Inbox--item2")}></div>
                    </div>
                    <div className={cx("listOption-Representativ-Image")}>
                        <img className={cx('img-header')} src="" alt="lỗi" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HeaderItemForLogged;