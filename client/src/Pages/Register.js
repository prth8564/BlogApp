import {useState} from 'react';

export default function Register(){
    const [Username,SetUsername] = useState('');
    const [Password,SetPassword] = useState('');

    async function register(ev){
        ev.preventDefault();


        const response = await fetch('http://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify({Username,Password}),
            headers: {'Content-Type':'application/json'}
        });
        console.log(response.status);
        if(response.status === 200){
            alert('registration successful');
        }
        else{
            alert('registration failed');
        }
    }

    return(
        <form className="register" onSubmit={register}>
            <label for="Username"> Username</label>
            <input type="Text" id="Uname" name="Uname" onChange={ev => SetUsername(ev.target.value)} required />

            <label for="Password">Password</label>
            <input type="Text" id="pwd" name="pwd" onChange={ev=> SetPassword(ev.target.value)} required />

            <input type="submit"></input>
        </form>
    ) 
}