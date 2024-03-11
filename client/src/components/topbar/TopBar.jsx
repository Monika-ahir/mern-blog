import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import logo from "../../images/logo.png";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              {" "}
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {" "}
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {" "}
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              {" "}
              write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="pic" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LogIn
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
