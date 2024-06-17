import classNames from "classnames/bind";
import style from "../FrameVideo.module.scss"

const cx = classNames.bind(style)


function ImgFrame({live , img}) {

    const classLiveAnimate = cx("w-full h-full rounded-full relative flex items-center justify-center" , 
        {animation : live,}
    )


    const wrapAnimation = cx('absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-wrapImg h-wrapImg rounded-full ', {
        wrapImg : live,
    })

    return ( 
        <div className={classLiveAnimate}>
            <div className={wrapAnimation}>
                {live && 
                    <div className="absolute bottom-0 w-[33.7px] h-[15px] bg-[#fe2c55] text-[#ffffff] text-[16px] font-bold text-center leading-[15px]">Live</div>
                }
                <img className='w-img rounded-full' src={img} alt="lỗi" />
            </div>
        </div>
    );
}

export default ImgFrame;