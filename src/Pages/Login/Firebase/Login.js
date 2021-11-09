import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {handleGoogleSignin,setUser,setError,setIsLoading,setUserEmail,} = useAuth();

    const location=useLocation();
    const history=useHistory();

    const redirect=location.state?.from ||'/home';

    const usingGoogleLogin=()=>{
        handleGoogleSignin()
        .then((result) => {
            setUser(result.user);
            setUserEmail(result.user.email);
            history.push(redirect);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });
    }
    return (
        <div className="App login">
            <button onClick={usingGoogleLogin} className="btn btn-warning">Google Sign In</button>
            {/* <img src={bk} alt="" /> */}
        </div>
    );
};

export default Login;