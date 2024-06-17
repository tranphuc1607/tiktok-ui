import HeaderShared from "../components/header/HeaderShared";
import HeaderItemForLogged from "../components/header/HeaderLogged";

function HeaderOnly({ children }) {
    return ( 
        <div>
            <HeaderShared Layout={HeaderItemForLogged}/>
            <div className="container"> 
                {children}
            </div>
        </div>
     );
}

export default HeaderOnly;