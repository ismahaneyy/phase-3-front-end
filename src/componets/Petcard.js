import React from "react";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import Delete from "./Delete";

function PetCard({pet}){
    const pets = useStore(petsKeeper)
     return (
     <>
     <p key={pet.id}>{pet.name}</p>
     <img src={pet.image}/>
     </>)
}
export default PetCard;