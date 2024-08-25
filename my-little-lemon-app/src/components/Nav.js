import React from "react";
import lemonlogo from "../images/lemonlogo.png"

const Nav = () => {
    return (
    <nav>
        <img src={lemonlogo} alt="Little Lemon Logo"></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
    )
}

export default Nav;