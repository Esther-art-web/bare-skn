import { Component } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login, getUser } from "../redux/features/user/userSlice"
import { useEffect } from "react";

function Login(props){
    const dispatch = useDispatch();
    const { email, password } = useSelector((store) => store.user)
    useEffect(() => {
        console.log(email, password)
        dispatch(getUser({email, password}))
    }, [password])
    return(
        <div className="login-container">
            <span className="login-title">Login</span>
            <form  onSubmit={(e) =>{return dispatch(login({e}))}}>
                <fieldset>
                    <div className="login-section">
                        <label htmlFor="login_email">Email</label>
                        <input type="email" name="login_email" id="login_email" />
                    </div>
                    <div className="login-section">
                        <label htmlFor="login_password">Password</label>
                        <input type="password" name="login_password" id="login_password" />
                        <img className='navbar-icon visible' src={require('../icons/visibility.png')} alt="" />
                    </div>
                    <button type="submit">LOGIN</button>
                </fieldset>
            </form>
            <p>Don't have an account? <Link to={`/signup`}>Sign up</Link></p>
            <p className="seperator"><span></span>or <span></span></p> 
            <button type="submit" className="secondary-btn">GUEST LOGIN</button>

        </div>
    );
   
}

export default Login;