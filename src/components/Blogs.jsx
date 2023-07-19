import { Link } from "react-router-dom";
import queryString from "query-string";

const Blogs = ({location, match}) => {
    // console.log(props.match.params);
    
    //we click and get the id, when we get the PARAMS we much do a hhtp request to backend
    // => axios.get("/blogs/1")
    const query = queryString.parse(location.search)
    console.log(query);
    const id = match.params.id
    return ( 
        <div>
            <h3>Blog details - {id}</h3>
            {/* <Link to="/blogs">go to the blogs page</Link> */}
            <Link to={`/blogs/${parseInt(id) + 1}`}>go to the next blogs page</Link>
        </div>
     );
}
 
export default Blogs;