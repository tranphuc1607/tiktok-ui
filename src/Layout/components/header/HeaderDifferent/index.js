import style from './HeaderDifferent.module.scss'
import classNames from "classnames/bind";

import { HeaderDifferentIconUpload } from '~/asset/fileSVG/SVG';

const cx = classNames.bind(style)

function HeaderDifferent() {
    return ( 
        <div className={cx("wrap-buttonUpload")}>
                <div className={cx("icon-upload")}>
                    <HeaderDifferentIconUpload/>
                </div>
                <div className={cx('letter-upload')}>
                    Upload
                </div>
        </div>
     );
}

export default HeaderDifferent;