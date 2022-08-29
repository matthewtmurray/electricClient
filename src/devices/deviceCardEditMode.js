import moment from 'moment';
import {DownCircleTwoTone,UpCircleTwoTone} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import {editDevice} from '../actions/device';
import {useSelector} from 'react-redux';
export const DeviceCardEditMode = ({title, room, location, togleEditMode, deviceId, lastSeen})=>{


    useEffect(()=>{
        setTitle(title);
        setLocation(location);
        setRoom(room);
    },[]);

    const [_title, setTitle] = useState('');
    const [_room , setRoom] = useState('');
    const [_location, setLocation] = useState('');

    const {auth} = useSelector((state)=> ({...state}));

    const updateDevice = async ()=>{
        editDevice(auth.token,{_title,_room, _location, deviceId});
        togleEditMode();
    }

    return(
        <div className="card" >
            <div className="card-body">
            {
                moment(lastSeen).isBefore(moment().subtract(10,'s'))? 
                <div><DownCircleTwoTone twoToneColor="#eb2f96" /></div> : 
                <div><UpCircleTwoTone twoToneColor="#008000"/></div>
             }
            
                <h6 className="card-title"><label htmlFor="title">Device name</label><input name="title" value={_title} onChange={(e)=>setTitle(e.target.value)}/></h6>
                <h6 className="card-subtitle mb-2 text-muted"><label htmlFor="location">Location</label><input name="location" value={_location}  onChange={(e)=>setLocation(e.target.value)}/></h6>
                <h6 className="card-subtitle mb-2 text-muted"><label htmlFor="room">Room</label><input name="room" value={_room}  onChange={(e)=>setRoom(e.target.value)}/></h6>
                <h6 className="card-subtitle mb-2 text-muted">{`Device Id: ${deviceId}`}</h6>
                <p className="card-subtitle mb-2 text-muted">{`Last seen: ${moment(lastSeen).format('DD/MM/yyyy hh:mm:ss')}`}</p>
                <div>
                <button 
                    className="btn btn-primary" 
                    onClick={togleEditMode} 
                >
                Quit edit
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={updateDevice} 
                >
                Update
                </button>
                </div>
                
            </div>
        </div>
    )
};