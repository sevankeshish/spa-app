import Blogs from "./components/Blogs";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";


const routes = [
    {path:"/blogs/:id" , component:Blogs},
    {path:"/blogs", component: BlogPage},
    {path:"/profile", component: Profile},
    {path:"/about-us", component: AboutUsPage},
    {path:"/post/:id?([0-9]+)",component:PostPage},
    // {path:"/post/:id?([a-z]+)",component:PostPage},
    {component:NotFound},
    {path:"/", component: HomePage, exact:true},
]

export default routes