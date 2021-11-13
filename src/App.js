import React from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App=()=> {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    );
}

export default App;