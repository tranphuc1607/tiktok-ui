import { useState, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import style from './HeaderSearch.module.scss';
import Wraper from '~/components/Proper/Wraper';
import ProperItem from '~/components/WraperItem';
import { arrInfo } from './baseInfo';
import { Valiable } from '~/App';
import { HeaderSearchIconDelete } from '~/asset/fileSVG/SVG';

const cx = classNames.bind(style);

function HeaderSearch() {
    const value = useContext(Valiable);
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isShowResult, setIsShowResult] = useState(true);
    const inputSearch = useRef();
    const iconSearch = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);

    const handlOnclickIconDelete = () => {
        setValueInput('');
        inputSearch.current.focus();
    };

    const handlOutside = () => {
        setIsShowResult(false);
    };

    // if(handlOnClick) {

    // }
    return (
        <Tippy
            interactive={true}
            arrow={false}
            onClickOutside={handlOutside}
            // trigger = "manual"
            visible={isShowResult && searchResult.length > 0 && !value.clickMenu2Item && !value.clickMenu3Item}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Wraper>
                        <p className={cx('account-label')}>Accounts</p>
                        {arrInfo.map((arr) => (
                            <ProperItem
                                key={arr.id}
                                check={arr.checkBlue}
                                img={arr.img}
                                name={arr.name}
                                useName={arr.usename}
                            />
                        ))}
                    </Wraper>
                </div>
            )}
        >
            <div className={cx('wrap-headerSearch')}>
                <div className={cx('wrap-headerSearch-Input')}>
                    <input
                        ref={inputSearch}
                        onChange={(e) => setValueInput(e.target.value)}
                        onFocus={() => setIsShowResult(true)}
                        value={valueInput}
                        className={cx('headerSearch-Input')}
                        placeholder="Search"
                        type="text"
                    />
                    {!!valueInput && (
                        <div onClick={handlOnclickIconDelete} className={cx('icon-delete')}>
                            <HeaderSearchIconDelete />
                        </div>
                    )}
                </div>
                <div className={cx('headerSearch-borderBetween')}></div>
                <button ref={iconSearch} className={cx('headerSearch-buttonSearch')}>
                    <svg
                        className={cx('buttonSearch-svg')}
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 48 48"
                        fill="rgba(22, 24, 35, .34)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </Tippy>
    );
}

export default HeaderSearch;
