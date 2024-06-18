import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import HeaderShared from '../components/header/HeaderShared';
import Sidebar from '../components/sidebar';
import HeaderItemForLogged from '../components/header/HeaderLogged';
import HeaderItemForNotLogged from '../components/header/HeaderNotLogged';
import Button from '~/components/Button';
import { ButtonToTop } from '~/asset/fileSVG/SVG';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    const classWrapGetApp = cx('checkScroll', {
        checkScrollWhenOnClick: isVisible,
    });
    useEffect(() => {
        const handlScrollTop = () => {
            if (window.scrollY) {
                return setIsVisible(true);
            } else {
                return setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handlScrollTop);
        return () => window.removeEventListener('scroll', handlScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="w-full">
            <HeaderShared Layout={HeaderItemForNotLogged} />
            <div className="wrapContainer w-full">
                <Sidebar />
                <div className="w-container ml-[240px] mt-[60px]">{children}</div>
                <div className={classWrapGetApp}>
                    <Button buttonGetApp>Get app</Button>
                    <div
                        onClick={scrollToTop}
                        className="w-[32px] h-[32px] rounded-full bg-backGrounColorRed flex items-center justify-center"
                    >
                        <ButtonToTop />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
