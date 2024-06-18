import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';
import { createContext, useState, useEffect } from 'react';

import style from './HeaderShared.module.scss';
import HeaderSearch from '../HeaderSearch';
import Button from '~/components/Button';
import { HearderShareIconLogo } from '~/asset/fileSVG/SVG';

const cx = classNames.bind(style);
export const HeaderSearchContext = createContext();

function HeaderShared({ Layout }) {
    const [checkOnClickMenu2Item2, setCheckOnclickMenu2Item2] = useState(false);
    const [Transform, setTransform] = useState(false);
    const [deleteWhenOnclickMenu2Item2, setDeLeteWhenOnclickMenu2Item2] = useState(true);

    const handlOnclick = () => {
        return setCheckOnclickMenu2Item2(true);
    };

    useEffect(() => {
        if (checkOnClickMenu2Item2) {
            setTransform(true);
            setDeLeteWhenOnclickMenu2Item2(false);
        }
    }, [checkOnClickMenu2Item2]);

    useEffect(() => {
        const transformTimeOut = setTimeout(() => {
            if (Transform) {
                setTransform(false);
                setCheckOnclickMenu2Item2(false);
            }
        }, 1500);
        return () => clearTimeout(transformTimeOut);
    }, [Transform]);

    return (
        <HeaderSearchContext.Provider
            value={{
                handlOnclickMenu2Item2: handlOnclick,
                deleteMenu2WhenClickMenu2Item2: deleteWhenOnclickMenu2Item2,
                setDeleteMenu2: setDeLeteWhenOnclickMenu2Item2,
            }}
        >
            <div className={cx('wraper')}>
                <Link to={'/'} className={cx('wrap-header-logo')}>
                    <HearderShareIconLogo />
                </Link>
                <HeaderSearch />
                <div>{<Layout />}</div>
                {checkOnClickMenu2Item2 && (
                    <Button Transform={Transform} feedBackBox>
                        Thank you for your feedback
                    </Button>
                )}
            </div>
        </HeaderSearchContext.Provider>
    );
}

export default HeaderShared;
