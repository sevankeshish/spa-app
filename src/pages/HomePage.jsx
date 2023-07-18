import { Link } from "react-router-dom";

const HomePage = (props) => {
    props.history.push("/about-us")
    console.log(props);
    return ( 
        <section>
            <p>this is HomePage.</p>
            {/* <Link to="/about-us">
            go to about-us page
            </Link> */}
        </section>
     );
}
 
export default HomePage;