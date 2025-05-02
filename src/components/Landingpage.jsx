import { Link, NavLink } from "react-router";

export default function LandingPage(){

    return (<> This is the landing page for the Demo
    <ul>

        <li> 
            <Link to="/profile"> Redirect to Profile page</Link>
            <br />
            <NavLink to="/"> Move to the Home</NavLink>

        </li>
    </ul>
    </>)
}