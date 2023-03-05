import { useState } from "react"
import axios from "axios"
//
function Register({changeForm}){
    const [newPetOwner,setnewPetOwner] = useState({
        "username" :"",
        "password" : ""
    })
    console.log(newPetOwner)
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://ismahan-sinatra-backend.onrender.com/user",newPetOwner)
        changeForm()
    }
    return(
        <div >
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Enter username"onChange={(e) => setnewPetOwner({...newPetOwner,username:e.target.value})}></input>
            <input type="password" placeholder="Enter password"  onChange={(e) => setnewPetOwner({...newPetOwner,password:e.target.value})}></input>
            <button >Register</button>
        </form>
        </div>
    )
    }

export default Register