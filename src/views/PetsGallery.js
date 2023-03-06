import PetCard from "../componets/PetsCard";
import { useStore } from "zustand";
import { petskeeper} from "../data/PetsKeeper";
import Search from "../componets/SearchForPets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AllPets() {
  const pets = useStore(petskeeper);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    // This will be the fetch to a specific user's pets
    axios.get('https://ismahan-sinatra-backend.onrender.com/pets')
      .then((r) => setMyPets(r.data));
  }, []);

  useEffect(() => {
    pets.setPetsKeeper(myPets);
  }, [myPets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Petfinder</h1>
        <Link exact to="/" className="link">Home</Link>
        <Search />
      </div>
      <div className="pets-container">
        {pets.petsData.map((pet) => (
          <PetCard pet={pet} key={pet.id} />
        ))}
      </div>
    </>
  );
}

export default AllPets;