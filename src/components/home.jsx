import { Link } from "react-router";

export default function Home(){

    return (<> This is the Home page.
    
    <ul>

<li> 
    <Link to="/profile"> Redirect to Profile page</Link>
    <br></br>
    <Link to="/landingPage"> Redirect to Landing page</Link>
</li>
</ul></>)
}