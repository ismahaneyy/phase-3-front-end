import { create } from "zustand";

const thePetsData = (set) =>({
    petsList:[],
    setpetsKeeper:(pet) =>{
        set((state) =>({
            petsList:pet
        })) 
    }
    })
    const petsKeeper = create(thePetsData)
    
export {petsKeeper};