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
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Add overflow-x: hidden to the body element when navigating to any route
    document.body.style.overflowX = 'hidden';

    return () => {
      // Cleanup the effect when component unmounts
      document.body.style.overflowX = ''; // Reset overflow-x to its default value
    };
  }, [location]);
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
