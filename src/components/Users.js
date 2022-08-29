import React from 'react';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getUsers, deleteUser} from '../actions/users';
import UserCard from './UserCard';

const Users = ({history})=>{

    const {auth} = useSelector((state)=> ({...state}));
    const {token} = auth;

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers(token).then((users)=>{
            setUsers(users.data);
        });
    },[]);

    const handleDelete = async (userId)=>{
        await deleteUser(userId,token);
        
        await getUsers(token).then((users)=>{
            setUsers(users.data);
        });
        
    };

    const refreshUsers = async ()=>{
        await getUsers(token).then((users)=>{
            setUsers(users.data);
        });
    }

    return(
        <div>
            <div className="container">
            {users.map((u)=>{
                return (
                    <UserCard
                        name={u.name}
                        email={u.email}
                        admin={u.admin}
                        createdAt={u.createdAt}
                        key={u._id}
                        handleDelete={handleDelete}
                        id={u._id}
                        refreshUsers={refreshUsers}
                    />
                )
            })}
            </div>
            <button className="btn btn-success" type="submit" onClick={()=>{history.push('/auth/newuser')}}>Add user</button>
        </div>
    );
};

export default Users;