// utils/seedData.js
export const seedInitialData = () => {
  console.log('Checking initial data...');
  
  // Get existing users
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if any admin exists
  const adminExists = users.some(u => u.role === 'admin');
  
  if (!adminExists) {
    console.log('No admin found. Creating default admin...');
    
    // Create default admin
    const defaultAdmin = {
      id: 1001, // Using specific ID to avoid conflicts
      name: 'Dr. Admin Smith',
      email: 'admin@dentalclinic.com',
      password: 'Admin123!', // Stronger password
      phone: '555-0001',
      role: 'admin',
      createdAt: new Date().toISOString(),
      createdBy: 'system'
    };
    
    users.push(defaultAdmin);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Default admin created:');
    console.log('   Email: admin@dentalclinic.com');
    console.log('   Password: Admin123!');
  } else {
    console.log('✅ Admin already exists');
  }
  
  // Check if we have sample patients (optional)
  const patientCount = users.filter(u => u.role === 'patient').length;
  if (patientCount === 0) {
    console.log('No patients found. Creating sample patients...');
    
    // Create sample patients for testing
    const samplePatients = [
      {
        id: 2001,
        name: 'John Patient',
        email: 'john@example.com',
        password: 'Patient123!',
        phone: '555-1001',
        role: 'patient',
        createdAt: new Date().toISOString()
      },
      {
        id: 2002,
        name: 'Jane Patient',
        email: 'jane@example.com',
        password: 'Patient123!',
        phone: '555-1002',
        role: 'patient',
        createdAt: new Date().toISOString()
      },
      {
        id: 2003,
        name: 'Bob Patient',
        email: 'bob@example.com',
        password: 'Patient123!',
        phone: '555-1003',
        role: 'patient',
        createdAt: new Date().toISOString()
      }
    ];
    
    users.push(...samplePatients);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ 3 sample patients created');
  }
  
  // Seed sample appointments (optional)
  seedSampleAppointments(users);
};

// Optional: Create sample appointments for testing
const seedSampleAppointments = (users) => {
  const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  
  if (appointments.length === 0) {
    console.log('Creating sample appointments...');
    
    const patients = users.filter(u => u.role === 'patient');
    const today = new Date();
    
    const sampleAppointments = [
      {
        id: 3001,
        patientId: patients[0]?.id || 2001,
        patientName: patients[0]?.name || 'John Patient',
        date: new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0],
        time: '09:00',
        dentist: 'dr-smith',
        reason: 'Regular checkup',
        status: 'confirmed',
        createdAt: new Date().toISOString()
      },
      {
        id: 3002,
        patientId: patients[1]?.id || 2002,
        patientName: patients[1]?.name || 'Jane Patient',
        date: new Date(today.setDate(today.getDate() + 3)).toISOString().split('T')[0],
        time: '14:00',
        dentist: 'dr-jones',
        reason: 'Tooth pain',
        status: 'pending',
        createdAt: new Date().toISOString()
      },
      {
        id: 3003,
        patientId: patients[2]?.id || 2003,
        patientName: patients[2]?.name || 'Bob Patient',
        date: new Date(today.setDate(today.getDate() - 5)).toISOString().split('T')[0],
        time: '11:00',
        dentist: 'dr-wilson',
        reason: 'Cleaning',
        status: 'completed',
        createdAt: new Date().toISOString()
      }
    ];
    
    appointments.push(...sampleAppointments);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    console.log('✅ 3 sample appointments created');
  }
};