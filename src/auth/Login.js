import { useState } from 'react';
import {toast} from 'react-toastify';
import {login} from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { useDispatch } from 'react-redux';



const Login = ({history})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const forgotPasswordRedirect = (e)=>{
        e.preventDefault();
        history.push('/forgotpassword');
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('SEND LOGIN DATA', {email, password});
        try {
            const res = await login({
                email,
                password 
            });
            console.log('LOGIN RESPONSE====>', res);
            if(res.data){
                console.log('SAVE USER RESPONSE IN REDUX STATE AND LOCAL STORAGE THEN REDIRECT===>');
                //console.log(res.data);
                //seve user and token to local storage
                window.localStorage.setItem('auth',JSON.stringify(res.data));
                //save user and token to redux
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: res.data
                });
                history.push('/dashboard');
            }
        } catch (err) {
            console.log('user login failed ====>', err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };


    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h1>Login</h1>
        </div>

        <div className="container">
            <div className="row"></div>
            <div className="col-md-6 offset-md-3">
                <LoginForm
                    handleSubmit={handleSubmit} 
                    password={password} 
                    email={email}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    forgotpasswordRedirect={forgotPasswordRedirect}
                />
            </div>
        </div>
        </>
    )
};

export default Login;