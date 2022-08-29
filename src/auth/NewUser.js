import React from 'react';
import { addUser } from '../actions/users';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {useSelector} from 'react-redux';

const NewUser = ({history})=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {auth} = useSelector((state)=> ({...state}));
    
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            const res = await addUser({
                name,
                email,
                password
            }, auth.token);
            console.log('register user====>', res);
            history.push('/auth/users');
        } catch (err) {
            console.log('register user failed ====>', err);
            if(err.response.status === 400) toast.error(err.response.data);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label className="form-label">Your name</label>
                <input className="form-control" name="name" type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Your name</label>
                <input className="form-control" name="email" type="email" placeholder="email address" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Your name</label>
                <input className="form-control" name="password" type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            <div className="form-group mb-3">
                <button className="form-control" type="submit" className="btn btn-success">Add</button>
            </div>
            </form>
        </div>
    );
}

export default NewUser;