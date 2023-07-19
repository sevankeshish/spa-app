import Blogs from "./components/Blogs";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";


const routes = [
    {path:"/", component: HomePage, exact:true},
    {path:"/blogs/:id" , component:Blogs},
    {path:"/blogs", component: BlogPage},
    {path:"/profile", component: Profile},
    {path:"/about-us", component: AboutUsPage},
    {component:NotFound},
]

export default routes