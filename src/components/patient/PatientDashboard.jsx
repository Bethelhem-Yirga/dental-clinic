// components/patient/PatientDashboard.jsx
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const [appointments] = useLocalStorage('appointments', []);
  
  // Get user's appointments
  const userAppointments = appointments.filter(apt => apt.patientId === user?.id);
  const upcomingAppointments = userAppointments.filter(apt => 
    apt.status === 'confirmed' || apt.status === 'pending'
  );

  return (
    <div className="p-6">
      {/* Header with logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {user?.name}!
        </h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link to="/book-appointment">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Book Appointment</h2>
            <p>Schedule your next dental visit</p>
          </div>
        </Link>
        
        <Link to="/my-appointments">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">My Appointments</h2>
            <p>View your appointment history</p>
          </div>
        </Link>
      </div>

      {/* Upcoming appointments */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        {upcomingAppointments.length > 0 ? (
          <div className="space-y-3">
            {upcomingAppointments.map(apt => (
              <div key={apt.id} className="border p-4 rounded-lg">
                <p className="font-semibold">{apt.date} at {apt.time}</p>
                <p className="text-gray-600">Dr. {apt.dentist}</p>
                <p className="text-gray-600">Reason: {apt.reason}</p>
                <span className={`inline-block px-2 py-1 text-sm rounded mt-2 ${
                  apt.status === 'confirmed' ? 'bg-green-200' : 'bg-yellow-200'
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No upcoming appointments</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;