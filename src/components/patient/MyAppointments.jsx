// components/patient/MyAppointments.jsx
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
  const { user } = useAuth();
  const [appointments] = useLocalStorage('appointments', []);
  
  const userAppointments = appointments
    .filter(apt => apt.patientId === user?.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
        <Link 
          to="/patient-dashboard"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {userAppointments.length > 0 ? (
          <div className="space-y-4">
            {userAppointments.map(apt => (
              <div key={apt.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-semibold">
                      {new Date(apt.date).toLocaleDateString()} at {apt.time}
                    </p>
                    <p className="text-gray-600">Dentist: Dr. {apt.dentist}</p>
                    <p className="text-gray-600">Reason: {apt.reason}</p>
                    <p className="text-gray-600">
                      Booked on: {new Date(apt.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    apt.status === 'confirmed' ? 'bg-green-200 text-green-800' :
                    apt.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                    apt.status === 'completed' ? 'bg-blue-200 text-blue-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No appointments found</p>
            <Link 
              to="/book-appointment"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Book Your First Appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;