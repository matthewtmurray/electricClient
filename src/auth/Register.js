import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { register } from '../actions/auth';


const Register = ({ history })=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tenant, setTenant] = useState('');

    console.log('history: ',history);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            const res = await register({
                name,
                email,
                password,
                tenant 
            });
            console.log('register user====>', res);
            toast.success('Register success. Please log in.');
            history.push('/login');
        } catch (err) {
            console.log('register user failed ====>', err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };

    console.log(process.env);

    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h1>Register</h1>
        </div>

        
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <RegisterForm 
                        handleSubmit={handleSubmit} 
                        name={name} 
                        password={password} 
                        email={email}
                        tenant={tenant}
                        setName={setName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setTenant={setTenant}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;