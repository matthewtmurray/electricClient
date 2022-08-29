import axios from 'axios';

export const getDevices = async(token)=> await axios.get(`${process.env.REACT_APP_API}/getdevices`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const updateDevice = async (token,data)=> await axios.patch(`${process.env.REACT_APP_API}/updatedevice`,data,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const editDevice = async (token,data)=> await axios.patch(`${process.env.REACT_APP_API}/editdevice`,data,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const getUnclaimedDevice = async (token,deviceId)=> await axios.get(`${process.env.REACT_APP_API}/getunclaimeddevice/${deviceId}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const claimUnclaimedDevice = async (token,data)=> await axios.post(`${process.env.REACT_APP_API}/claimUnclaimeddevice`,data,{
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export const deleteDevice = async (token, id)=> await axios.delete(`${process.env.REACT_APP_API}/deletedevice/${id}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})


