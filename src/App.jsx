// Import npm packages
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/auth/Dashboard";
import Product from "./pages/product/Product";
import NotFound from "./pages/NotFound";

// Import components
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* AUT PAGES */}
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/dashboard" element={<Dashboard />} />

        {/* PRODUCT PAGES */}
        <Route path="/product/products" element={<Product />} />

        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
