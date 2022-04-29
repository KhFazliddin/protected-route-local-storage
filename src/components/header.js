import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    marginRight: "20px",
  };

  return (
    <h1>
      <div className="header">
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <div className="header_right">
          <Link style={linkStyle} to="/login">
            Sign In
          </Link>
          <Link style={linkStyle} to="/register">
            Sign up
          </Link>
          <Link style={linkStyle} to="/login">
            Log Out
          </Link>
        </div>
      </div>
    </h1>
  );
}

export default Header;
