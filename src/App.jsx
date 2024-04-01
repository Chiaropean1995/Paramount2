import ProfilePage from './pages/ProfilePage'
import AboutUs from './pages/AboutUs'
import JointVenture from './pages/JointVenture'
import ContactUs from './pages/ContactUs'
import UpcomingProjects from './pages/UpcomingProjects'
import CompletedProjects from './pages/CompletedProjects'
import AdminManagement from './pages/AdminManagement'
import LoanCalculator from './pages/LoanCalculator'
import Gallery from "./pages/Gallery"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          <Routes>
            <Route path="*" element={<ProfilePage />} />
            <Route path="/upcomingprojects" element={<UpcomingProjects />} />
            <Route path="/loancalculator" element={<LoanCalculator />} />
            <Route path="/adminmanagement" element={<AdminManagement />} />
            <Route path="/CompletedProjects" element={<CompletedProjects />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/jointventure" element={<JointVenture />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
