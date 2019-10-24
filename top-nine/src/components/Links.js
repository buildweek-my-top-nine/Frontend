import React from 'react';
import { Link } from "react-router-dom";
import "../App.css"

function Links() {
  return (
      <ul className="navbar">
        <Link className="navlink" to='/signup'>Sign Up</Link>
        <Link className="navlink" to='/login'>Login</Link>
      </ul>
  );
}

export default Links;