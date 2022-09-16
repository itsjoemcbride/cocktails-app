import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Drinks App</div>
      </Link>
      {/* <div className="user-image">
        <img src={user} alt="user" />
      </div> */}
      <div className="nav-links">
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Header;
