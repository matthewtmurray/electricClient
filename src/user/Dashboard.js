
import ConnectNav from '../components/ConnectNav';
import DashboardDevices from './DashboardDevices';



const Dashboard = () =>{
    return(
        <>
        <div className="container-fluid bg-secondary p-5">
            <ConnectNav/>
        </div>

        <div className="container-fluid p-4">
            <DashboardDevices/>
        </div>

        </>
    )
};

export default Dashboard;