import { Route } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";

const Profile = () => {
    return (  
        <>
            <h2 style={{margin: "20px"}}>wellcome back !</h2>
            <div>
                <SideBar/>
                <Route path="/profile/dashboard" component={Dashboard} />
                <Route path="/profile/downloads" component={Downloads} />
            </div>
        </>
    );
}
 
export default Profile;