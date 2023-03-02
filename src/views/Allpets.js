import PetCard from "../components/Petcard";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import Search from "../components/Search";
import AddPet from "../components/AddPet";
import { Link } from "react-router-dom";

function AllPets(){
    const pets = useStore(petsKeeper)
    console.log(pets.petsList)
    return (<>

    </>)
}

export default AllPets;