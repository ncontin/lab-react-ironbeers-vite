import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <navbar>
        <Link to="/">HomePage</Link>
      </navbar>
    </div>
  );
}

export default Header;
