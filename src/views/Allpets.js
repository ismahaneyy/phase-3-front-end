import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";

function AllPets(){
    const pets = useStore(petsKeeper)
    console.log(pets.petsList)
    return (<>

    </>)
}

export default AllPets;