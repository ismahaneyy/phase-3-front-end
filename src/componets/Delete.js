import axios from "axios";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import React from "react";

function Delete({pet}) {
    const pets = useStore(petsKeeper);
    const handleDelete = () => {
      axios
        .delete(`https://sinatra-react-project.onrender.com/delete/pets/${pet.id}`)
        .then((r) =>
          r.status === 200
            ? axios
                .get("https://sinatra-react-project.onrender.com/pets")
                .then((r) => pets.setpetsKeeper(r.data))
            : console.log(r.status)
        );
    };
    return <button onClick={handleDelete}> Delete</button>;
  }

export default Delete;  