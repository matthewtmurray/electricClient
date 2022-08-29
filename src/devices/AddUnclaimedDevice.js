import {getUnclaimedDevice, claimUnclaimedDevice} from '../actions/device';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';

export const AddUnclaimedDevice =({history})=>{

    const {auth} = useSelector((state)=> ({...state}));
    const {token} = auth;

    const [values, setValues] = useState(
        {
            deviceId:"", 
            title:"", 
            location:"", 
            room:"",
            deviceFound: false
        });

    const handleChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await claimUnclaimedDevice(token,values);
        history.push('/');
    };

    const handleLookup = async (e)=>{
        e.preventDefault();
        try{
            await getUnclaimedDevice(token, values.deviceId);
            setValues({...values, "deviceFound": true});
            toast.success('Device found');
        }
        catch(err){
            console.log(err.response.status);
            if (err.response.status === 404) {
                toast.error('Device not found');
            }
            else{
                console.log(err);
            }
        }
    }

    

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="container">
                                {!values.deviceFound ?
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                        type="text" 
                                        name="deviceId" 
                                        onChange={handleChange} 
                                        placeholder="Device Id" 
                                        className="form-control m-2" 
                                        value={values.deviceId}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <button onClick={handleLookup}  disabled={values.deviceId.length < 1} className="btn btn-success">Lookup</button>
                                    </div>
                                </div> :
                                 <div className="row">
                                 <div className="col-6">
                                     <input
                                     type="text" 
                                     name="title" 
                                     onChange={handleChange} 
                                     placeholder="Title" 
                                     className="form-control m-2" 
                                     value={values.title}
                                     />

                                    <input
                                     type="text" 
                                     name="location" 
                                     onChange={handleChange} 
                                     placeholder="Location" 
                                     className="form-control m-2" 
                                     value={values.location}
                                     />

                                    <input
                                     type="text" 
                                     name="room" 
                                     onChange={handleChange} 
                                     placeholder="Room" 
                                     className="form-control m-2" 
                                     value={values.room}
                                     />
                                 </div>
                                 <button onClick={handleSubmit} className="btn btn-outline-primary m-2">Save</button>
                             </div>
                             
                                }
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}