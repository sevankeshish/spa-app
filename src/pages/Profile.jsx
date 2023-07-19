import { Route } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";

const Profile = () => {
    return (  
        <>
            <p>wellcome back !</p>
            <SideBar/>
            <Route path="/profile/dashboard" component={Dashboard} />
            <Route path="/profile/downloads" component={Downloads} />
        </>
    );
}
 
export default Profile;