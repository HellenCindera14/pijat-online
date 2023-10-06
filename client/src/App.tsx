import { Route, Routes } from "react-router-dom";
import LoginCs from "./pages/auth/LoginCs";
import LoginKp from "./pages/auth/LoginKp";
import RegisterCs from "./pages/auth/RegisterCs";
import RegisterKp from "./pages/auth/RegisterKp";
import DashboardCs from "./pages/customer/dashboardcs";
import DashboardAd from "./pages/admin/dashboardAd";
import Customer from "./pages/admin/customer";
import Kape from "./pages/admin/kape";
import ComplaintAd from "./pages/admin/complaintAd";
import SupportAd from "./pages/admin/supportAd";
import ProfileCS from "./pages/customer/profilecs";
import ServiceKretek from "./pages/customer/serviceKretek";
import ServicePijatUrut from "./pages/customer/servicePijatUrut";
import ServiceRefleksi from "./pages/customer/serviceRefleksi";
import Services from "./pages/customer/services";
import Home from "./pages/home";
import ConnectionCS from "./pages/connectionCs";
import ConnectionKp from "./pages/connectionKp";
import Performance from "./pages/kape/Performance";
import Complaint from "./pages/kape/complaint";
import Dashboardkp from "./pages/kape/dashboardkp";
import Support from "./pages/kape/support";

function App() {
  return (
    <>
      <Routes>
        {/* connection */}
        <Route path="/v1" element={<ConnectionCS />} />
        <Route path="/v2" element={<ConnectionKp />} />
        {/* Auth */}\
        <Route path="/cs/register" element={<RegisterCs />} />
        <Route path="/cs/login" element={<LoginCs />} />
        <Route path="/kape/register" element={<RegisterKp />} />
        <Route path="/kape/login" element={<LoginKp />} />
        {/* home */}
        <Route path="/" element={<Home />} />
        {/* admin */}
        <Route path="/admin/dashboard" element={<DashboardAd />} />
        <Route path="/admin/cs" element={<Customer />} />
        <Route path="/admin/kape" element={<Kape />} />
        <Route path="/admin/complaint" element={<ComplaintAd />} />
        <Route path="/admin/support" element={<SupportAd />} />
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
