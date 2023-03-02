import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import axios from "axios";
import { useState,useEffect } from "react";

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

        </>
)

}

export default Mypets