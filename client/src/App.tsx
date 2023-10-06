import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Seller from './pages/Seller';

function App() {
  return (
    <>
      <Routes>
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
