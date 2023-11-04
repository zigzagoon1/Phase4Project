import React, { useState } from "react";


function AddCat() {
    const [values, setValues] = useState({name: '', url: '', })
    const [error, setError] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        const newCat = {name: values.name, photo_url: values.url, alt: values.name}
        
        fetch('/cats', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(newCat)
        })
        .then((r) => {
            if (r.ok) {
                r.json()
        .then((cat) => {
            if (cat.name && cat.photo_url) {
                console.log(cat)
                setError('')
            }
            else {
                setError('Submission failed. Please check the URL, and be sure to give the cat a name.')
            }
        })}
})
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    return (
        <div className="bg-light my-5">
            <form className="p-2" onSubmit={handleSubmit}>
                <label className="px-2" htmlFor="name">Name:</label>
                <input className="col-6" name="name" type="text" onChange={handleChange}></input>
                <br></br>
                <label className="px-3" htmlFor="url">URL:</label>
                <input className="col-6" name="url" type="text" onChange={handleChange} value={values.url}></input>
                <br></br>
                <button className="mx-5 my-3 px-3" type="submit">Submit</button>
            </form>
            <div className="col-12">{error}</div>

        </div>
    )
}


export default AddCat;