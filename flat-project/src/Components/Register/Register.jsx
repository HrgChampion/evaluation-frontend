import axios from "axios"
import { useState } from "react"

export const Register=()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",

    })

    const addUser=()=>{
        axios.post(`http://localhost:2345/register`,{
            email:user.email,
            password:user.password,

        })
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const handleChange=(event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    return(
        <div>
          <form onSubmit={addUser}>
              <input name="email" type="text" placeholder="Enter Email" onChange={handleChange}/>
                <input name="password" type="text" placeholder="Enter password" onChange={handleChange}/>
                <input type="submit" value="Register"/>
          </form>
        </div>
    )
}