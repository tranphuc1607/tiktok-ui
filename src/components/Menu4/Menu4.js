import { Fragment } from 'react';

import Button from '../Button';
import { Menu4IconTickGreen } from '~/asset/fileSVG/SVG';
import WrapMenuHasBackGround from '../WrapMenuHasBackGround/WrapMenuHasBackGround';

function Menu4({clickMenu3Item , setClickButtonDone }) {
    if(clickMenu3Item) {
        document.body.style.overflow = 'hidden';
    };

    return ( 
        <WrapMenuHasBackGround >
            <Fragment>
                <div className="w-[400px] h-[344px] bg-white rounded-[5px] flex items-end">
                    <div className='flex items-center justify-between flex-col gap-[24px] pb-[32px] w-full h-[312px] bg-transparent'>
                        <div className='w-[72px] h-[72px] px-[20px] py-[25px] bg-backGroundIconMenu4 rounded-100'>
                            <Menu4IconTickGreen/>
                        </div>
                        <div className='w-full h-[114px] flex items-center justify-center flex-col gap-[16px] px-[32px] '>
                            <div className='text-fontLabelReprot text-[#161823] h-[32px] w-full text-center'>Thanks for reporting</div>
                            <div className='text-center w-full h-[66px] text-[rgba(22, 24, 35, 0.75)] text-[16px]'>We'll review your report and if there is a violation of our Community Guidelines, we’ll take appropriate action.</div>
                        </div>
                        <div className='px-[32px] h-[46px] w-full'>
                            <Button onClick={() => setClickButtonDone(true)} buttonDone>Done</Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        </WrapMenuHasBackGround>
     );
}

export default Menu4;