import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage";
import MenuPage from "./components/Pages/MenuPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menuPage" element={<MenuPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
