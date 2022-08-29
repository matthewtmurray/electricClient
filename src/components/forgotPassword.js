import { useState } from 'react';
import { toast } from 'react-toastify';
import {forgotPassword} from '../actions/auth';

const Forgotpassword = ({history}) => {

    const [email, setEmail] = useState('');

    const resetUserPassword = async (e)=>{
        e.preventDefault();
        try{
            const result = await forgotPassword({email});
            if (result.status == 200) {
                toast.success(result.data);
                setTimeout(history.push('/login'),10000);
            }
        }
        catch(e){
            console.log(e);
            if (e.response.status == 404) {
                toast.error("Email address not found :-(");
            }
            else{
                toast.error("Unexpected error :-(");
            }
        }
        
      
    }


    return (
        <form>

            <div className="form-group mb-3">
                <label className="form-label">Your email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button className="btn btn-primary" onClick={resetUserPassword}>Reset Password</button>

        </form>
    )
};

export default Forgotpassword;