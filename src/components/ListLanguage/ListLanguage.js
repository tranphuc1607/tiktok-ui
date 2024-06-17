import Menu2 from "../Menu2/Menu2";
import { HeaderNotLoggedIconClose } from "~/asset/fileSVG/SVG";
import { useState , useEffect} from "react";
import { listLanguages , baseMenu2 } from "../../Layout/components/header/HeaderNotLogged/baseMenu2";

import LanguageItem from "../LanguageItem/LanguageItem"

function ListLanguages({ setCheckShowMenuOfLanguages , setElementFirst }) {
    const [selectedIems , setSelectedIem] = useState(localStorage.getItem("languageFirst") || 'English')
    const [newList, setNewList] = useState(listLanguages)
    
    useEffect(() => {
        setElementFirst(selectedIems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedIems])

    
    useEffect(() => {
        const list = [...newList]
        const lists = list.filter(list => {
            return list !== selectedIems
        })
        setNewList(lists)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newList])

    const handlOnClick = (language) => { 
        localStorage.setItem("languageFirst",language);
        setSelectedIem(language)
        };

    return ( 
        <Menu2 Menu3Language>
            <div  className='w-[223px] h-[640px] bg-white rounded-[10px] flex flex-col'>
                <div className="w-full h-[50px] flex items-center justify-start">
                    <div onClick={() => setCheckShowMenuOfLanguages(false)} className="w-[21px] h-[21px] leading[21px] mr-[26.81px] ml-[28px] font-semibold text-[20px]">
                        <HeaderNotLoggedIconClose/>
                    </div>
                    <div className="w-[74px] h-[21px] text-[18px] text-[rgba(22,24,35)] leading-[21px] font-semibold">Language</div>
                </div>
                <div className="w-full flex-1 overflow-y-auto overflow-x-visible overscroll-contain">
                    <LanguageItem itemFirst content={selectedIems} />
                    {
                        newList.map((language , index) => {
                            return <LanguageItem  key={index} setCheckShowMenuOfLanguages = {setCheckShowMenuOfLanguages}  onClick={() => handlOnClick(language)}  content = {language}/>
                        })
                    }
                </div>
            </div>
        </Menu2>
     );
}

export default ListLanguages;