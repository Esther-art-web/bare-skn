import { useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarOptions from "./SideBarOptions";

function SideBar(props){
    const { id, first_name, last_name, email} = useSelector((store) => store.user)
    const sidebar = useRef();
    useEffect(() => {
        const sidebar_style= sidebar.current.style;
        if(props.isSideBarOpen){
            sidebar_style.width = "100vw";
            sidebar_style.opacity = "1";
        } else{
            sidebar_style.width = "0";
            sidebar_style.opacity = "0";
        }
    })
    return(
        <aside className="sidebar-section" ref={sidebar}>
            <div className="sidebar-main-options">
                {
                    id ? 
                    <Link onClick={props.toogleSideBar} to={`/account`} >
                        <div className="sidebar-profile" >
                            <img id= "profile" src={require("../icons/profile.png")} alt="profile" className="navbar-icon"/>
                            <div>
                                <p className="username">{first_name} {last_name}</p>
                                <p className="user-email">{email}</p>
                            </div>
                        </div>
                    </Link> 
                    :
                    <div className="account-section options" >
                        <Link onClick={props.toogleSideBar} to={`/signup`}>
                            <button className="signup">SIGN UP</button>
                        </Link>
                        <p className="login">
                            Already have an account? <Link onClick={props.toogleSideBar} to={`/signin`}>Signin</Link>
                        </p>
                    </div>
                }
                <SideBarOptions toogleSideBar={props.toogleSideBar} isSideBarOpen = {props.isSideBarOpen}/>
                <div className="sidebar-socials">
                    <a href="mailto:estheribeh5@gmail.com" ><span className="fa fa-envelope"></span></a>
                    <a href="https://www.github.com/ibehesther" target='_blank' rel="noreferrer" ><span className="fa fa-github"></span></a>
                    <a href="https://www.linkedin.com/in/ibehesther" target='_blank' rel="noreferrer" ><span className="fa fa-linkedin"></span></a>
                    <a href="https://www.twitter.com/thee_essie" target='_blank' rel="noreferrer" ><span className="fa fa-twitter"></span></a>
                    
                </div>
            </div>
        </aside>
    )
}

export default SideBar;