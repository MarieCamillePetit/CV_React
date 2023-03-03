import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/login" exact element={<Login />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré */}
          <Route path="*" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
