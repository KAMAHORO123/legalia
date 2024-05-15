import React from "react";
import Home from "./components/Home/Home";
import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
