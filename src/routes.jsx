import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";


const routes = [
    {path:"/", component: HomePage, exact:true},
    {path:"/profile", component: Profile},
    {path:"/about-us", component: AboutUsPage},
]

export default routes