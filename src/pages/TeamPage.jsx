// pages/TeamPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TeamPage = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');
  const [animatedItems, setAnimatedItems] = useState([]);

  const team = [
    {
      id: 1,
      name: "Dr. Mercy Johnson",
      role: "Lead Dentist & Founder",
      specialty: "Cosmetic Dentistry",
      experience: "15 years",
      education: "DDS, University of California",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Johnson founded MERCY Dental with a vision to provide compassionate, high-quality dental care. She specializes in smile transformations and has helped thousands of patients achieve their dream smiles.",
      certifications: ["American Dental Association", "Academy of Cosmetic Dentistry"],
      languages: ["English", "Spanish"],
      email: "dr.mercy@mercydental.com",
      phone: "(555) 123-4567",
      category: "cosmetic"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Braces & Invisalign",
      experience: "12 years",
      education: "DMD, Harvard School of Dental Medicine",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Chen is an expert in straightening teeth and correcting bites. He's a certified Invisalign provider and has treated patients of all ages with amazing results.",
      certifications: ["American Association of Orthodontists", "Invisalign Certified"],
      languages: ["English", "Mandarin"],
      email: "dr.chen@mercydental.com",
      phone: "(555) 123-4568",
      category: "orthodontics"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Periodontist",
      specialty: "Gum Care & Implants",
      experience: "10 years",
      education: "DDS, Columbia University",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Rodriguez focuses on preventing and treating gum disease. She's known for her gentle approach and expertise in dental implants.",
      certifications: ["American Academy of Periodontology", "ITI Implantology"],
      languages: ["English", "Spanish", "Portuguese"],
      email: "dr.rodriguez@mercydental.com",
      phone: "(555) 123-4569",
      category: "periodontics"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Oral Surgeon",
      specialty: "Surgical Procedures",
      experience: "18 years",
      education: "MD, Johns Hopkins University",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Wilson specializes in complex surgical procedures including wisdom teeth removal and dental implants. His gentle technique ensures minimal discomfort.",
      certifications: ["American Board of Oral Surgery", "AAOMS Fellow"],
      languages: ["English"],
      email: "dr.wilson@mercydental.com",
      phone: "(555) 123-4570",
      category: "surgery"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      role: "Pediatric Dentist",
      specialty: "Children's Dentistry",
      experience: "8 years",
      education: "DDS, NYU College of Dentistry",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Park makes dental visits fun and comfortable for children. She's passionate about teaching kids good oral hygiene habits.",
      certifications: ["American Academy of Pediatric Dentistry", "Sedation Certified"],
      languages: ["English", "Korean"],
      email: "dr.park@mercydental.com",
      phone: "(555) 123-4571",
      category: "pediatric"
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      role: "Endodontist",
      specialty: "Root Canal Therapy",
      experience: "14 years",
      education: "DDS, University of Michigan",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Taylor is known for his pain-free root canal treatments. He uses the latest technology for precise and comfortable procedures.",
      certifications: ["American Association of Endodontists", "Microscope Certified"],
      languages: ["English"],
      email: "dr.taylor@mercydental.com",
      phone: "(555) 123-4572",
      category: "endodontics"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Doctors', icon: '👥' },
    { id: 'cosmetic', label: 'Cosmetic', icon: '✨' },
    { id: 'orthodontics', label: 'Orthodontics', icon: '🦷' },
    { id: 'periodontics', label: 'Periodontics', icon: '🩺' },
    { id: 'pediatric', label: 'Pediatric', icon: '👶' },
    { id: 'surgery', label: 'Surgery', icon: '🔪' }
  ];

  const filteredTeam = filter === 'all' 
    ? team 
    : team.filter(member => member.category === filter);

  // Trigger animations on filter change
  useEffect(() => {
    setAnimatedItems([]);
    setTimeout(() => {
      const items = filteredTeam.map((_, index) => index);
      setAnimatedItems(items);
    }, 100);
  }, [filter]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Pulse Animation - Same as Services Page */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Meet Our Expert Team</h1>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Experienced dental professionals dedicated to your oral health and comfort at MERCY Dental
          </p>
        </div>
      </section>

      {/* Filter Section - Same as Services Page */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
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

      {/* Team Grid with Floating Cards - Same Animation as Services */}
      <section className="container-custom py-20">
        {filteredTeam.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-gray-500 text-xl">No doctors found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 cursor-pointer group animate-float-card ${
                  animatedItems.includes(index) ? 'animation-complete' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationDuration: `${3.5 + index * 0.3}s`
                }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    {member.specialty}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center -mt-12 mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-3xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3 flex items-center">
                    <span className="mr-2">🎓</span>
                    {member.education}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      {member.experience}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {member.specialty}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Language badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.languages.map((lang, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className="w-full bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 py-2 rounded-lg 
                             font-semibold hover:from-purple-600 hover:to-purple-500 hover:text-white 
                             transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">View Profile</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Team Member Modal - Same Style as Service Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover animate-ken-burns" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition hover:rotate-90 duration-300"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl">
                  👨‍⚕️
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedMember.name}</h2>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm inline-block mt-2">
                    {selectedMember.role}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-500 text-sm block mb-1">Specialty</span>
                  <div className="text-lg font-bold text-purple-600">{selectedMember.specialty}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-500 text-sm block mb-1">Experience</span>
                  <div className="text-lg font-bold text-gray-800">{selectedMember.experience}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p className="text-gray-600">{selectedMember.education}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Certifications</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedMember.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-purple-600 mr-2">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.languages.map((lang, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-xl font-semibold text-center 
                           hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Email Doctor
                </a>
                <a 
                  href={`tel:${selectedMember.phone}`}
                  className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-semibold text-center 
                           hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                >
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section - Same as Services Page */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 animate-shimmer">Join Our Team</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            We're always looking for passionate dental professionals to join our family
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg 
                     hover:shadow-2xl hover:scale-105 transition-all duration-300
                     relative overflow-hidden group"
          >
            <span className="relative z-10">View Careers</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;