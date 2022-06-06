import React from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appi from './Components/info';
import Application from './Components/news';

const Rockey=()=>{
    return (
        <div>
            <NavBar />
            <Appi />
        </div>
    )
}

const tv=()=>{
    return(
        <div>
            <NavBar />
            <Application />
        </div>
    )
}
const Chauhan=()=>{
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    )
}

const App=()=> {
    return (
        <div>
            <Router>
            <Routes>
            <Route path="/home" element={<Chauhan />} />
             <Route path="/info" element={<Rockey />} />
             <Route path="/news" element={<tv />} />
             </Routes>
            </Router>
    </div>

    );
}

export default App;