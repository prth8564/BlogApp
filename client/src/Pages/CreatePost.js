
import {useState} from "react";
export default function CreatePost(){
    const[title,setTitle]=useState('');
    const[subject,setSubject]=useState('');
    const[content,setContent]=useState('');





    async function CreateNewPost(ev){
        const data = new FormData();
        data.set('title',title);
        data.set('subject',subject);
        data.set('content',content);
        var obj={};
        data.forEach(function(value,key){
            obj[key]=value;
        });
        var json=JSON.stringify(obj);
        
        ev.preventDefault();
        await fetch('http://localhost:4000/test',{
            method:'POST',
            headers: {
                'Content-type': 'application/Json'
              },
            body:json,
            
        });
        console.log("fetched")
    }










    return(
        <form onSubmit={CreateNewPost} method="post">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" onChange={ev=> {setTitle(ev.target.value)}} required></input>

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" onChange={ev=>{setSubject(ev.target.value)}} required></input>

        <label for="content">Content:</label>
        <textarea id="content" name="content" rows="4" onChange={ev=>{setContent(ev.target.value)}} required></textarea>

        <button type="submit">Submit</button>
        </form>
    );
}