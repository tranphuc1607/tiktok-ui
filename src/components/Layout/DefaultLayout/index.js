import HeaderShared from "../components/header/HeaderShared";
import Sidebar from "../components/sidebar";
import style from "./DefaultLayout.module.scss"
import HeaderItemForLogged from "../components/header/HeaderLogged";
import HeaderItemForNotLogged from "../components/header/HeaderNotLogged";
import classNames from "classnames/bind";

const cx = classNames.bind(style)


function DefaultLayout({ children }) {
    return ( 
        <div>
            <HeaderShared layout={HeaderItemForNotLogged}/>
            <div className="container"> 
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;