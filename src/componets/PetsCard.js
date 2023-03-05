import { useStore } from "zustand";
import { petskeeper } from "../data/PetsKeeper";

function PetCard({pet}){
    const pets = useStore(petskeeper)
     return (
     <div className="petcard">
     <p  key={pet.id}>{pet.name}</p>
     <img src={pet.image_url}/>
     </div>)
}
export default PetCard;