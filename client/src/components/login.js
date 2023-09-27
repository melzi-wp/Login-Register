import React from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/", {
                email, password
            });
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div className='login'>

            <h1>Login</h1>

            <form action = "POST">
                <input type = "email" onChange = {(e) => {setEmail(e.target.value)}} plaseholder = "Email" name = "" id = "" />
                <input type = "password" onChange = {(e) => {setPassword(e.target.value)}} plaseholder = "Password" name = "" id = "" />
                <input type = "submit" onClick = {submit} />
            </form>

            <br/>
            <p>OR</p>
            <br />

            <Link to= "/register">SignUp Page</Link>

        </div>
    );
};

export default login;