import { useStore } from "zustand";
import { petskeeper } from "../data/PetsKeeper";
import PetCard from "../componets/PetsCard";
import Delete from "../componets/DeletePets";
import Edit from "../componets/EditPets";
import AddPet from "../componets/AddNewPets"
import { Link } from "react-router-dom";

function Mypets() {
  const myPets = useStore(petskeeper);

  return (
    <div className="container">
      <h1>Petfinder</h1>
      <div className="links">
        <Link to="/allpets" className="link">
          View all pets
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <div className="add-pet">

          <AddPet className='add-pet' user_id={myPets.petsData.user_id} />
        </div>
      </div>
      <div className="card-container">
        {myPets.petsData.map((pet) => (
          <div key={pet.id}>
            <PetCard pet={pet} />
            <div className="pet-buttons">
              <Delete pet={pet} />
              <Edit pet={pet} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mypets;
