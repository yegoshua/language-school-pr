import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Levels from "./pages/Levels/Levels";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/about" element={<About/>}/>
			<Route path="/sign-in" element={<SignIn/>}/>
			<Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/levels" element={<Levels/>}/>
        </Routes>
    );
}

export default App;
