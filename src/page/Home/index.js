import style from"./Home.module.scss"
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import FrameVideo from "~/components/FrameVideo/FrameVideo";
import { baseVideoUser } from "./baseVideoUser/baseVideoUser";


const cx = classNames.bind(style)

function Home() {
    return (
        <div className="bg-transparent w-full flex flex-col items-center justify-start">
          {
            baseVideoUser.map(video => <FrameVideo key={video.id} video = {video}/> )
          }
        </div>
      );
}

export default Home;