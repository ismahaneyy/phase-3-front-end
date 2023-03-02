import { useState } from "react";
import { useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { useStore } from "zustand";
import { petsKeeper } from "../data/PetsStore";
import axios from "axios";

function Home() {
    return (<>
     <h1>Hi, welcome to Petfinder!</h1>
    </>);
}

export default Home;