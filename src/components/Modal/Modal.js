import classNames from 'classnames/bind';

import style from './Modal.module.scss';
import Menu3Item from '../Menu3Item/Menu3Item';
import {listReport} from './baseListReport';
import { ModalIconClose } from '~/asset/fileSVG/SVG';
import WrapMenuHasBackGround from '../WrapMenuHasBackGround/WrapMenuHasBackGround';

const cx = classNames.bind(style);

function Modal({clickMenu2 , setClickIconCloseInMenu3 , onClickMenu3Item}) {
    if(clickMenu2) {
        document.body.style.overflow = 'hidden';
    }
    return (
        <WrapMenuHasBackGround>
            <div className={cx('container')}>
                <div className={cx('fixed-box')}>
                        <h4 className={cx('boxMenu3-fixed-label')}>Report</h4>
                        <div onClick={() => setClickIconCloseInMenu3(true)} className={cx('boxMenu3-fixed__icon')}>
                            <ModalIconClose/>
                        </div>
                </div>
                <div className={cx('scrollable-box')}>
                    <p className={cx('boxMenu3-container-label')}>Please select a scenario</p>
                    {
                        listReport.map((report,index) => <Menu3Item onClickMenu3Item = {onClickMenu3Item}  key={index}>{report}</Menu3Item>)
                    }
                </div>
            </div>
        </WrapMenuHasBackGround>
    )
}

export default Modal;