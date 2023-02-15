import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Levels from "./pages/Levels/Levels";
import Themes from "./pages/Themes/Themes";
import Words from "./pages/Words/Words";
import Teachers from "./pages/Teachers/Teachers";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/about" element={<About/>}/>
			<Route path="/sign-in" element={<SignIn/>}/>
			<Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/levels" element={<Levels/>}/>
            <Route path="/themes" element={<Themes/>}/>
            <Route path="/words" element={<Words/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
        </Routes>
    );
}

export default App;
