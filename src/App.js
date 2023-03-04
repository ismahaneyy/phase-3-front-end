// import logo from './logo.svg';
import React from 'react';
import Home from './views/Home';
import PetCard from './componets/Petcard';
import Search from './componets/Search';
import Mypets from './views/Mypets';
import AllPets from './views/Allpets';
import Navbar from './views/Navbar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from './componets/Register';
import AddPet from './componets/AddPets';
import Login from './componets/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/addpet" element={<AddPet/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/mypets" element={<Mypets/>}/>
        <Route exact path="/allpets" element={<AllPets/>}/>
      </Routes>
    </Router>
  );
}

export default App;
