// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Public Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import FeedbackPage from './pages/FeedbackPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Auth Pages
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminRegister from './components/auth/AdminRegister';

// Protected Patient Pages
import PatientDashboard from './components/patient/PatientDashboard';
import BookAppointment from './components/patient/BookAppointment';
import MyAppointments from './components/patient/MyAppointments';

// Protected Admin Pages
import AdminDashboard from './components/admin/AdminDashboard';

// Layout Component (Header/Footer for public pages)
import PublicLayout from './components/layout/PublicLayout';

const ProtectedRoute = ({ children, requiresAdmin = false }) => {
  const { user, isAdmin } = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  if (requiresAdmin && !isAdmin) return <Navigate to="/patient-dashboard" />;
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        
        {/* Protected Patient Routes */}
        <Route path="/patient-dashboard" element={
          <ProtectedRoute>
            <PatientDashboard />
          </ProtectedRoute>
        } />
        <Route path="/book-appointment" element={
          <ProtectedRoute>
            <BookAppointment />
          </ProtectedRoute>
        } />
        <Route path="/my-appointments" element={
          <ProtectedRoute>
            <MyAppointments />
          </ProtectedRoute>
        } />
        
        {/* Protected Admin Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute requiresAdmin={true}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;