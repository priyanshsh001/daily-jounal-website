

import React from "react"
import { Link} from 'react-router-dom'
import { useLogout } from '../hooks/logouthook'
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout()

  }
  return (
    <nav className="navbar">
    <div className="navdiv">

      <span className="heading">DAILY JOURNAL</span>

      <ul className="navbar-v">



        {user && <div className="nearbydiv">
          <li className="nav-itm" id="home"><Link className="k" to="/">HOME</Link></li>
          <li className="nav-itm" id="about"><Link className="k" to="/about">ABOUT US</Link></li>
          <li className="nav-itm" ><Link className="k" to="/compose">COMPOSE ME</Link></li>
          <span className="emaild">{user.email}</span>
          <li className=" k" onClick={handleClick}>LOGOUT</li>
          

        </div>}
        {
          !user && <div className="nearbydiv">

            <li className="nav-itm" ><Link className="k" to="/about">ABOUT US</Link></li>
            <li className="nav-itm" ><Link className="k" to="/login">LOGIN</Link></li>
            <li className="nav-itm" ><Link className="k" to="/signup">SIGNUP</Link></li></div>
        }


      </ul>
    </div>
    </nav>
 
  );
}
export default Header;
