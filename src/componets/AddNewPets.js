import { useState } from "react"
import axios from "axios"
import { useStore } from "zustand"
import { petskeeper } from "../data/PetsKeeper"

function AddPet({user_id}){
    const pets = useStore(petskeeper)
    const [displayForm,setdisplayForm] = useState(false)
    const [newPet, setNewPet] = useState({
    "name":"",
    "breed": "", 
    "image_url": "",
    "user_id":user_id
    })
    //console.log(newPet)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setdisplayForm(false)
    console.log(newPet)
    axios.post(`https://ismahan-sinatra-backend.onrender.com/pet`,newPet).then((r) =>
    pets.setPetsKeeper([...pets.petsData, r.data])
);
    }

    if(displayForm === false){
        return <button 
        onClick={() => setdisplayForm(true)
        } >Add new pet</button>
    }else{
        return <form onSubmit={handleSubmit} >
        <input type="text" placeholder="name" onChange={(e) =>{
        setNewPet({...newPet, "name":e.target.value})
        }}></input>
        <input type="text" placeholder="breed" onChange={(e) =>{
        setNewPet({...newPet, "breed":e.target.value})
        }}></input>
        <input type="url" placeholder="image" onChange={(e) =>{
        setNewPet({...newPet, "image_url":e.target.value})
        }}></input>
        <button type="submit"  >Add new Pet</button>
        </form>
    }

}

export default AddPet;