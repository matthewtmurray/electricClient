import { useState } from "react";
import { toast } from "react-toastify";
import {resetPassword} from '../actions/auth';

export const PasswordReset = ({location, history})=>{

    var querystring = new URLSearchParams(location.search);

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const resetToken = querystring.get('resetToken');
    const userId = querystring.get('userid');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (password1 !== password2) {
            toast.error('Passwords do not match');
        }
        else{
            try{
                const password = password1;
                const response = await resetPassword({resetToken,userId,password});
                toast.success('Password reset succesfull');
                setTimeout(()=>{history.push('/login')},3000);
            }
            catch(error){
                toast.error('Password reset failed');
            }
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        
        <div className="form-group mb-3">
            <label className="form-label">New password</label>
            <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                value={password1}
                onChange={(e)=> setPassword1(e.target.value)}
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Re-enter new password</label>
            <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                value={password2}
                onChange={(e)=> setPassword2(e.target.value)}
            />
        </div>
            <button className="btn btn-success">Reset password</button>
        </form>
    );
}

export default PasswordReset;