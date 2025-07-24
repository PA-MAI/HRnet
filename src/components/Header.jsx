import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/wealth-health-logo.svg?react";

export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="logo">
        <Logo className="main-logo-image" title="HRnet Logo" />
      </div>
    </Link>
  );
}
