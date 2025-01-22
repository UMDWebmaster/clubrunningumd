import { useState } from "react";
import React from "react";
import axios from 'axios';


export default function Login(){
    const [uname,setUsername] = useState("")
    const [pwd,setPwd] = useState("")
    function verify(){
        console.log("U:"+uname+"P:"+pwd)
        const form_data = new FormData()
        form_data.append('username',uname)
        form_data.append('password',pwd)
       
        axios.post('https://marylandclubrunningblogapi.vercel.app/login',form_data)
        .then(resp => console.log(resp.data))
        .catch(error => error.response)
    }
    return (

        <>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
    

            <h1>Login</h1>
           
                <input type="text" onChange={(event)=> setUsername(event.target.value)} name="user" placeholder="username"></input>
                <br></br>
                <input type="password" name="pwd" placeholder="password" onChange={(event)=> setPwd(event.target.value)}></input>
                <br></br>
                <button onClick={verify} style={{backgroundColor:'gold',padding:4,borderRadius:6}} >Login</button>
           
        </>
    );
}