import { useState } from "react";
import { useEffect } from "react";
// import Register from "../componets/Register";
// import Login from "../componets/Login";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import axios from "axios";
import React from "react";
import Navbar from "./Navbar"

const Home = () => {
  
  return(
    <div>
      <Navbar/>

      <h1>Home Page</h1>
      <section>
        
      </section>  
      </div>
    
  )
}

export default Home;