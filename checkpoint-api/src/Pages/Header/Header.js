import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "gray",
        height: 80,
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1,
      }}
    >
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: 60,
            marginTop: -10,
            color: "white",
          }}
          to="/"
        >
          User
        </Link>
      </ul>
    </div>
  );
};

export default Header;
