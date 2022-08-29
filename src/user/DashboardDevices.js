import DashboardNav from '../components/DashboardNav';
import ConnectNav from '../components/ConnectNav';
import {Link} from 'react-router-dom';
import { getDevices, updateDevice, deleteDevice } from '../actions/device';
import {useSelector} from 'react-redux';
import {DeviceCard} from '../devices/deviceCard'
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const DashboardDevices = () =>{
    
    const {auth} = useSelector((state)=> ({...state}));
    const {token} = auth;

    const [devices, setDevices] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = ()=>{
        dispatch({
          type: 'LOGOUT',
          payload: null
        });
        window.localStorage.removeItem("auth");
        history.push("/login");
      }

    useEffect(()=>{
        getDevices(token).then((devices)=>{
            setDevices(devices.data);
        }).catch(
           ()=>logout()
        );
        let intervalId = setInterval(()=>{getDevices(token).then((devices)=>{
            setDevices(devices.data);
        })},10000);
        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    const setStatus = (e)=>{
        
        let newarray = devices.map((d)=>{
            if (d.deviceId === e.target.id) {
                d.status = !d.status;
                return d;
            }
            else{
                return d;
            }
        });
        setDevices(newarray);
        console.log(JSON.stringify("devices: " + JSON.stringify(devices)));
        console.log(`target id ${e.target.id}`);
        console.log(JSON.stringify(devices.find((d)=>d.deviceId === e.target.id)));
        updateDevice(token, devices.find((d)=>d.deviceId === e.target.id));
    };

    const deleteDeviceById = async (e)=>{
        
        await deleteDevice(token,e)
        const devices = await getDevices(token);
        setDevices(devices.data);
    };


    return(
        <>

        <div className="container-fluid" style={{'backgroundColor':'#4d88ff'}}>
            <div className="row">
                <div className="col-md-10">
                    <h2>Your Devices</h2>
                    {devices.map((i)=>{
                        return <DeviceCard
                                 key={i._id}
                                 title={i.title}
                                 ipAddress={i.ipAddress}
                                 location={i.location}
                                 room={i.room}
                                 deviceId={i.deviceId}
                                 lastSeen={i.lastSeen}
                                 status={i.status}
                                 setStatus={setStatus}
                                 deleteDevice={deleteDeviceById}
                                 temp={i.temp}
                                 />
                    })}
                    
                </div>
                <div className="col-md-2">
                    <Link to="/devices/unclaimed" className="btn btn-primary"> + Add New</Link>
                </div>
            </div>
        </div>

        </>
    )
};

export default DashboardDevices;