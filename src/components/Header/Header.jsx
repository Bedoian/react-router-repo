import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
       <div className="pillam">
         <nav>
            <h1>This is our website header</h1>
            <span className="container"><NavLink to='/contact'>Contact</NavLink></span>
            <span className="container"><NavLink to="/about">about</NavLink></span>
            <span className="container"><NavLink to="/users">users</NavLink></span>
            <span className="container"><NavLink to="/posts">posts</NavLink></span>
        </nav>
       </div>
    );
}; 

export default Header;