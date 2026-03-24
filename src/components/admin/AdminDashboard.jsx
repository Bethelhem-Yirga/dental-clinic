// components/admin/AdminDashboard.jsx
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState } from 'react';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useLocalStorage('appointments', []);
  const [patients, setPatients] = useLocalStorage('users', []);
  const [filter, setFilter] = useState('all');

  const updateAppointmentStatus = (appointmentId, newStatus) => {
    const updated = appointments.map(apt => 
      apt.id === appointmentId ? {...apt, status: newStatus} : apt
    );
    setAppointments(updated);
  };

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Appointments</h3>
          <p className="text-3xl font-bold">{appointments.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-3xl font-bold">{patients.filter(p => p.role === 'patient').length}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-3xl font-bold">
            {appointments.filter(apt => apt.status === 'pending').length}
          </p>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Manage Appointments</h2>
          <select 
            className="border rounded px-3 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Patient</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Time</th>
              <th className="text-left py-2">Dentist</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map(apt => (
              <tr key={apt.id} className="border-b">
                <td className="py-2">{apt.patientName}</td>
                <td>{apt.date}</td>
                <td>{apt.time}</td>
                <td>{apt.dentist}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-sm ${
                    apt.status === 'confirmed' ? 'bg-green-200' :
                    apt.status === 'pending' ? 'bg-yellow-200' :
                    apt.status === 'completed' ? 'bg-blue-200' :
                    'bg-red-200'
                  }`}>
                    {apt.status}
                  </span>
                </td>
                <td>
                  <select
                    className="border rounded px-2 py-1 text-sm"
                    value={apt.status}
                    onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirm</option>
                    <option value="completed">Complete</option>
                    <option value="cancelled">Cancel</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;