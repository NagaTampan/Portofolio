import React, { useState, useEffect, useRef } from 'react';
import { Wind, Cloud, Code, Database, Layout, Search, FileText, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // GSAP animations for cards entrance
    if (cardsContainerRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { 
          y: 50, 
          opacity: 0, 
          scale: 0.95,
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      );
    }
  }, []);

  const handleCardClick = (skillId) => {
    setActiveSkill(activeSkill === skillId ? null : skillId);
    
    // GSAP animation for card expansion/collapse
    if (activeSkill !== skillId) {
      // Expand animation
      const targetCard = cardsRef.current.find(card => card.dataset.id === skillId);
      gsap.to(targetCard, {
        scale: 1.05,
        boxShadow: "0 16px 30px rgba(0,0,0,0.25)",
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Shrink other cards
      cardsRef.current.forEach(card => {
        if (card.dataset.id !== skillId) {
          gsap.to(card, {
            scale: 0.97,
            opacity: 0.7,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    } else {
      // Reset all cards
      cardsRef.current.forEach(card => {
        gsap.to(card, {
          scale: 1,
          opacity: 1,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  };

  const skills = [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Code className="w-10 h-10 text-amber-600 group-hover:text-amber-500 transition-colors duration-300" />,
      description: 'Membangun aplikasi web yang responsif dan modern menggunakan PHP (Laravel) dan React untuk memberikan pengalaman pengguna yang optimal.',
      details: [
        'Laravel - Framework PHP untuk back-end yang kuat',
        'React - Library JavaScript untuk antarmuka yang dinamis',
        'RESTful API - Integrasi layanan berbasis API',
        'Database Management - MySQL dan PostgreSQL'
      ]
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: <Layout className="w-10 h-10 text-amber-600 group-hover:text-amber-500 transition-colors duration-300" />,
      description: 'Merancang antarmuka yang estetis, intuitif, dan berorientasi pada pengguna untuk meningkatkan kepuasan dan keterlibatan.',
      details: [
        'Wireframing & Prototyping',
        'User Research & Testing',
        'Responsive Design',
        'Interaction Design'
      ]
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: <Search className="w-10 h-10 text-amber-600 group-hover:text-amber-500 transition-colors duration-300" />,
      description: 'Meningkatkan visibilitas dan peringkat website di mesin pencari melalui strategi SEO yang efektif.',
      details: [
        'On-page & Off-page Optimization',
        'Keyword Research & Analysis',
        'Content Strategy',
        'Performance Monitoring'
      ]
    },
    {
      id: 'office',
      title: 'Microsoft Office',
      icon: <FileText className="w-10 h-10 text-amber-600 group-hover:text-amber-500 transition-colors duration-300" />,
      description: 'Penguasaan aplikasi Microsoft Office untuk meningkatkan produktivitas dan efisiensi dalam pekerjaan sehari-hari.',
      details: [
        'Word - Pembuatan dokumen profesional',
        'Excel - Analisis data dan visualisasi',
        'PowerPoint - Presentasi yang menarik',
        'Outlook - Manajemen email dan jadwal'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-stone-100 overflow-x-hidden">
      {/* Background Elements (original) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mountains */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 z-0">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-stone-800 rounded-tr-[100%]" style={{ opacity: 0.2 }}></div>
          <div className="absolute bottom-0 left-1/3 w-1/2 h-3/4 bg-stone-700 rounded-tr-[100%]" style={{ opacity: 0.2 }}></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-stone-800 rounded-tl-[100%]" style={{ opacity: 0.2 }}></div>
        </div>
        
        {/* Trees (Small dots representing forest) */}
        <div className="absolute bottom-0 left-0 w-full h-1/3">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-green-700"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 30}%`,
                opacity: 0.6 + Math.random() * 0.4
              }}
            ></div>
          ))}
        </div>
        
        {/* Clouds */}
        <Cloud className="absolute text-stone-300 opacity-30 top-16 left-1/4 w-16 h-16 animate-float" />
        <Cloud className="absolute text-stone-300 opacity-20 top-24 right-1/3 w-20 h-20 animate-float-slow" />
        
        {/* Wind */}
        <Wind className="absolute text-stone-400 opacity-10 bottom-1/3 right-1/4 w-12 h-12 animate-wind" />
        <Wind className="absolute text-stone-400 opacity-10 top-1/3 left-1/5 w-10 h-10 animate-wind-slow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-200 font-serif">
            Layanan & Keahlian
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Menawarkan solusi digital yang  inovatif dan efektif,
              dengan pendekatan yang seimbang antara fungsi dan estetika.
          </p>
          
          {/* Scroll hint */}
          {showScrollHint && (
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-amber-200 opacity-70">
              <ArrowRight className="w-5 h-5 transform rotate-90" />
              <span className="text-sm">Scroll untuk menjelajahi</span>
            </div>
          )}
        </div>
        
        {/* Enhanced Skills Grid with GSAP animations */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              ref={el => (cardsRef.current[index] = el)}
              data-id={skill.id}
              className={`
                relative group rounded-lg overflow-hidden backdrop-blur-sm
                transition-all duration-300 cursor-pointer hover:shadow-glow
                ${activeSkill === skill.id 
                  ? 'bg-stone-800/90 shadow-glow-active' 
                  : 'bg-stone-800/70 hover:bg-stone-800/80 shadow-xl'
                }
              `}
              onClick={() => handleCardClick(skill.id)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent"></div>
              
              {/* Card content */}
              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-stone-700/50 mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-stone-700/70">
                    {skill.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-amber-200 group-hover:text-amber-100">
                    {skill.title}
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-stone-300 mb-4 flex-grow">
                  {skill.description}
                </p>
                
                {/* Details (shown when active) */}
                <div 
                  className={`
                    overflow-hidden transition-all duration-500
                    ${activeSkill === skill.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <ul className="space-y-3 mt-4 text-stone-300">
                    {skill.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Call to action */}
                <div className="mt-4 text-amber-400 text-sm flex items-center group/cta">
                  <span>{activeSkill === skill.id ? 'Tutup detail' : 'Lihat detail'}</span>
                  <ArrowRight className={`
                    w-4 h-4 ml-1 transition-transform duration-300 group-hover/cta:translate-x-1
                    ${activeSkill === skill.id ? 'rotate-90' : 'rotate-0'}
                  `} />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/10 transform rotate-45 translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section (original) */}
        <div className="text-center w-full mx-auto bg-stone-800/60 rounded-lg p-8 relative hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-200 mb-4">
              Siap untuk Berkolaborasi?
            </h2>
            <p className="text-stone-300 mb-6">
              Mari kita wujudkan ide Anda menjadi solusi digital yang efektif, 
              dengan sentuhan keindahan alam yang menginspirasi.
            </p>
            <button className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-full 
                              transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Hubungi Saya
            </button>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-700/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-700/10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes wind {
          0%, 100% { transform: translateX(0) rotate(0); }
          50% { transform: translateX(10px) rotate(5deg); }
        }
        
        @keyframes wind-slow {
          0%, 100% { transform: translateX(0) rotate(0); }
          50% { transform: translateX(-15px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-wind {
          animation: wind 10s ease-in-out infinite;
        }
        
        .animate-wind-slow {
          animation: wind-slow 15s ease-in-out infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 5px 20px rgba(217, 119, 6, 0.15);
        }
        
        .shadow-glow-active {
          box-shadow: 0 10px 30px rgba(217, 119, 6, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Skills;