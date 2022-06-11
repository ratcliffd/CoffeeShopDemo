import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,
    Route, } from "react-router-dom";
import App from "./App";
import OrderPage from "./components/Pages/OrderPage";
import MenuPage from "./components/Pages/MenuPage";
import LocationPage from "./components/Pages/LocationPage"
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/orderPage" element={<OrderPage />} />
      <Route path="/pages/menuPage" element={<MenuPage />} />
      <Route path="/pages/locationPage" element={<LocationPage />} />
    </Routes>
  </BrowserRouter>
 
);
