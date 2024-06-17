
function ListAccountItem({img , useName , name}) {
    return ( 
        <div className="w-full flex items-center py-[8px] px-[8px] h-[48px] hover:bg-backGround hover:rounded-[5px]">
            <a className="w-[44px] h-full" href="/tiktok">
                <div className="w-[32px] h-full ">
                    <img className="w-full h-full rounded-full" src={img} alt="lỗi" />
                </div>
            </a>
            <a className="flex flex-col flex-1 text-left" href="/tiktok">
                <span className="w-full h-[21px] text-[16px] font-bold text-[#161823]">{useName}</span>
                <p className="w-full h-[15px] text-[12px] text-[#161823BF]">{name}</p>
            </a>
        </div>
     );
}

export default ListAccountItem;