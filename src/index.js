import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,
    Route, } from "react-router-dom";
import App from "./App";
import OrderPage from "./components/Pages/OrderPage";
import MenuPage from "./components/Pages/MenuPage";
import LocationPage from "./components/Pages/LocationPage"
import './index.css';
import CartProvider from "./store/CartProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <CartProvider>
  <BrowserRouter>   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/menuPage' element={<MenuPage/>}/>
      <Route path='/orderPage' element={<OrderPage/>}/>
      <Route path='/locationPage' element={<LocationPage/>}/>
    </Routes>
  </BrowserRouter>
  </CartProvider>
 
);
