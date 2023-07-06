import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [groups, setGroup] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className = "auth-form-container">
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "firstName">First Name</label>
                <input value = {firstName} onChange = {(e) => setFirstName(e.target.value)} name = "firstName" id = "firstName" placeholder = "First Name"/>
                <label htmlFor = "lastName">Last Name</label>
                <input value = {lastName} onChange = {(e) => setLastName(e.target.value)}name = "lastName" id = "lastName" placeholder = "Last Name"/>
                <label htmlFor = "email"> email </label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder="youremail@hotmail.com" id = "email" name = "email"/>
                <label htmlFor = "password"> password </label>
                <input value = {pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="**********" id = "password" name = "password"/>
                <label htmlFor = "password"> password </label>
                <input value = {groups} onChange = {(e) => setGroup(e.target.value)} type = "groups" placeholder="Groups" id = "groups" name = "groups"/>
                <button type = "submit">Sign up</button>
            </form>
            {/* <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button> */}
            <button onClick={()=>navigate(-1)}>Go Back to Login</button>
        </div>
    )
}

// const firstName = {firstName};
// const lastName = {lastName};
// const email = {email};
// const pass = {pass};
// const group = {group};

// fetch(URL, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": application/json,
//     },
//     body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//         username: email,
//         pass: pass,
//         groups: group
//     }),
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("this is data:", data);
//         navigate('/');
//     })
//     .catch(error => {
//         console.error("Invalid setup");
//     });