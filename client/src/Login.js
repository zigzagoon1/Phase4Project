import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./context/current_user";

function Login() {
    const defaultvalues = {
        username: '',
        password: ''
    }

    const [values, setValues] = useState(defaultvalues);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

    const formDiv = 
    <div>
            <form onSubmit={handleSubmit}>
       <div className="row justify-content-center">
        <label className="col-4 my-2" htmlFor="username">Username:</label>
        <input className="col-6 my-2" type="text" name="username" onChange={handleValueChange} value={values.username}></input>
        <label className="col-4 my-2" htmlFor="password">Password:</label>
        <input className="col-6 my-2" type="password" name="password" onChange={handleValueChange} value={values.password}></input>
        <button className="col-3 my-4 btn btn-success" type="submit">Login</button>
       </div>
    </form>
    </div>


    async function handleSubmit(e) {
        e.preventDefault();
        if (!currentUser) {
            const userCredentials = {
                username: values.username,
                password: values.password
            }

            await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentials)
            })
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then((user) => {
                        setCurrentUser(user);
                    })
                }
            })
        }
    }

    function handleValueChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value,})
    }


    return( !currentUser ? formDiv : 
        <div className="justify-content-center">
            <p className="text-center">Login successful!</p>
        </div>
    )
}


export default Login;