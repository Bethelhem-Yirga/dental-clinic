// pages/FeedbackPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [filterRating, setFilterRating] = useState(0);
  const [sortBy, setSortBy] = useState('recent');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [feedbacks] = useState([
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "March 15, 2024",
      comment: "Best dental experience I've ever had! Dr. Johnson was amazing and made me feel comfortable throughout the procedure. The staff was friendly and the facility is state-of-the-art.",
      treatment: "Dental Implant",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "San Diego, CA",
      verified: true,
      height: "tall"
    },
    {
      id: 2,
      name: "Maria Garcia",
      rating: 5,
      date: "February 28, 2024",
      comment: "The entire team is professional and caring. My smile transformation exceeded my expectations! I'm no longer self-conscious about my teeth.",
      treatment: "Smile Makeover",
      avatar: "https://images.unsplash.com/photo-1494790108777-466d853b23d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Los Angeles, CA",
      verified: true,
      height: "short"
    },
    {
      id: 3,
      name: "Robert Taylor",
      rating: 4,
      date: "February 10, 2024",
      comment: "Very clean office and friendly staff. Dr. Chen explained everything clearly before starting my Invisalign treatment. Already seeing great results!",
      treatment: "Invisalign",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Phoenix, AZ",
      verified: true,
      height: "medium"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      rating: 5,
      date: "January 22, 2024",
      comment: "I used to be terrified of dentists, but this team changed that completely. Pain-free and caring! They really go above and beyond.",
      treatment: "Root Canal",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Denver, CO",
      verified: true,
      height: "tall"
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 5,
      date: "January 15, 2024",
      comment: "Quick, efficient, and painless. The emergency service saved my weekend! They got me in within an hour of calling.",
      treatment: "Emergency Care",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Seattle, WA",
      verified: true,
      height: "short"
    },
    {
      id: 6,
      name: "Patricia Lee",
      rating: 4,
      date: "December 18, 2023",
      comment: "Great experience with teeth cleaning. Very thorough and gentle. The hygienist was knowledgeable and gave great tips for home care.",
      treatment: "Teeth Cleaning",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Portland, OR",
      verified: false,
      height: "medium"
    },
    {
      id: 7,
      name: "James Brown",
      rating: 5,
      date: "December 5, 2023",
      comment: "Dr. Wilson performed my wisdom tooth extraction with zero pain. The recovery was faster than expected. Highly recommended!",
      treatment: "Wisdom Teeth",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "Sacramento, CA",
      verified: true,
      height: "tall"
    },
    {
      id: 8,
      name: "Jennifer Martinez",
      rating: 5,
      date: "November 20, 2023",
      comment: "The best pediatric dental experience for my kids. They actually look forward to their appointments! Dr. Park is wonderful with children.",
      treatment: "Pediatric Dentistry",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "San Francisco, CA",
      verified: true,
      height: "short"
    },
    {
      id: 9,
      name: "William Turner",
      rating: 5,
      date: "November 5, 2023",
      comment: "I had a dental emergency and they fit me in immediately. The care was exceptional and the pain was gone instantly. Forever grateful!",
      treatment: "Emergency Care",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      location: "San Jose, CA",
      verified: true,
      height: "medium"
    }
  ]);

  const averageRating = (feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length).toFixed(1);
  const ratingCounts = [5,4,3,2,1].map(rating => ({
    rating,
    count: feedbacks.filter(f => f.rating === rating).length,
    percentage: (feedbacks.filter(f => f.rating === rating).length / feedbacks.length * 100).toFixed(0)
  }));

  const filteredFeedbacks = feedbacks
    .filter(f => filterRating === 0 || f.rating === filterRating)
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'highest') {
        return b.rating - a.rating;
      } else if (sortBy === 'lowest') {
        return a.rating - b.rating;
      }
      return 0;
    });

  // Distribute items into staggered columns
  const getStaggeredColumns = () => {
    const isMobile = windowWidth < 768;
    if (isMobile) {
      return [filteredFeedbacks];
    }
    
    const columns = [[], [], []];
    filteredFeedbacks.forEach((item, index) => {
      const columnIndex = index % 3;
      columns[columnIndex].push(item);
    });
    return columns;
  };

  const staggeredColumns = getStaggeredColumns();

  // Get height class for card
  const getHeightClass = (height) => {
    switch(height) {
      case 'short':
        return 'min-h-[280px]';
      case 'medium':
        return 'min-h-[360px]';
      case 'tall':
        return 'min-h-[440px]';
      default:
        return 'min-h-[320px]';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Patient Stories</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Real experiences from our happy patients who trust us with their smiles
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border-r border-gray-200">
              <div className="text-6xl font-bold gradient-text mb-2">{averageRating}</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className={`text-2xl ${star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center border-r border-gray-200">
              <div className="text-6xl font-bold gradient-text mb-2">{feedbacks.length}+</div>
              <div className="text-gray-600 mb-2">Verified Reviews</div>
              <div className="flex justify-center space-x-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">✓ Verified</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="container-custom py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Rating Distribution</h2>
          <div className="space-y-4">
            {ratingCounts.map((item) => (
              <div key={item.rating} className="flex items-center space-x-4">
                <div className="w-20 flex items-center space-x-2">
                  <span className="font-semibold">{item.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="w-20 text-gray-600">{item.count} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-custom py-6">
        <div className="flex flex-wrap justify-between items-center gap-4 bg-white rounded-2xl shadow-sm p-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterRating(0)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filterRating === 0
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
              }`}
            >
              All Reviews
            </button>
            {[5,4,3,2,1].map(rating => (
              <button
                key={rating}
                onClick={() => setFilterRating(rating)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-1 ${
                  filterRating === rating
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
              }`}
              >
                <span>{rating}</span>
                <span>★</span>
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </section>

      {/* Animated Staggered Masonry Grid */}
      <section className="container-custom py-12 pb-20">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Floating Upwards */}
          {staggeredColumns[0] && (
            <div className="flex-1 flex flex-col gap-6 animate-float-up">
              {staggeredColumns[0].map((feedback, idx) => (
                <div 
                  key={feedback.id} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-fade-in-up ${getHeightClass(feedback.height)}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => setSelectedTestimonial(feedback)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-gray-900 truncate">{feedback.name}</h3>
                          {feedback.verified && (
                            <span className="bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{feedback.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map(star => (
                        <span key={star} className={`text-base ${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-200'}`}>
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-2">{feedback.date}</span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed ${
                      feedback.height === 'short' ? 'line-clamp-3' : 
                      feedback.height === 'medium' ? 'line-clamp-4' : 'line-clamp-5'
                    }`}>
                      "{feedback.comment}"
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          🦷 {feedback.treatment}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors flex items-center gap-1">
                          Read more
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Center Column - Floating Downwards */}
          {staggeredColumns[1] && (
            <div className="flex-1 flex flex-col gap-6 animate-float-down">
              {staggeredColumns[1].map((feedback, idx) => (
                <div 
                  key={feedback.id} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-fade-in-up ${getHeightClass(feedback.height)}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => setSelectedTestimonial(feedback)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-gray-900 truncate">{feedback.name}</h3>
                          {feedback.verified && (
                            <span className="bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{feedback.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map(star => (
                        <span key={star} className={`text-base ${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-200'}`}>
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-2">{feedback.date}</span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed ${
                      feedback.height === 'short' ? 'line-clamp-3' : 
                      feedback.height === 'medium' ? 'line-clamp-4' : 'line-clamp-5'
                    }`}>
                      "{feedback.comment}"
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          🦷 {feedback.treatment}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors flex items-center gap-1">
                          Read more
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Right Column - Floating Upwards */}
          {staggeredColumns[2] && (
            <div className="flex-1 flex flex-col gap-6 animate-float-up">
              {staggeredColumns[2].map((feedback, idx) => (
                <div 
                  key={feedback.id} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-fade-in-up ${getHeightClass(feedback.height)}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => setSelectedTestimonial(feedback)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-gray-900 truncate">{feedback.name}</h3>
                          {feedback.verified && (
                            <span className="bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{feedback.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map(star => (
                        <span key={star} className={`text-base ${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-200'}`}>
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-2">{feedback.date}</span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed ${
                      feedback.height === 'short' ? 'line-clamp-3' : 
                      feedback.height === 'medium' ? 'line-clamp-4' : 'line-clamp-5'
                    }`}>
                      "{feedback.comment}"
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          🦷 {feedback.treatment}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors flex items-center gap-1">
                          Read more
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Load More Stories
          </button>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Patient Story</h2>
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={selectedTestimonial.avatar} 
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                />
                <div>
                  <h2 className="text-2xl font-bold">{selectedTestimonial.name}</h2>
                  <p className="text-gray-500 text-sm">{selectedTestimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className={`text-xl ${star <= selectedTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-400">{selectedTestimonial.date}</span>
                {selectedTestimonial.verified && (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                    ✓ Verified Patient
                  </span>
                )}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">"{selectedTestimonial.comment}"</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  {selectedTestimonial.treatment}
                </span>
                <button
                  onClick={() => {
                    setSelectedTestimonial(null);
                    navigate('/login');
                  }}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-2"
                >
                  Book Appointment
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write Review CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Share Your Experience</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your experience at MERCY Dental. Your feedback helps us improve!
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg 
                     hover:shadow-2xl hover:scale-105 transition-all duration-300
                     flex items-center space-x-2 mx-auto"
          >
            <span>Write a Review</span>
            <span>✍️</span>
          </button>
        </div>
      </section>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Floating Up Animation for Left & Right Columns */
        @keyframes floatUp {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float-up {
          animation: floatUp 4s ease-in-out infinite;
        }
        
        /* Floating Down Animation for Center Column */
        @keyframes floatDown {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float-down {
          animation: floatDown 4s ease-in-out infinite;
        }
        
        /* Add different speeds for variety */
        .animate-float-up:nth-child(even) {
          animation-duration: 3.5s;
        }
        
        .animate-float-down:nth-child(even) {
          animation-duration: 4.5s;
        }
      `}</style>
    </div>
  );
};

export default FeedbackPage;