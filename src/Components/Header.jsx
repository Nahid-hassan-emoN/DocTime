import React, { useState } from "react";
import "../App";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="mainHeader">
        <div className="container-xxl">
          <nav className=" header-upper py-2">
            <Link to="/" className="title">
              DocTime
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/store">Specialities </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Past Consultation</NavLink>
              </li>

              <li>
                <NavLink to="/report">Test Report</NavLink>
              </li>
              <li>
                <NavLink to="/blood-donation">Blood Donation</NavLink>
              </li>
              <li>
                <NavLink to="/user">User</NavLink>
              </li>
              <li>
                <NavLink to="login" className="log_in">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
