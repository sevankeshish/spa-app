import { Link,withRouter } from "react-router-dom"

const Navigation = () => {
    return (
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> 
                <li>
                <Link to="/about-us">About-us</Link>       
                </li>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default withRouter(Navigation)