import axios from "axios";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";

function Delete({pet}) {
    const pets = useStore(petsKeeper);
    const handleDelete = () => {
      axios
        .delete(`https://philoxenia.onrender.com/delete/pets/${pet.id}`)
        .then((r) =>
          r.status === 200
            ? axios
                .get("https://philoxenia.onrender.com/pets")
                .then((r) => pets.setpetsKeeper(r.data))
            : console.log(r.status)
        );
    };
    return <button onClick={handleDelete}> Delete</button>;
  }