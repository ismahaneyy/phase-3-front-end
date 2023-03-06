import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import AllPets from './views/PetsGallery';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Mypets from './views/UsersPets';



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mypets" element={<Mypets/>}/>
    <Route exact path="/allpets" element={<AllPets/>}/>
    </Routes>
    </Router>
  );
}

export default App;
