import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from './components/TopNav';
import PrivateRoute from './components/PrivateRoute';

//components
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './user/Dashboard';
import DashboardDevices from './user/DashboardDevices';
import { AddUnclaimedDevice } from './devices/AddUnclaimedDevice';
import NewUser from './auth/NewUser';
import Users from './components/Users';
import ForgotPassword from './components/forgotPassword';
import PasswordReset from './components/passwordReset';


function App() {
  return (
    <BrowserRouter>
    <TopNav/>
    <ToastContainer position="top-center"/>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        <Route exact path="/passwordreset" component={PasswordReset}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/dashboard/devices" component={DashboardDevices}/>
        <PrivateRoute exact path="/devices/unclaimed" component={AddUnclaimedDevice}/>
        <PrivateRoute exact path="/auth/newuser" component={NewUser}/>
        <PrivateRoute exact path="/auth/users" component={Users}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
