import React from "react";
import "./NavBar.css";

const NavBar=()=>{
    return (
        <div>
            <div className="header">
                <div className="header-name">
                    The void
                </div>
                <div className="header-searchbar">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search here" />
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
                <div className="header-icon">
                    <i className="moon icon"></i>
                </div>
            </div>
            <div className="lower-header">
                <div className="header-home-icon">
                    <i className="home icon"></i>
                </div>
                <div>
                    <i className="newspaper icon"></i>
                </div>
                <div>
                    <i className="info circle icon"></i>
                </div>
            </div>
        </div>
    );
}

export default NavBar;