import style from "./Sidebar.module.scss"
import classNames from "classnames/bind";
import { useState } from "react";

import ListOptionsItem from "./ListOptionsItem/ListOptionsItem";
import { base } from "./ListOptionsItem/base"
import SidebarBetweenWhenNotLogged from "./SidebarBetweenWhenNotLogged/SidebarBetweenWhenNotLogged";
import SidebarBetweenWhenLogged from "./SidebarBetweenWhenLogged/SidebarBetweenWhenLogged";
import { SidebarIconArrow } from "~/asset/fileSVG/SVG";

const cx = classNames.bind(style)

function Sidebar() {
    const [hoverSidebar , setHoverSidebar] = useState(false)
    const classWrap = cx("w-[240px] fixed h-hasContainer flex flex-col items-start justify-start bg-transparent overflow-y-auto overscroll-y-none mt-[60px] pt-[20px] pl-[8px] pb-[26px] z-0" , 
        {
            customScrollBarInHover : hoverSidebar,
            customScrollBar : true,
        });
    const [checkOnClickItem , setCheckOnClickIem] = useState(0)
    const [checkOnclickShow , setCheckOnclickShow] = useState(false)

    
// nếu đăng nhập vào thì mất show more ở phần cuối 
// not logged : w-443 có show more
// logged : w-405 mất show more

    return ( 
        <div onMouseEnter={() => setHoverSidebar(true)} onMouseLeave={() =>setHoverSidebar(false)}  className={classWrap}>
            {base.map(item => <ListOptionsItem setCheckOnClickIem = {setCheckOnClickIem} key = {item.id} id = {item.id}  onclick={item.id === checkOnClickItem} Icon = {item.icon} tital = {item.tital}/>)}
            <SidebarBetweenWhenLogged/>
            <div className="w-[224px] pl-[8px] flex flex-col items-start justify-center z-0">
                <div className="w-[208px] h-[1px] bg-backGround mb-[15px]"></div>
                <div className="relative w-[208px] h-[52px]">
                    <img className="absolute z-0 top-0 left-0" src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" alt="lỗi" />
                    <h4 className="absolute top-[10px] right-[17px] text-[#fff5c9] z-10 w-[141px] h-[32px] text-[13px] leading-[16px] font-bold">Creater Tiktok effects, get a reward</h4>
                </div>
                <div className="w-[216px] mt-[28px] flex flex-col items-start cursor-default">
                    <div className="w-[216px] h-[45px] flex flex-col">
                        <h4 className="w-full h-[22px] text-start text-colorLetterBold1 font-bold text-[15px] leading-[22px]">Company</h4>
                        <div className="flex w-full h-[23px] font-semibold text-[12px] text-colorLetterBold1 items-end gap-[6px] ">
                            <a href="/tiktok" className="cursor-default hover:underline">About</a>
                            <a href="/tiktok"className="cursor-default hover:underline">NewSroom</a>
                            <a href="/tiktok"className="cursor-default hover:underline">Contact</a>
                            <a href="/tiktok"className="cursor-default hover:underline">Careers</a>
                        </div>
                    </div>
                    <div className="w-[216px] mt-[15px] h-[113px] flex flex-col">
                        <h4 className="w-full h-[22px] text-start text-colorLetterBold1 font-bold text-[15px] leading-[22px]">Program</h4>
                        <div className=" flex flex-col w-full items-start font-semibold text-[12px] text-colorLetterBold1 ">
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">TikTok for Good</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Advertise</a>
                            </div>
                            <div className="w-full h-[21px]">
                                <a href="/tiktok"className="cursor-default hover:underline">TikTok LIVE Creator Networks</a>
                            </div>
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">Developers</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Transparency</a>
                            </div>
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">TikTok Rewards</a>
                                <a href="/tiktok"className="cursor-default hover:underline">TikTok Embeds</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[90px] mt-[15px] flex flex-col mb-[8px]">
                        <h4 className="w-full h-[22px] text-start text-colorLetterBold1 font-bold text-[15px] leading-[22px]">Terms & Policies</h4>
                        <div className="flex flex-col w-full items-start font-semibold text-[12px] text-colorLetterBold1">
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">Help</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Safety</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Terms</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Privacy Policy</a>
                            </div>
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">Privacy Center</a>
                                <a href="/tiktok"className="cursor-default hover:underline">Creator Academy</a>
                            </div>
                            <div className="w-full h-[21px] flex items-end gap-[6px]">
                                <a href="/tiktok"className="cursor-default hover:underline">Community Guidelines</a>
                            </div>
                        </div>
                    </div>
                    {checkOnclickShow && 
                        <div className="mt-[7px] w-[216px] h-[136px] flex flex-col mb-[8px]">
                            <h4 className="w-full h-[22px] text-start text-colorLetterBold1 font-bold text-[15px] leading-[22px]">Channels</h4>
                            <div className="flex flex-col w-full items-start font-semibold text-[12px] text-colorLetterBold1 ">
                                <div className="w-full h-[21px] flex items-end gap-[6px]">
                                    <a href="/tiktok"className="cursor-default hover:underline ::">Dance</a>
                                    <a href="/tiktok"className="cursor-default hover:underline">Arts</a>
                                    <a href="/tiktok"className="cursor-default hover:underline">Food and Drink</a>
                                    <a href="/tiktok"className="cursor-default hover:underline">Tourism</a>
                                </div>
                                <div className="w-full h-[21px] flex items-end gap-[6px]">
                                    <a href="/tiktok"className="cursor-default hover:underline">Production and Manufacturing</a>
                                </div>
                                <div className="w-full h-[21px] flex items-end gap-[6px]">
                                    <a href="/tiktok"className="cursor-default hover:underline">Vehicles and Transportation</a>
                                </div>
                                <div className="w-full h-[21px] flex items-end gap-[6px]">
                                    <a href="/tiktok"className="cursor-default hover:underline">Relationship</a>
                                    <a href="/tiktok"className="cursor-default hover:underline">TikTok Style</a>
                                    <a href="/tiktok"className="cursor-default hover:underline">Athletics</a>
                                </div>
                                <div className="w-full h-[21px] flex items-end gap-[6px]">
                                    <a href="/tiktok"className="cursor-default hover:underline">Hobbies</a>
                                </div>
                            </div>
                        </div>
                    }
                    {!checkOnclickShow && 
                        <div onClick={() => setCheckOnclickShow(true)} className="flex items-center jutify-start w-[216px] h-[18px] mb-[20px] text-color">
                        <span className="h-full w-[] leading-[18px] text-[12px] font-semibold ">See more</span>
                        <div className="ml-[6px]">
                            <SidebarIconArrow/>
                        </div>
                    </div>
                    }
                    <div className="w-[85px] h-[21px] text-left leading-[25px] font-semibold text-[12px] text-colorLetterBold1 ">
                        @ 2024 TikTok
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Sidebar;