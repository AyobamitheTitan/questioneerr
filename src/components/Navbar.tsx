import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { token } = useAuthContext();
  const  logout  = useLogout();

  const setTheClick = () => {
    setClicked((prev) => !prev);
  };

  const hide = () => {
    const hideSideBar = document.getElementById("navbar")
    hideSideBar?.className 
    console.log(hideSideBar);
  }

  const exit = () => {
    logout(); 
  };

  return (
    <>
      <nav>
        <Link to="/">
          <h2>Questioneer</h2>
        </Link>
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            {token && (
              <>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
            <li className="action">
              {token && <p onClick={exit}>Logout</p>}
              {!token && <Link to='/login' onClick={hide}>Login</Link>}
            </li>
          </ul>
        </div>
        <div id="mobile">
          {clicked ? (
            <FaTimes onClick={setTheClick} />
          ) : (
            <FaBars onClick={setTheClick} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
