import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "./context/current_user";

function Home() {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const noCurrentUser = <div className="container bg-light text-center py-5">
    <div className="row">
        <h6>Ready to start making some memes? </h6>
        <NavLink className="nav-link" to="/signup">Signup Here</NavLink>
        <h6>Already have an account?</h6>
        <NavLink className="nav-link" to="/login">Login Here</NavLink>
    </div>
</div>

    return( !currentUser ? noCurrentUser : 
    <div className="container bg-light text-center py-5">
        <div className="row">
            <h4>Welcome, {currentUser.username}!</h4>
        </div>
    </div>
    )
}

export default Home;