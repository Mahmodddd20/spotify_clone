import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import Login from "./pages/Login";
import Search from "./pages/Search";
import Albums from "./pages/Albums";


export default function App() {
    return (
        <div className="container mx-auto h-screen px-4 m-4">
            <Router>
                <Route exact path="/" component={Login}/>
                <Route exact path="/albums" component={Albums}/>
                <Route exact path="/search" component={Search}/>
            </Router>
        </div>
    );
}
