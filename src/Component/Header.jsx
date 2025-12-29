import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#000",
    fontWeight: isActive ? "600" : "400",
    textDecoration: "none"
  });

  return (
    <header style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center"
          }}
        >
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" style={linkStyle}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/Admin" style={linkStyle}>
              Admin
            </NavLink>
          </li>

          <li>
            <NavLink to="/AddCars" style={linkStyle}>
              Add Cars
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
