import Home from "~/page/Home"
import Following from "~/page/Following"
import Profile from "~/page/Profile"
import Upload from "~/page/Upload"
import { HeaderOnly } from "~/Layout"
import Search from "~/page/Search"
import Login from "~/page/Login/Login"



const publicRoutes = [
    {path : "/",component : Home},
    {path : "/foryou",component : Home},
    {path : "/following",component : Following},
    {path : "/profile",component : Profile},
    {path : "/upload", component : Upload, layout : HeaderOnly},
    {path : "/search", component : Search, layout : null},
    {path : "/login", component : Login, layout : null},

]

const privateRoutes = [

]

export { publicRoutes,privateRoutes }