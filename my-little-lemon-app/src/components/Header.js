import React from "react";
import food from "../images/restauranfood.jpg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <header>
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant
                    , focused on traditional recipes served with a modern twist.</p>
                <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food} alt="LL appetizer"/>
            </div>
        </section>
    </header>
    )
}

export default Header;