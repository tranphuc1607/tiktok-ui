import { useEffect, useState } from 'react';

import ListAccountItem from './ListAccountItem/ListAccountItem';
import { baseAccount } from './baseAccount';

function SidebarBetweenWhenLogged() {
    const [spaceArray, setSpaceArray] = useState(9);
    const [newList, setNewList] = useState([]);
    const [showLoad, setShowLoad] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setNewList(baseAccount.filter((account) => account.id < spaceArray));
        }, 700);
        return () => clearTimeout(timeOut);
    }, [spaceArray]);

    const handlOnclick = () => {
        if (spaceArray < baseAccount.length) {
            setSpaceArray((prev) => prev + 7);
        }
        setShowLoad(true);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (showLoad) {
                setShowLoad(false);
            }
        }, 700);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showLoad]);

    return (
        <div className="mt-[8px] pb-[16px] w-[224px] flex flex-col items-start">
            <div className="w-[208px] h-[1px] ml-[8px] bg-backGround mb-[15px]"></div>
            <div className="w-full h-[18px] px-[8px] text-[14px] mb-[8px] font-semibold text-colorLetterBold1">
                Following accounts
            </div>
            {newList.map((list) => (
                <ListAccountItem img={list.img} key={list.id} useName={list.useName} name={list.name} />
            ))}
            {(showLoad || newList.length === 0) && (
                <div className="w-full flex items-center py-[8px] px-[8px] h-[60px] rounded-[5px] animate-fading">
                    <div className="w-[32px] h-[32px] bg-backGround rounded-full mr-[12px]"></div>
                    <div className="flex h-full flex-col flex-1 justify-between">
                        <div className="bg-backGround w-[130px] h-[15px] rounded-[10px]"></div>
                        <div className="bg-backGround w-[100px] h-[15px] rounded-[10px]"></div>
                    </div>
                </div>
            )}
            <button
                onClick={handlOnclick}
                className="text-[#fe2c55] mt-[8px] h-[18px] w-[78.5px] leading-[18px] font-semibold text-[14px]"
            >
                See more
            </button>
        </div>
    );
}

export default SidebarBetweenWhenLogged;
