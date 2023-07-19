import { Link } from "react-router-dom";

const Blogs = (props) => {
    // console.log(props.match.params);
    //we click and get the id, when we get the PARAMS we much do a hhtp request to backend
    // => axios.get("/blogs/1")
    const id = props.match.params.id
    return ( 
        <div>
            <h3>Blog details - {id}</h3>
            <Link to="/blogs">go to the blogs page</Link>
        </div>
     );
}
 
export default Blogs;