import moment from 'moment';
import {DownCircleTwoTone,UpCircleTwoTone} from '@ant-design/icons';
import {useState} from 'react'; 
import {DeviceCardEditMode} from './deviceCardEditMode';
export const DeviceCard = ({title, room, ipAddress, location, setStatus, deviceId, lastSeen, status, deleteDevice, temp})=>{

    const [editMode, setEditMode] = useState('');
    const toggleEditMode = ()=>{
        setEditMode(!editMode);
        console.log(editMode === true);
    }

    return(
        <>
        {editMode !== true && (
        <div className="card" style={{ "border":"4px solid #001a4d"}} >
            <div className="card-body"  style={{ "backgroundColor":"#e6eeff"}}>
            {
                moment(lastSeen).isBefore(moment().subtract(10,'s'))? 
                <div><DownCircleTwoTone twoToneColor="#eb2f96" /></div> : 
                <div><UpCircleTwoTone twoToneColor="#008000"/></div>
             }
            
                <h5 className="card-title">{`Device name: ${title}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{`Location: ${location}`}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{`Room: ${room}`}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{`Device Id: ${deviceId}`}</h6>
                
                <h6 className="card-subtitle mb-2 text-muted">{ temp ? `Temperature: ${temp} degrees C` : ""}</h6>
                <p className="card-subtitle mb-2 text-muted">{`Last seen: ${moment(lastSeen).format('DD/MM/yyyy hh:mm:ss')}`}</p>
                <div>
                <button className="btn btn-primary" onClick={(deviceId)=>setStatus(deviceId)} id={deviceId} title={status? "device is ON click to switch off" : "device is OFF click to switch on"}>{status? "OFF" : "ON"}</button>
                <button className="btn btn-primary" onClick={toggleEditMode}>Edit</button>
                <button className="btn btn-danger" onClick={()=>deleteDevice(deviceId)}>Delete device</button>
                </div>
                
            </div>
        </div>
        ) 
        }
        {editMode == true && (
            <DeviceCardEditMode
                title={title}
                ipAddress={ipAddress}
                location={location}
                room={room}
                deviceId={deviceId}
                lastSeen={lastSeen}
                status={status}
                togleEditMode={setEditMode}
            
            />
        )

        }
        </>
        
    )
};