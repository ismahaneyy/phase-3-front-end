import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import { useState } from "react";
import axios from "axios";

function Edit({pet}){
    const pets = useStore(petsKeeper)
    const [showForm,setShowForm] = useState(false)
    const [editPet, setEditPet] = useState({
    "name" : "",
    "breed" : "",
    "image_url" : ""
    })
    console.log(editPet)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setShowForm(false)
    axios
    .patch(`https://philoxenia.onrender.com/update/pets`)
    .then((r) =>
      r.status === 200
        ? axios
            .get("https://philoxenia.onrender.com/pets")
            .then((r) => pets.setpetsKeeper(r.data))
        : 
    console.log(r.status)
    );
    }
    
}