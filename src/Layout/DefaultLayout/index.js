import HeaderShared from "../components/header/HeaderShared";
import Sidebar from "../components/sidebar";
// import style from "./DefaultLayout.module.scss"
import HeaderItemForLogged from "../components/header/HeaderLogged";
import HeaderItemForNotLogged from "../components/header/HeaderNotLogged";
// import classNames from "classnames/bind";

// const cx = classNames.bind(style)


function DefaultLayout({ children }) {
    return ( 
        <div className="w-full">
            <HeaderShared Layout={HeaderItemForNotLogged}/>
            <div className="container flex"> 
                <Sidebar/>
                <div className="ml-[240px] content flex-1 mt-[60px] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;