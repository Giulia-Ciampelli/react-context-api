import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/posts">
                Posts
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
        </nav>
    )
}