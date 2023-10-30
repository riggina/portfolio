import React from "react";
import Header from './components/Header.jsx'
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
