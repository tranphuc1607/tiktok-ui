import { useState } from 'react';

export function useCustomState() {
    const [clickMenu2Item, setClickMenu2Item] = useState(false);
    const [clickMenu3Item, setClickMenu3Item] = useState(false);
    const [clickIconCloseInMenu3, setClickIconCloseInMenu3] = useState(false);
    const [clickButtonDone, setClickButtonDone] = useState(false);
    const [checkClickKeyboardShotcut, setCheckClickKeyboardShotcut] = useState(false);
    const [iconClose, setIconClose] = useState(false);

    return {
        clickMenu2Item,
        setClickMenu2Item,
        clickMenu3Item,
        setClickMenu3Item,
        clickIconCloseInMenu3,
        setClickIconCloseInMenu3,
        clickButtonDone,
        setClickButtonDone,
        checkClickKeyboardShotcut,
        setCheckClickKeyboardShotcut,
        iconClose,
        setIconClose,
    };
}
