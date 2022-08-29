import axios from 'axios';

export const getUsers = async(token)=> await axios.get(`${process.env.REACT_APP_API}/getusers`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const addUser = async (user, token) => 
    await axios.post(`${process.env.REACT_APP_API}/adduser`, user, { headers:{
        Authorization: `Bearer ${token}`
    }
});

export const deleteUser = async (userId, token) => 
    await axios.delete(`${process.env.REACT_APP_API}/deleteuser/${userId}`, { headers:{
        Authorization: `Bearer ${token}`
    }
});

export const updateUser = async (data, token) => 
    await axios.patch(`${process.env.REACT_APP_API}/updateuser`,data, { headers:{
        Authorization: `Bearer ${token}`
    }
});

