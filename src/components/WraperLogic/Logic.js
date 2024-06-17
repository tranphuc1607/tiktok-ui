import { useEffect } from "react";

  export function useCustomEffect1(clickIconCloseInMenu3 , setClickMenu2Item , setClickIconCloseInMenu3) {
    useEffect(() => {
      const setInterval =   setTimeout(() => {
         if(clickIconCloseInMenu3) {
           setClickMenu2Item(false);
           setClickIconCloseInMenu3(false);
         };
       },300);
       return () => clearInterval(setInterval);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[clickIconCloseInMenu3]);
  };

  export function useCustomEffect2(clickButtonDone , setClickMenu2Item  ,setClickButtonDone , setClickMenu3Item) {
    useEffect(() => {
       const setInterval =  setTimeout(() => {
          if(clickButtonDone) {
            setClickMenu2Item(false);
            setClickButtonDone(false);
            setClickMenu3Item(false);
          }
        },600);
       return () => clearInterval(setInterval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[clickButtonDone]);
  };

  export function useCustomEffect3 (iconClose , setCheckClickKeyboardShotcut , setIconClose) {
    useEffect(() => {
      const timeOut = setTimeout(() => {
              if(iconClose) {
                  setCheckClickKeyboardShotcut(false);
                  setIconClose(false);
              }
          },400);
          return () => clearTimeout(timeOut);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[iconClose]);
  };
