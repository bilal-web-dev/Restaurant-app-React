import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Create from "./Create";
import Update from "./Update";
import Search from "./Search";
import Login from "./Login";
import "./App.css";
import NavBarMenu from "./NavBarMenu";
import Logout from "./Logout";
import Protect from "./Protect";

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
