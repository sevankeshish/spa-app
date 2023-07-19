import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";


const routes = [
    {path:"/", component: HomePage, exact:true},
    {path:"/profile", component: Profile},
    {path:"/about-us", component: AboutUsPage},
    {component:NotFound},
]

export default routes