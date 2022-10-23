import { Fragment } from 'react';
import '../src/Assets/App.css';
import NavBar from './Layout/NavBar';
import ItemlistContainer from './Components/ItemlistContainer';
import Footer from './Layout/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemlistContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemlistContainer/>} />
      <Route path="/:categoria/:libroID" element={<ItemDetailContainer/>} />

      
      </Routes>


    </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
