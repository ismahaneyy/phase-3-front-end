import axios from "axios";
import { useStore } from "zustand";
import { petskeeper } from "../data/PetsKeeper";

function Search(){
const pets = useStore(petskeeper)
const handleSearch = (e) => {
    console.log(e.target.value)
axios.post("https://ismahan-sinatra-backend.onrender.com/pets/search_all",{
    query: e.target.value
}).then( (r) =>
    pets.setPetsKeeper(r.data)
)
} 
return(
<input  type="text" placeholder="Search by name or breed" onChange={handleSearch}></input>
)
}
export default Search;