import { Link,withRouter } from "react-router-dom"
import { NavLink } from "react-router-dom"

const items = [
    {name: "Home", to:"/", exact:true},
    {name: "About-us", to:"/about-us"},
    {name: "Profile", to:"/profile"},
    {name:"Blogs", to:"/blogs"}
]

const Navigation = () => {
    return (
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link> 
                <li>
                <Link to="/about-us">About-us</Link>       
                </li>
              </li> */}
              {items.map((item) => {
                return (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            activeClassName="activeClassName"
                            exact={item.exact || false}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                )
              })}
            </ul>
          </nav>
    )
}

export default withRouter(Navigation)