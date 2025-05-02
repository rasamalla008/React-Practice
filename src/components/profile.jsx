import { Link, NavLink } from "react-router";

export default function Profile(){

    return (<> This is the Profile page for the Demo
    <ul>
        <li>
            <Link to='/landingPage'> Landing Page</Link>
            <br />
            <NavLink to="/" className="active"> Move to the Home</NavLink>
        </li>
    </ul>
    </>)
}