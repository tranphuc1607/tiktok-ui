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
                        <div className="flex flex-col justify-end h-full w-[50px] ml-[20px]">
                            {baseIcon.map((icon) => (
                                <IconItem key={icon.id} Icon={icon.icon} value={icon.value} />
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
