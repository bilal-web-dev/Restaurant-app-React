import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";
import Search from "./components/Search";
import Login from "./components/Login";
import "./App.css";
import NavBarMenu from "./components/NavBarMenu";
import Logout from "./components/Logout";
import Protect from "./components/Protect";

const App = () => {
  return (
    <div>
      <Router>
        <NavBarMenu />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/search" element={<Protect Component={Search} />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/create" element={<Protect Component={Create} />} />
          <Route path="/list" element={<Protect Component={List} />} />
          <Route exact path="/" element={<Protect Component={Home} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
