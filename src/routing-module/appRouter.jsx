import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "../components/Landingpage";
import Profile from "../components/profile";
import Home from "../components/home";

export default function AppRouter(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/landingPage" element={<LandingPage/>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
    </Routes>
    </BrowserRouter>
    </>)
}