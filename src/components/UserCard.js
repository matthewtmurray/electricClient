import moment from 'moment';
import {useState} from 'react'; 
import UserCardEditMode from './UserCardEditMode';

const UserCard = ({name,email,admin,createdAt, handleDelete, id, refreshUsers})=>{

    const [editMode, setEditMode] = useState('');
    const toggleEditMode = ()=>{
        setEditMode(!editMode);
        console.log(editMode === true);
    }

    return(
        <>
        {editMode !== true && (
        <div div className="card">
            <div className="card-body">
                <h5 className="card-title">{`Name: ${name}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{`Email: ${email}`}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{`Admin user: ${admin}`}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{`Account created: ${moment(createdAt).format('DD/MM/yyyy hh:mm:ss')}`}</h6>
                {!admin ? <button className="btn btn-outline-danger btn-sm" onClick={()=>handleDelete(id)}>Delete</button> : ""}
                <button className="btn btn-outline-primary btn-sm" onClick={()=>toggleEditMode()}>Edit</button>
            </div>
        </div>
        )
        }

        {editMode === true && (
            <UserCardEditMode
            toggleEditMode={toggleEditMode}
            name={name}
            email={email}
            createdAt={createdAt}
            admin={admin}
            _id={id}
            refreshUsers={refreshUsers}
            />
        )
        }
        </>

    );
};

export default UserCard;