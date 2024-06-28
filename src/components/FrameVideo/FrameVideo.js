import classNames from 'classnames/bind';
import style from './FrameVideo.module.scss';
import { useState, useEffect } from 'react';

import Button from '../Button';
import ImgFrame from './ImgFrame/ImgFrame';
import { baseIcon } from './baseIcon/baseIcon';
import IconItem from './IconItem/IconItem';

const cx = classNames.bind(style);

function FrameVideo({ video }) {
    const { link, img, check, live } = video;
    const [checkOnclickIconFollow, setCheckOnclickIconFollow] = useState(false);

    const classImage = cx('image', {
        changeBackGround: checkOnclickIconFollow,
    });

    return (
        <div className="w-[692px] min-h-[456px] pt-[20px] flex flex-col justify-between">
            <div className="w-full flex items-start">
                <div className="w-[56px] h-[56px] mr-[12px]">
                    <ImgFrame img={img} live={live} />
                </div>
                <div className="min-h-[456px] flex-1 flex flex-col justify-start">
                    <div className="w-full min-h-[84px] flex items-start justify-between">
                        <div className=" max-w-[518px] ">
                            <div className="">
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                            <div className="">
                                <span className="inline-block">fhddfd</span>
                                <span> </span>
                                <span className="inline-block">fhddfd</span>
                                <span> </span>
                                <span className="inline-block">fhddfd</span>
                                <span> </span>
                                <span className="inline-block">fhddfd</span>
                                <span> </span>
                                <span className="inline-block">dfdfdfd</span>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                                <span> </span>
                                <strong className="inline-block">#rêrer</strong>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                        <Button buttonFollow>Follow</Button>
                    </div>
                    <div className="flex justify-start h-[498px]">
                        <video className="w-[265px] h-full flex justify-start" controls>
                            <source src={link} type="video/mp4" />
                        </video>
                        <div className="flex flex-col items-center justify-end h-full w-[50px] ml-[20px]">
                            <div className="w-[48px] h-[71px] relative">
                                <img src="" className="w-[48px] h-[48px] rounded-full bg-[#ccc]" alt="" />
                                <div
                                    onClick={() => setCheckOnclickIconFollow(!checkOnclickIconFollow)}
                                    className={classImage}
                                >
                                    {!checkOnclickIconFollow && (
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14px"
                                            height="14px"
                                        >
                                            <path d="M26 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h15v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V26h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H26V7Z"></path>
                                        </svg>
                                    )}
                                    {checkOnclickIconFollow && (
                                        <svg
                                            fill="rgb(254, 44, 85)"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14px"
                                            height="14px"
                                        >
                                            <path d="m19.71 36.03 19.73-30.5a1 1 0 0 1 1.39-.3l2.35 1.53c.46.3.6.92.3 1.38L22.01 41.3a2.4 2.4 0 0 1-3.83.28L4.85 26.33a1 1 0 0 1 .1-1.4l2.1-1.85a1 1 0 0 1 1.42.1L19.7 36.02Z"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {baseIcon.map((icon) => (
                                <IconItem key={icon.id} Icon={icon.icon} value={icon.value} id={icon.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-backGround mt-[19px]"></div>
        </div>
    );
}

export default FrameVideo;
