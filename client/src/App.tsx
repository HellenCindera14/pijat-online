import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LoginCs from "./pages/auth/LoginCs";
import LoginKp from "./pages/auth/LoginKp";
import RegisterCs from "./pages/auth/RegisterCs";
import RegisterKp from "./pages/auth/RegisterKp";
import DashboardCs from "./pages/customer/dashboardcs";
import DashboardAd from "./pages/admin/dashboardAd";
import Customer from "./pages/admin/customer";
import Kape from "./pages/admin/kape";
import ComplaintAd from "./pages/admin/complaintAd";
import DetailComplaint from "./pages/admin/detailComplaint";
import SupportAd from "./pages/admin/supportAd";
import KpPijatRefleksi from "./pages/admin/KpPijatRefleksi";
import KpPijatUrut from "./pages/admin/KpPijatUrut";
import KpPijatKretek from "./pages/admin/KpPijatKretek";
import KpFormEdit from "./pages/admin/KpFormEdit";
import ProfileCS from "./pages/customer/profilecs";
import ServiceKretek from "./pages/customer/serviceKretek";
import ServicePijatUrut from "./pages/customer/servicePijatUrut";
import ServiceRefleksi from "./pages/customer/serviceRefleksi";
import Services from "./pages/customer/services";
import Home from "./pages/home";
import ConnectionCS from "./pages/connectionCs";
import ConnectionKp from "./pages/connectionKp";
import Performance from "./pages/kape/Performance";
import Dashboardkp from "./pages/kape/dashboardkp";
import Support from "./pages/kape/support";
import Profile from "./pages/kape/profile";
// import { Routes }  from "react-router-dom";

function IsLogin() {
  if (!localStorage.token) {
    return <Navigate to={"/"}/>
  } else {
    return <Outlet/>  
  }
}

function IsNotLogin() {
  if (localStorage.token) {
    return <Navigate to={"/"}/> 
  } else {
    return <Outlet/>
  }
}

function App() {
  return (
    <>
      <Routes>
        {/* connection */}
        <Route path="/v1" element={<ConnectionCS />} />
        <Route path="/v2" element={<ConnectionKp />} />
        {/* Auth */}
        <Route path="/cs" element={<IsNotLogin/>}>
          <Route path="register" element={<RegisterCs />} />
          <Route path="login" element={<LoginCs />} />
        </Route>
        <Route path="/kape" element={<IsNotLogin/>}>
          <Route path="register" element={<RegisterKp />} />
          <Route path="login" element={<LoginKp />} />
        </Route>

        {/* home */}
        <Route path="/" element={<Home />} />
        {/* admin */}
        <Route path="/admin" element={<IsLogin/>}>
          <Route path="dashboard" element={<DashboardAd />} />
          <Route path="cs" element={<Customer />} />
          <Route path="kape" element={<Kape />} />
          <Route path="kape/edit" element={<KpFormEdit />} />
          <Route path="complaint" element={<ComplaintAd />} />
          <Route path="detail-complaint/" element={<DetailComplaint />} />
          <Route path="support" element={<SupportAd />} />
          <Route path="pijat-urut" element={<KpPijatUrut />} />
          <Route path="pijat-kretek" element={<KpPijatKretek />} />
          <Route path="pijat-refleksi" element={<KpPijatRefleksi />} />
        </Route>

        {/* customet */}
        <Route path="/cs" element={<IsLogin/>}>
          <Route path="dashboard" element={<DashboardCs />} />
          <Route path="services" element={<Services />} />
          <Route path="profile" element={<ProfileCS />} />
          <Route path="services/pijat_refleksi" element={<ServiceRefleksi />} />
          <Route path="services/pijat_urut" element={<ServicePijatUrut />} />
          <Route path="services/pijat_kretek" element={<ServiceKretek />} />
        </Route>

        {/* kape */}
        <Route path="/kape" element={<IsLogin/>}>
          <Route path="dashboard" element={<Dashboardkp />} />
          <Route path="performance" element={<Performance />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
