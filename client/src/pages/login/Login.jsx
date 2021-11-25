import { useContext, useRef } from 'react';
import { Context  } from '../../context/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function Login() {
    
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching }  = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const response = await axios.post('auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
        dispatch({type: "LOGIN_SUCCESS", payload: response.data})
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE"});
            window.location.replace('/register');
        }
    };


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}> 
                <label>Username</label>
                <input 
                    className="loginInput" 
                    type="text" 
                    placeholder="Enter Your Username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    className="loginInput" 
                    type="password" 
                    placeholder="Enter Your Password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
             <button className="loginRegisterButton">
                 <Link className="link" to="/register">Register</Link>
             </button>
        </div>
    )
}
