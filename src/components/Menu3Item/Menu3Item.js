import style from './Menu3Item.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { Valiable } from '~/App';
import { Menu3ItemArrow } from '~/asset/fileSVG/SVG';

const cx = classNames.bind(style);

function Menu3Item({ children }) {
    const value = useContext(Valiable);

    return (
        <div onClick={() => value.setClickMenu3Item(true)} className={cx('wraper-Menu3Item')}>
            <div className={cx('Menu3Item-letter')}>{children}</div>
            <div className={cx('Menu3Iem-arrow')}>
                <Menu3ItemArrow />
            </div>
        </div>
    );
}

export default Menu3Item;
