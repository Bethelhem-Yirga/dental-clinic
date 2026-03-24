// components/patient/BookAppointment.jsx
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useAuth } from '../../contexts/AuthContext';

const BookAppointment = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useLocalStorage('appointments', []);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
    dentist: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAppointment = {
      id: Date.now(),
      patientId: user.id,
      patientName: user.name,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    setAppointments([...appointments, newAppointment]);
    alert('Appointment booked successfully!');
    // Reset form or redirect
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Time</label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            required
          >
            <option value="">Select time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Dentist</label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.dentist}
            onChange={(e) => setFormData({...formData, dentist: e.target.value})}
            required
          >
            <option value="">Select dentist</option>
            <option value="dr-smith">Dr. Smith</option>
            <option value="dr-jones">Dr. Jones</option>
            <option value="dr-wilson">Dr. Wilson</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Reason for visit</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            rows="3"
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;