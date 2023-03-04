import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import { useState } from "react";
import axios from "axios";

function Edit({ pet }) {
  const pets = useStore(petsKeeper);
  const [showForm, setShowForm] = useState(false);
  const [editPet, setEditPet] = useState({
    name: pet.name,
    breed: pet.breed,
    image_url: pet.image_url,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    axios
      .patch(
        `https://sinatra-react-project.onrender.com/update/pets/${pet.id}`,
        editPet
      )
      .then((r) =>
        r.status === 200
          ? axios
              .get("https://sinatra-react-project.onrender.com/pets")
              .then((r) => pets.setpetsKeeper(r.data))
          : console.log(r.status)
      )
      .catch((error) => console.log(error));
  };

  if (showForm === false) {
    return (
      <button onClick={() => setShowForm(true)}>Update pet</button>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet name"
          value={editPet.name}
          onChange={(e) =>
            setEditPet({ ...editPet, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Pet breed"
          value={editPet.breed}
          onChange={(e) =>
            setEditPet({ ...editPet, breed: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="Pet image url"
          value={editPet.image_url}
          onChange={(e) =>
            setEditPet({ ...editPet, image_url: e.target.value })
          }
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default Edit;








