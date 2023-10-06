import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/customer/services";
import Profile from "./pages/customer/profile";
import Dashboard from "./pages/customer/dashboard";
import Seller from "./pages/Seller";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Seller/DashBoard" element={<Seller />} />
        {/* <Route path="/Seller/Performance" element={<Performance />} />
        <Route path="/Seller/Complaint-Service" element={<Complaint />} />
        <Route path="/Seller/Support-Service" element={<Support />} /> */}
      </Routes>
    </>
  );
}

export default App;
