import React from "react";

import {Route, BrowserRouter as Router,Routes} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/HomePages/Home";
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Login />}   />
                <Route path='/home' element={<Home />}/>
            </Routes>
        </Router>
    )
}
export default AppRouter;