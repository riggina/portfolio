import React from "react";
import Header from './components/sections/Header.jsx'
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StickyProfile from "./components/sections/StickyProfile.jsx";


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <StickyProfile/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
