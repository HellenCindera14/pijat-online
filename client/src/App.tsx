import { Route, Routes } from "react-router-dom";
import DashboardCs from "./pages/customer/dashboardcs";
import ProfileCS from "./pages/customer/profilecs";
import Services from "./pages/customer/services";
import ServiceRefleksi from "./pages/customer/serviceRefleksi";
import ServicePijatUrut from "./pages/customer/servicePijatUrut";
import ServiceKretek from "./pages/customer/serviceKretek";
import Home from "./pages/home";
import Dashboardkp from "./pages/kape/dashboardkp";
import Complaint from "./pages/kape/complaint";
import Support from "./pages/kape/support";
import Performance from "./pages/kape/Performance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* customet */}
        <Route path="/cs/dashboard" element={<DashboardCs />} />
        <Route path="/cs/services" element={<Services />} />
        <Route path="/cs/profile" element={<ProfileCS />} />
        <Route path="/cs/services/pijat_refleksi" element={<ServiceRefleksi />} />
        <Route path="/cs/services/pijat_urut" element={<ServicePijatUrut />} />
        <Route path="/cs/services/pijat_kretek" element={<ServiceKretek />} />

        {/* kape */}
        <Route path="/kape/dashboard" element={<Dashboardkp />} />
        <Route path="/kape/performance" element={<Performance />} />
        <Route path="/kape/complaint" element={<Complaint />} />
        <Route path="/kape/Support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
