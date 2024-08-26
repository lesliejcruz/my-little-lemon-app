import React from "react";
import lemonlogo from "../images/lemonlogo.png"

const Footer = () => {
    return (
    <footer>
        <section>
        <img src={lemonlogo} alt="Little Lemon Logo"></img>
        <h3>Navigation</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>

        </ul>
        <h3>Contact</h3>
        <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>

        </ul>
        <h3>Social Media Links</h3>
        <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
        </ul>
        </section>
    </footer>
    )
}

export default Footer;