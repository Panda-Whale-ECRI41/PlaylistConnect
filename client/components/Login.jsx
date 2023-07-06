import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "auth-form-container">
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "email" > email </label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder="youremail@hotmail.com" id = "email" name = "email"/>
                <label htmlFor = "password"> password </label>
                <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="**********" id = "password" name = "password"/>
                <button onClick={()=> navigate("/home")}>Login</button>
            </form>
            {/* <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button> */}
            <button onClick={()=> navigate("/register")}>Don't have an account? Register here.</button>
        </div>
    )
}

// const email = {email};
// const pass = {pass};

// fetch(URL, {
//     method: "P",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         username: email,
//         password: pass,
//     }),
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         if (data.error) {
//             alert("Wrong Username/Password")
//         } else {
//             Navigate("/home");
//         }
//     })
//     .catch((err) => {
//         console.log("Need to doublecheck username/password");
//     });

export default Login;