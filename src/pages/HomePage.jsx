// pages/HomePage.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Modern Dental Care",
      subtitle: "Experience the future of dentistry"
    },
    {
      url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Expert Team",
      subtitle: "Led by top specialists"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Pain-Free Treatment",
      subtitle: "Your comfort is our priority"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleBookClick = () => {
    navigate('/login', { state: { from: 'book-appointment' } });
  };

  // Card data for the 3 cards
  const cardData = [
    {
      title: "Quality Standards",
      description: "Highest standards of dental care and hygiene with ISO certification. We use premium materials and follow strict sterilization protocols.",
      icon: "🏆",
      gradient: "135deg, #6293c8, #384c6c"
    },
    {
      title: "Expert Team",
      description: "Our specialists have 15+ years of experience in cosmetic and general dentistry. Continuous learning and adoption of latest techniques.",
      icon: "👨‍⚕️",
      gradient: "135deg, #c86293, #6c384c"
    },
    {
      title: "Pain-Free Care",
      description: "Advanced technology and gentle techniques ensure comfortable, anxiety-free dental experiences. Sedation options available.",
      icon: "😊",
      gradient: "135deg, #62c893, #386c4c"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Slider */}
      <section className="relative h-screen max-h-[900px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-10000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-3xl text-white">
                  <p className="text-blue-400 font-semibold mb-4 tracking-wider animate-fade-in-up">
                    WELCOME TO MERCY DENTAL
                  </p>
                  <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                    {image.title}
                  </h1>
                  <p className="text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-400">
                    {image.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-600">
                    <button
                      onClick={handleBookClick}
                      className="btn-primary text-lg"
                    >
                      Book Appointment
                    </button>
                    <Link
                      to="/services"
                      className="btn-secondary text-lg border-white text-white hover:bg-white/10"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative h-1 rounded-full transition-all duration-500 ${
                index === currentImage 
                  ? 'w-12 bg-white' 
                  : 'w-6 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="shape-1 absolute top-0 left-0"></div>
        <div className="shape-2 absolute bottom-0 right-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <div className="text-5xl font-bold gradient-text mb-2">1500+</div>
              <div className="text-gray-600 font-medium">Trusted Patients</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full group-hover:w-24 transition-all"></div>
            </div>
            <div className="stat-card">
              <div className="text-5xl font-bold gradient-text mb-2">2000+</div>
              <div className="text-gray-600 font-medium">Happy Reviews</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full group-hover:w-24 transition-all"></div>
            </div>
            <div className="stat-card">
              <div className="text-5xl font-bold gradient-text mb-2">4.5+</div>
              <div className="text-gray-600 font-medium">Star Rating</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full group-hover:w-24 transition-all"></div>
            </div>
            <div className="stat-card">
              <div className="text-5xl font-bold gradient-text mb-2">ISO 9000</div>
              <div className="text-gray-600 font-medium">Certified</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full group-hover:w-24 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Uiverse Cards Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4 inline-block">Why Choose Us</span>
            <h2 className="section-title">We promise complete relief</h2>
            <p className="section-subtitle mt-8">
              Your comfort and satisfaction are our top priorities
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
              <div key={index} className="uiverse-card">
                <div className="card-icon">{card.icon}</div>
                <p className="card-title">{card.title}</p>
                <p className="small-desc">{card.description}</p>
                <div className="go-corner" style={{ background: `linear-gradient(${card.gradient})` }}>
                  <div className="go-arrow">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Why MERCY?
              </span>
              <h2 className="text-5xl font-bold mb-8">
                Experience Dental Care 
                <span className="block text-yellow-300">Like Never Before</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { icon: "👨‍⚕️", title: "Expert Team", desc: "Specialized dentists with 10+ years experience" },
                  { icon: "🔬", title: "Modern Technology", desc: "3D imaging, laser dentistry, pain-free treatments" },
                  { icon: "🏥", title: "Comfortable Environment", desc: "Spa-like atmosphere with sedation options" },
                  { icon: "⏰", title: "Flexible Hours", desc: "Evening and weekend appointments available" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleBookClick}
                className="mt-12 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300
                         flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <span className="group-hover:translate-x-2 transition">→</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental clinic"
                className="rounded-3xl shadow-2xl animate-float"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl animate-pulse-glow">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                  <span className="text-gray-800 font-bold">4.9</span>
                </div>
                <div className="text-gray-600">500+ Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready for a Healthier Smile?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of happy patients who transformed their smiles with MERCY Dental
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={handleBookClick}
              className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-lg 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300
                       flex items-center space-x-3 group"
            >
              <span>Book Free Consultation</span>
              <span className="group-hover:translate-x-2 transition">→</span>
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg 
                       hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;