import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){

    const [Username,SetUsername] = useState('');
    const [Password,SetPassword] = useState('');
    const [redirect,SetRedirect] = useState(false);
    const navigate = useNavigate();
    async function Login(ev){
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/login',{
            method:"POST",
            body:JSON.stringify({Username,Password}),
            headers:{'Content-type':'application/json'},
            credentials:'include'

        });
        if(response.status === 200){
            console.log(response.status ===200);
            SetRedirect(true);
            alert("login success");
        }
        else{
            alert('wrong cred');
        }
        if(redirect){
           
            console.log("gets here");
            return navigate("/");
        }
    }
    return(
        <form onSubmit={Login}>
            <label for="Username">Username</label>
            <input type="text" id="uname" name="uname" onChange={ev => SetUsername(ev.target.value)}  required/>

            <label for="Password"> Password</label>
            <input type="text" id="pwd" name="pwd" onChange={ev => SetPassword(ev.target.value)} required />

            <input type="submit" />
        </form> 

    )

}