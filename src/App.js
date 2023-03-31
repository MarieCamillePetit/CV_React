/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className="notification"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/login" exact element={<Login />} />
          {/* <Route
            path="/project/:id"
            render={(props) => <Project id={props.match.params.id} />}
          /> */}
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré */}
          <Route path="*" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
