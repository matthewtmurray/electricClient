import {useEffect, useState } from 'react';
import {updateUser} from '../actions/users';
import {useSelector} from 'react-redux';

const UserCardEditMode = ({toggleEditMode,name,email,admin,createdAt, _id, refreshUsers})=>{

    const [_name, setName] = useState('');
    const [_email, setEmail] = useState('');

    const {auth} = useSelector((state)=> ({...state}));

    useEffect(()=>{
        setName(name);
        setEmail(email);
    },[]);

    const handleUpdateUser = async ()=>{
        await updateUser({_name, _email,_id },auth.token);
        refreshUsers();
        toggleEditMode();
    };

    return(
        <div div className="card">
            <div className="card-body">
                <h5 className="card-title"><label htmlFor="name">Name: </label><input name="name" value={_name} onChange={(e)=>setName(e.target.value)}/></h5>
                <h6 className="card-subtitle mb-2 text-muted"><label htmlFor="email">Email: </label><input name="email" value={_email} onChange={(e)=>setEmail(e.target.value)}/></h6>
                <h6 className="card-subtitle mb-2 text-muted">Admin user:{admin}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Account created: {createdAt}</h6>
                <button className="btn btn-outline-primary btn-sm" onClick={toggleEditMode}>Quit Edit</button>
                <button className="btn btn-outline-primary btn-sm" onClick={handleUpdateUser}>Update</button>
            </div>
        </div>
    );
};

export default UserCardEditMode;
