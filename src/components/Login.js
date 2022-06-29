import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import { set ,ref} from 'firebase/database';
import Application from './Application';
import University from './University';


import fireDB from '../firebase';


function Login() {

    const navigate = useNavigate();

    const adminUser = {
        email: "rajkumar776591@gmail.com",
        password: "raj123"
    }
    const [details, setDetails] = useState("")

    const [User, setUser] = useState({ name: "", email: "", password: ""  });
    const [error, setError] = useState("");
    

    //const Login = details => {
       //console.log(details);

       const submitHandler =(e) => {
            e.preventDefault();
        

            if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged in");
            navigate('/application');
            //setUser({
                // name: details.name,
                //email: details.email
            //});
            //  navigate('/user');
            console.log("hhhh hh h  "+details.name)
            
            set(ref(fireDB, "Users/raj"),
            {name: details.name,
            email: details.email})


        } else {
            console.log("Details do not match!");
            alert("Details do not match!");
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <br/>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}
export default Login;