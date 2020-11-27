import React,{useContext} from 'react'
import WrappedNavbar from "./navbar"
import WrappedNavbarConnected from "./navbarConnected"
import WrappedNavbarPro from "./navbarPro"
import UserContext from "../../context/userContext"
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const {userData,setUserData}=useContext(UserContext)
    const history = useHistory();
    const logout =()=>{
        setUserData({
            token:undefined,
            user:undefined
        })
        localStorage.setItem("auth-token","")
        history.push("/sign-in")
    }
    return userData.user? userData.user.role==="USER"? <WrappedNavbarConnected logout={logout} userName={userData.user.name}/>:<WrappedNavbarPro logout={logout} userName={userData.user.name}/>: <WrappedNavbar/>
}

export default Navbar
