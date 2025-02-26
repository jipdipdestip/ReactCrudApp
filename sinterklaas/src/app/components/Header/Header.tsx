import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
        <h1>Welcome to React Crud App</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AddUser">add users</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;