// pages/ServicesPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Trigger animations on filter change
  useEffect(() => {
    setAnimatedItems([]);
    setTimeout(() => {
      const items = filteredServices.map((_, index) => index);
      setAnimatedItems(items);
    }, 100);
  }, [filter]);

  const services = [
    {
      id: 1,
      title: "Smile Transformations",
      description: "Complete smile makeovers using the latest cosmetic dentistry techniques. Includes veneers, bonding, and contouring.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1620775997990-ee3c25938b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "cosmetic",
      price: "From $999",
      duration: "2-3 visits",
      features: ["Porcelain Veneers", "Dental Bonding", "Gum Contouring", "Smile Design"]
    },
    {
      id: 2,
      title: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar for healthier gums and fresher breath.",
      icon: "🦷",
      image: "https://plus.unsplash.com/premium_photo-1674998806375-58edc35ddf3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "preventive",
      price: "From $99",
      duration: "45-60 min",
      features: ["Scaling", "Polishing", "Fluoride Treatment", "Oral Hygiene Tips"]
    },
    {
      id: 3,
      title: "Root Canals",
      description: "Pain-free root canal therapy to save and restore damaged teeth. Advanced technology for comfort.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "restorative",
      price: "From $899",
      duration: "1-2 visits",
      features: ["Pain-Free Procedure", "Digital Imaging", "Same-Day Crowns", "Sedation Options"]
    },
    {
      id: 4,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
      icon: "🔷",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "restorative",
      price: "From $2999",
      duration: "3-6 months",
      features: ["Titanium Implants", "Ceramic Crowns", "Bone Grafting", "All-on-4 Options"]
    },
    {
      id: 5,
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, and professional whitening for the perfect smile you deserve.",
      icon: "😁",
      image: "https://images.unsplash.com/photo-1684607631747-045ecfeeb4c7?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "cosmetic",
      price: "From $599",
      duration: "1-2 visits",
      features: ["Teeth Whitening", "Porcelain Veneers", "Composite Bonding", "Gum Depigmentation"]
    },
    {
      id: 6,
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent care when you need it most.",
      icon: "🚑",
      image: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "emergency",
      price: "Call for pricing",
      duration: "Immediate",
      features: ["Toothaches", "Broken Teeth", "Lost Fillings", "Abscess Treatment"]
    },
    {
      id: 7,
      title: "Orthodontics",
      description: "Braces and Invisalign to straighten teeth and correct bites for all ages.",
      icon: "🔷",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "cosmetic",
      price: "From $1999",
      duration: "12-24 months",
      features: ["Metal Braces", "Ceramic Braces", "Invisalign", "Retainers"]
    },
    {
      id: 8,
      title: "Pediatric Dentistry",
      description: "Gentle, fun dental care for children to establish healthy habits early.",
      icon: "👶",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "preventive",
      price: "From $79",
      duration: "30-45 min",
      features: ["Child-Friendly Environment", "Fluoride Treatments", "Dental Sealants", "Education"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: '🔷' },
    { id: 'preventive', label: 'Preventive Care', icon: '🛡️' },
    { id: 'restorative', label: 'Restorative', icon: '🔨' },
    { id: 'cosmetic', label: 'Cosmetic', icon: '✨' },
    { id: 'emergency', label: 'Emergency', icon: '🚑' }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Pulse Animation */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Our Dental Services</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive dental care for the whole family, using the latest technology and techniques
          </p>
        </div>
      </section>

      {/* Filter Section with Bounce Animation */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="animate-bounce-small">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Floating Cards */}
      <section className="container-custom py-20">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-gray-500 text-xl">No services found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-100 cursor-pointer group animate-float-card ${
                  animatedItems.includes(index) ? 'animation-complete' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationDuration: `${3 + index * 0.2}s` // Different speeds for each card
                }}
                onClick={() => setSelectedService(service)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    {service.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center -mt-12 mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <span className="mr-1">⏱️</span>
                      {service.duration}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/login');
                    }}
                    className="w-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 py-2 rounded-lg 
                             font-semibold hover:from-blue-600 hover:to-blue-500 hover:text-white 
                             transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Service Details Modal with Slide Animation */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover animate-ken-burns" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition hover:rotate-90 duration-300"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl">
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mt-2">
                    {selectedService.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-500 text-sm block mb-1">Price</span>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {selectedService.price}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-500 text-sm block mb-1">Duration</span>
                  <div className="text-2xl font-bold text-gray-800">{selectedService.duration}</div>
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-3">What's Included:</h3>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  setSelectedService(null);
                  navigate('/login');
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Book This Service</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Shimmer Animation */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 animate-shimmer">Need a Custom Treatment Plan?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Our specialists will create a personalized plan just for you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300
                       relative overflow-hidden group"
            >
              <span className="relative z-10">Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold 
                       hover:bg-white/10 hover:scale-105 transition-all duration-300
                       relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;