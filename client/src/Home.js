import React, { useContext, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "./context/current_user";
import { Button } from "react-bootstrap";

function Home() {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  const noCurrentUser = (
    <div className="container bg-light text-center py-5">
      <div className="row justify-content-center">
        <h6>Ready to start making some memes? </h6>
        <NavLink className="col-3 nav-link" to="/signup">
          Signup Here
        </NavLink>
        <h6>Already have an account?</h6>
        <NavLink className="col-3 nav-link" to="/login">
          Login Here
        </NavLink>
      </div>
    </div>
  );


  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    })
    .then(() => {
      setCurrentUser(null)
    })
  }

  return !currentUser ? (
    noCurrentUser
  ) : (
    <div className="container bg-light text-center py-5">
      <div className="row justify-content-center">
        <h4>Welcome, {currentUser.username}!</h4>
        <Button className="col-3" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Home;