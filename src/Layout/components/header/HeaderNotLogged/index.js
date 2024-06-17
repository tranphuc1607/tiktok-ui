import classNames from "classnames/bind";
import { useState , useEffect , useContext} from 'react';

import style from './HeaderNotLogged.module.scss';
import HeaderDifferent from "../HeaderDifferent/index";
import Button from "~/components/Button/index";
import Menu2 from '~/components/Menu2/Menu2';
import { HeaderItemForNotLoggedIcon} from '~/asset/fileSVG/SVG';
import Menu2IconListItem from "~/components/Menu2IconListItem/Menu2IconListItem";
import { baseMenu2} from "./baseMenu2";
import ListLanguages from "~/components/ListLanguage/ListLanguage";
import { Valiable } from "~/App";


const cx = classNames.bind(style);

function HeaderItemForNotLogged() {
    const value = useContext(Valiable)
    const [checkShow , setCheckShow] = useState(false);
    const [checkBlur , setCheckBlur] = useState(false);
    const [checkShowMenuOfLanguages , setCheckShowMenuOfLanguages] = useState(false);
    const [elementFirst , setElementFirst] = useState(localStorage.getItem("elementFirst") ||'English');

    const handlMouseEnter = () => {
        setCheckBlur(false);
        setCheckShow(true);
    }
    const handlMouseLeave = () => {
        if(value.checkClickKeyboardShotcut) {
            return setCheckBlur(false);
        }
        else {
            return setCheckBlur(true);
        };
    };

    useEffect(() => {
        const checkDelete = setTimeout(() => {
            if(checkBlur) { 
                setCheckShow(false);
            }},1900);
        return () => clearTimeout(checkDelete);
    },[checkBlur]);

    useEffect(() => {
        const checkDelete = setTimeout(() => {
            if(checkBlur) { 
                setCheckShowMenuOfLanguages(false);
            }},1500);
        return () => clearTimeout(checkDelete);
    },[checkBlur]);

    baseMenu2[1].tital = elementFirst;
    localStorage.setItem("elementFirst" , elementFirst);

    return ( 
        <div className={cx("wraper")}>
            <HeaderDifferent/>
            <Button buttonLogin = {true}>
                Log in
            </Button>
            <div onMouseEnter={handlMouseEnter}  onMouseLeave={handlMouseLeave}  className={cx("icon-list")}>
                <HeaderItemForNotLoggedIcon/>
                {(checkShow || value.checkClickKeyboardShotcut) &&
                    <Menu2 checkBlur = {checkBlur} Menu2InList>
                        <div onMouseEnter={handlMouseEnter} onMouseLeave={handlMouseLeave} className='w-[223px] h-[224px] bg-white py-[8px] rounded-[10px] relative'>
                            {
                                baseMenu2.map(item => <Menu2IconListItem elementFirst={elementFirst}   key={item.id} Icon = {item.icon}  setCheckShowMenuOfLanguages={setCheckShowMenuOfLanguages} buttonDarkMode={item.buttonDarkMode} tital = {item.tital}/>)
                            }
                            {checkShowMenuOfLanguages && 
                                <ListLanguages setElementFirst={setElementFirst} setCheckShowMenuOfLanguages = {setCheckShowMenuOfLanguages}/>
                            }
                        </div>
                    </Menu2>
                }
            </div>
        </div>
     );
}

export default HeaderItemForNotLogged;