// pages/AboutPage.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AboutPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mission');

  const timeline = [
    {
      year: "2012",
      title: "The Beginning",
      description: "Dr. Mercy started MERCY Dental with a single chair and a big dream."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Moved to our current location with 5 treatment rooms and new technology."
    },
    {
      year: "2018",
      title: "Team Growth",
      description: "Added specialists in orthodontics, periodontics, and oral surgery."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented 3D imaging, digital impressions, and paperless records."
    },
    {
      year: "2024",
      title: "Today",
      description: "Proudly serving thousands of patients with 10+ expert doctors."
    }
  ];

  const values = [
    {
      icon: "❤️",
      title: "Compassion",
      description: "We treat every patient like family, with kindness and understanding."
    },
    {
      icon: "🔬",
      title: "Excellence",
      description: "Continuous learning and adopting the latest dental technologies."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honest recommendations and transparent pricing always."
    },
    {
      icon: "🌟",
      title: "Innovation",
      description: "Pioneering new techniques for better, faster results."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">About MERCY Dental</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Your trusted partner in dental health since 2012
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">12+</div>
              <div className="text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-gray-600">Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5000+</div>
              <div className="text-gray-600">Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-gray-600">Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container-custom py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {['mission', 'vision', 'story'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-semibold capitalize transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab === 'mission' ? '🎯 Our Mission' : tab === 'vision' ? '👁️ Our Vision' : '📖 Our Story'}
              </button>
            ))}
          </div>
          
          <div className="p-8">
            {activeTab === 'mission' && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide exceptional, personalized dental care that transforms smiles 
                  and improves lives. We believe everyone deserves a healthy, beautiful smile 
                  and we're committed to making that a reality for our patients through 
                  compassion, innovation, and excellence.
                </p>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  {['Quality Care', 'Patient First', 'Continuous Innovation'].map((item, idx) => (
                    <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="text-2xl mb-2 block">
                        {idx === 0 ? '🦷' : idx === 1 ? '❤️' : '✨'}
                      </span>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the leading dental clinic known for innovation, compassion, and 
                  excellence in patient care. We strive to create a world where dental visits 
                  are comfortable, stress-free, and even enjoyable.
                </p>
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Our Goals for 2025</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Open 3 new locations
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Implement AI-powered diagnostics
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      Serve 10,000+ patients annually
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'story' && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Journey</h2>
                <div className="space-y-6">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                      </div>
                      <div className="flex-grow border-l-2 border-blue-200 pl-6 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="service-card text-center">
                <div className="service-icon-wrapper w-20 h-20 mx-auto mb-4">
                  <span className="service-icon text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Tour */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                360° Virtual Tour
              </span>
              <h2 className="text-4xl font-bold mb-6">Take a Look Inside Our Clinic</h2>
              <p className="text-xl text-gray-300 mb-6">
                State-of-the-art facility designed for your comfort and safety
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Modern treatment rooms with natural light",
                  "Sterilization center with latest equipment",
                  "Comfortable waiting lounge with refreshments",
                  "Private consultation rooms",
                  "Children's play area"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Schedule a Visit
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Clinic interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold">
                  Play Video Tour ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience the MERCY Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have found their perfect smile with us
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg 
                     hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book Your First Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;