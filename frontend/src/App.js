import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/Signup";
import Login from "./pages/login";
import Admin from "./pages/Admin";
import Vendor from "./pages/Vendor";
import Product from "./pages/Product";
import BuyProduct from "./pages/BuyProduct";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  return (
    <>
    {location.pathname === "/GVM_Assig_React_App/" ? (
        <Login />
      ) : location.pathname === "/signup" ? (
        <SignUp />
      ) : location.pathname === "/product" ? (
        <Product />
      ) : location.pathname === "/product/:id" ? (
        <Product />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/customer" element={<Home />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/buyproduct" element={<BuyProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
