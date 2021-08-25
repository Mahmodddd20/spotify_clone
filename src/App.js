import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import './index.css';
import Login from "./pages/Login";
import Search from "./pages/Search";
import Albums from "./pages/Albums";

export default function App() {
    return (
        <div className="container mx-auto h-screen px-4 m-4">
            <BrowserRouter>
                <Route exact path="/" component={Login}/>
                <Route exact path="/albums/:id" component={Albums}/>
                <Route exact path="/search" component={Search}/>
            </BrowserRouter>
        </div>
    );
}
