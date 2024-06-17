import classNames from "classnames";
import { useContext , useEffect } from "react";

import { Valiable } from "~/App";
import WrapMenuHasBackGround from "../WrapMenuHasBackGround/WrapMenuHasBackGround";
import { KeyBoardShotCutIcon1 , KeyBoardShotCutIcon2 , KeyBoardShotCutIcon3 , KeyBoardShotCutIcon4 , KeyBoardShotCutIconClose } from "~/asset/fileSVG/SVG";


function KeyboardShotcuts(checkClickKeyboardShotcut) {
    const value = useContext(Valiable)
    if(checkClickKeyboardShotcut) {
        document.body.style.overflow = 'hidden';
    }
      
    const classWraper = classNames("relative flex flex-col items-center pt-[40px] px-[32px] pb-[32px] bg-[#ffffff] rounded-[10px] w-[400px] h-[280px] animate-fadeIn" , 
        {"animate-fadeOut" : (value.iconClose === true)}
    )

    return ( 
        <WrapMenuHasBackGround>
            <div className={classWraper}>
                <div className="w-full h-[22px] text-[#161823] text-[24px] font-bold text-center leading-[22px] mb-[16.8px]">Keyboard shortcuts</div>
                <div className="w-full">
                    <div className="flex items-center justify-between w-full h-[40px] border-t">
                        <span>Go to previous video</span>
                        <div>
                            <KeyBoardShotCutIcon1/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full h-[40px] border-t">
                        <span>Go to next video</span>
                        <div>
                            <KeyBoardShotCutIcon2/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full h-[40px] border-t">
                        <span>Like video</span>
                        <div>
                            <KeyBoardShotCutIcon3/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full h-[40px] border-t border-b">
                        <span>Mute / unmute video</span>
                        <div>
                            <KeyBoardShotCutIcon4/>
                        </div>
                    </div>
                </div>
                <div onClick={() => value.setIconClose(true)} className="absolute top-[18px] right-[18px] w-[24px] h-[24px] rounded-full bg-backGround flex items-center justify-center">
                    <KeyBoardShotCutIconClose/>
                </div>
            </div>
        </WrapMenuHasBackGround>
     );
}

export default KeyboardShotcuts;