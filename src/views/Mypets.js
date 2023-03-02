import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import axios from "axios";
import { useState,useEffect } from "react";
import PetCard from "../components/Petcard";
import Delete from "../components/Delete";
import Edit from "../components/Edit";
import Search from "../components/Search";
import AddPet from "../components/AddPet";
import { Link } from "react-router-dom";

function Mypets(){
    const myPets = useStore(petsKeeper);
    const [pets, setPets] = useState([]);
    useEffect(() => {
        //this will be the fetch to a specific users pets
        axios.get("https://philoxenia.onrender.com/pets").then((r) => setPets(r.data));
            }, []);
            useEffect(() => {
              myPets.setpetsKeeper(pets);
            }, [pets]);
    return(
            <>
    <Link exact to="/allpets"><p>View all pets</p></Link>
    <Link exact to="/"><p>Logout</p></Link>
    <Search/>
    <AddPet/>
        {
    myPets.petsList.map((pet)=>{
        return <>
        <PetCard pet={pet}/>
        <Delete pet={pet}/>
        <Edit pet={pet}/>
        </>
    })
}
        </>
)

}

export default Mypets