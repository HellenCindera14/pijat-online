import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/customer/services";
import Profile from "./pages/customer/profile";
import Dashboard from "./pages/customer/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
