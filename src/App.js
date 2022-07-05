import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";


function App() {
  return (
    <React.Fragment>
      <HomePage />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
