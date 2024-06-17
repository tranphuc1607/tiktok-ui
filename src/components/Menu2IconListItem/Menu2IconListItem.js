import {useRef , useContext} from 'react';
import style from './Menu2IconListItem.module.scss';
import classNames from 'classnames/bind';

import ButtonDarkMode from "../ButtonDarkMode/ButtonDarkMode";
import { Valiable } from '~/App';

const cx = classNames.bind(style);

function Menu2IconListItem( { Icon , tital , buttonDarkMode , setCheckShowMenuOfLanguages , elementFirst} ) {
    const LanguageDOM = useRef();
    const value = useContext(Valiable);

    const handlOnclick = () => {
        if(LanguageDOM.current.innerText === elementFirst) {
            setCheckShowMenuOfLanguages(true);
        }
        if(LanguageDOM.current.innerText === "Keyboard shortcuts") {
            value.setCheckClickKeyboardShotcut(true);
        }
    }

    const wraper = cx('wraper',{});
    const icon = cx('icon',{});
    const Tital = cx('tital',{});

    return ( 
        <div ref = {LanguageDOM} onClick={handlOnclick} className={wraper}>
            <div className={icon}>
                <Icon/>
            </div>
            <span className={Tital}>
                {tital}
            </span>
            {buttonDarkMode && 
                <ButtonDarkMode/>
            }
        </div>
     );
}

export default Menu2IconListItem;