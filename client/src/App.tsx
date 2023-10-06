import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SellerDashboard from './pages/SellerDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Seller-Dashboard" element={<SellerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
