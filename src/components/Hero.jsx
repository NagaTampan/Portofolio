import React, { useEffect, useRef } from 'react';
import { Leaf, Camera, ChevronDown, Wind, Sun, Mountain, Bird } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Timeline untuk animasi masuk
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animasi elemen-elemen
    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(badgeRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.3)
      .fromTo(headingRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, 0.5)
      .fromTo(imageRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, 0.7)
      .fromTo(iconsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, 0.9);
      
    // Animasi floating ikon
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: `${Math.sin(index) * 10}px`,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });
    
    // Parallax effect pada scroll
    if (typeof window !== 'undefined') {
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        ease: "none"
      });
    }
    
    return () => {
      // Cleanup animations
      tl.kill();
    };
  }, []);
  
  const addToIconsRef = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };
  
  const hoverEffect = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
      ease: "back.out"
    });
  };
  
  const hoverEffectExit = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "back.out"
    });
  };

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#2C3E2D] to-[#1A2417]">
      {/* Floating nature icons */}
      <Wind 
        ref={addToIconsRef} 
        className="absolute text-[#D4B483]/20 w-12 h-12 top-1/4 left-1/6"
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverEffectExit}
      />
           <Wind 
        ref={addToIconsRef} 
        className="absolute text-[#D4B483]/20 w-12 h-16 bottom-1/4 right-1/6"
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverEffectExit}
      />
      <Bird 
        ref={addToIconsRef} 
        className="absolute text-[#D4B483]/20 w-10 h-10 top-1/3 right-1/4"
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverEffectExit}
      />
      <Sun 
        ref={addToIconsRef} 
        className="absolute text-[#D4B483]/20 w-14 h-14 bottom-1/3 left-1/4"
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverEffectExit}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('./api/placeholder/1600/900')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-16 flex flex-col min-h-screen justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div ref={badgeRef} className="inline-flex items-center justify-center mb-6 bg-[#A68A64]/20 rounded-full px-4 py-2">
                <Leaf className="w-4 h-4 mr-2 text-[#D4B483]" />
                <span className="text-[#D4B483] text-sm font-medium">Khoe, Aaron Titan</span>
              </div>
              
              <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block text-[#D4B483]">Full-Stack</span>
                <span>Web Developer</span>
              </h1>
              
              <p className="text-lg text-[#E2D3C1] mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Saya adalah seorang fresh graduate dengan kemampuan Full Stack Developer yang memiliki minat besar dalam pengembangan website dan aplikasi dengan React & PHP.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  className="bg-[#D4B483] hover:bg-[#C69C6D] text-[#1A2417] px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center group"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget.querySelector('.btn-icon'), {
                      rotation: 360,
                      duration: 0.5
                    });
                  }}
                >
                  Lihat Karya
                  <Camera className="ml-2 h-5 w-5 btn-icon" />
                </button>
                <button className="border border-[#A68A64] text-[#D4B483] hover:bg-[#A68A64]/10 px-8 py-4 rounded-lg font-semibold transition duration-300 overflow-hidden relative group">
                  <span className="relative z-10">Download CV</span>
                  <span className="absolute inset-0 bg-[#A68A64]/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
              </div>
            </div>
            
            {/* Right Column: Featured Image */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden">
              
              <div className="relative w-full max-w-lg mx-auto rounded-xl  overflow-hidden shadow-2xl group">
      <img
        src="https://picsum.photos/600/500"
        alt="Pemandangan Alam Indonesia"
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#1A2417]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#D4B483] flex items-center justify-center transition-transform transform scale-90 group-hover:scale-100 duration-300">
          <Camera className="w-8 h-8 text-[#1A2417]" />
        </div>
      </div>
    </div>
                
                {/* Signature element */}
                <div className="absolute -bottom-5 -right-5 bg-[#1A2417] rounded-lg p-4 shadow-lg transform rotate-3">
                  <p className="text-[#D4B483] font-serif italic">
                    ~ Karya Alam ~
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#D4B483]/70 animate-bounce cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-sm mb-2">Jelajahi</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;