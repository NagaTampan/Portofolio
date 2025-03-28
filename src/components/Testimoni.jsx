import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mountain, TreePine, Leaf, Wind } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/api/placeholder/100/100",
    content: "Kolaborasi yang luar biasa! Kreativitas dan kemampuan teknis yang ditunjukkan sangat mengesankan. Hasil akhirnya melampaui ekspektasi kami.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Manager",
    image: "/api/placeholder/100/100",
    content: "Pendekatan profesional dan detail oriented. Setiap aspek project dikerjakan dengan presisi dan pemahaman yang mendalam.",
    rating: 4
  },
  {
    id: 3,
    name: "Amanda Williams",
    role: "Marketing Director",
    image: "/api/placeholder/100/100",
    content: "Komunikasi yang sangat baik dan hasil yang berkualitas tinggi. Sangat merekomendasikan untuk project-project kedepannya.",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2C3E2D] via-[#1A2417] to-[#2C3E2D] py-16 overflow-hidden">
    

     

     

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] text-center mb-12">
          <span className="block transform hover:scale-105 transition-transform duration-300">
            Apa Kata Mereka?
          </span>
        </h2>

        {/* Testimonial Card */}
        <div 
          className="relative bg-gradient-to-br from-[#E8DCC4]/20 to-[#8B7355]/20 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl"
          onMouseEnter={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
        >
          <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image with Effects */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C8B6A6] to-[#8B7355] rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm">
                </div>
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#C8B6A6] shadow-lg transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#8B7355]/20 animate-pulse" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex justify-center md:justify-start mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-[#E8DCC4] text-lg md:text-xl italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="space-y-1">
                  <h3 className="text-[#E8DCC4] font-bold text-xl">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#C8B6A6]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#8B7355]/50 hover:bg-[#8B7355] transition-colors text-[#E8DCC4] transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-[#8B7355]/50 hover:bg-[#8B7355] transition-colors text-[#E8DCC4] transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Enhanced Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#E8DCC4] w-8' 
                  : 'bg-[#C8B6A6]/50 w-2 hover:bg-[#C8B6A6]/70'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;