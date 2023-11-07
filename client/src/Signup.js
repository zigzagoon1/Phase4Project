import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./context/current_user";
import { Link } from "react-router-dom";
function Signup() {
    const defaultValues = {
        name: "",
        username: "",
        password: "",
        password_confirmation: ""
    };

    const [values, setValues] = useState(defaultValues);
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

    const signupCompleteDiv = 
    <div id="sign-up-complete" className="container-flex text-center">
        <p>Signup complete!</p>
    </div>


    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: values.name, 
            username: values.username,
            password: values.password,
            password_confirmation: values.password_confirmation,
        }
        console.log(newUser)
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify(newUser),
        })
        .then(r => {
            if (r.ok) {
                r.json().then((createdUser) => {
                    console.log(createdUser)
                    setCurrentUser(createdUser);
                })
            }
            else {
                alert('Please be sure to fill in every line to create an account. Note that the username may already be taken, so try a new one if it is not working.');
                console.log(r)
            }
        })

    }

    function handleValueChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value,
        }) 
    }


    return( currentUser ? signupCompleteDiv : 
        <div id="signup" className="container-flex py-5">
        <form onSubmit={handleSubmit}>
               <div className="row justify-content-center">
                <label className="col-4 my-2" htmlFor="name">Name:</label>
                <input className="col-6 my-2" type="text" name="name" onChange={handleValueChange} value={values.name}></input>
                <label className="col-4 my-2" htmlFor="username">Username:</label>
                <input className="col-6 my-2" type="text" name="username" onChange={handleValueChange} value={values.username}></input>
                <label className="col-4 my-2" htmlFor="password">Password:</label>
                <input className="col-6 my-2" type="password" name="password" onChange={handleValueChange} value={values.password}></input>
                <label className="col-4 my-2" htmlFor="password_confirmation">Confirm Password:</label>
                <input className="col-6 my-2" type="password" name="password_confirmation" onChange={handleValueChange} value={values.password_confirmation}></input>
                <button className="col-3 my-4 btn btn-success" type="submit">Signup</button>
                <Link className=" col-12 btn btn-outline-dark bg-light" role="button" to="/login">Already a member? Login instead!
                </Link>
               </div>
            </form>
        </div>
    )
}

export default Signup;