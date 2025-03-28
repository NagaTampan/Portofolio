import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const workExperiences = [
  {
    id: 'job1',
    title: 'Intern Marketing Communication',
    company: 'Kampoeng Semarang',
    location: 'Semarang, Jawa Tengah',
    period: 'Febuary - Maret',
    description: 'Bertanggung jawab dalam membuat dan mengelola website perusahaan, serta mengelola media sosial dan strategi pemasaran. ',
    achievements: [
      'Mengelola media sosial (Instagram) untuk melakukan promosi',
      'Merancang konten digital dan materi promosi untuk event dan produk',
      'Merancang website untuk mempromosikan Kampoeng Semarang'
    ],
    image: '/img/web-development.jpg' // Replace with your actual image path
  },
  {
    id: 'job2',
    title: 'Freelance Web Developer',
    company: 'Freelance',
    location: 'Semarang, Indonesia',
    period: '2022 - 2024',
    description: 'Bertanggunng jawab dalam merancang, mengembangkan, dan mengoptimalkan berbagai proyek website sesuai kebutuhan klien.',
    achievements: [
      'Juwara Coffe - Mengembangkan website untuk perusahaan produsen kopi.',
      'Billiard Billing System - Web yang bertujuan membantu pengelolaan bisnis',
    ],
    image: '/img/ux-design.jpg' // Replace with your actual image path
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const jobRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize refs arrays
    jobRefs.current = jobRefs.current.slice(0, workExperiences.length);
    imageRefs.current = imageRefs.current.slice(0, workExperiences.length);
    
    // Timeline animation
    gsap.fromTo(timelineRef.current,
      { height: 0 },
      {
        height: '100%',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 1
        }
      }
    );
    
    // Job cards and images animations
    jobRefs.current.forEach((jobRef, index) => {
      const direction = index % 2 === 0 ? -30 : 30;
      const imageRef = imageRefs.current[index];
      
      // Card animation
      gsap.fromTo(jobRef,
        { 
          opacity: 0,
          x: direction,
          y: 20
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: jobRef,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Image animation
      gsap.fromTo(imageRef,
        { 
          opacity: 0,
          scale: 0.9,
          x: direction * -1
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Animate achievement items
      const achievements = jobRef.querySelectorAll('.achievement-item');
      gsap.fromTo(achievements,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: jobRef,
            start: 'top 75%'
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C3727 0%, #38453D 25%, #4B5842 50%, #4D4A3A 75%, #504438 100%)'
      }}
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMmMzNzI3Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTRkMzkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
      
      {/* Soft radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#E6C882] mb-12 font-serif">
          Pengalaman Profesional
        </h2>
        
        <div className="relative">
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BF9C48]/20 via-[#E6C882]/40 to-[#BF9C48]/20"
          ></div>
          
          {workExperiences.map((job, index) => (
            <div 
              key={job.id}
              className={`relative mb-16 flex flex-col md:flex-row items-center md:items-start 
                         ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#D4B068] border-4 border-[#3A4D39] shadow-glow-sm z-10"></div>
              
              {/* Job Card */}
              <div 
                ref={el => jobRefs.current[index] = el}
                className={`w-full md:w-1/2 p-6 md:px-8 md:py-6 z-20 `}
              >
                <div className={`
                  bg-gradient-to-br from-[#3A4D39]/90 to-[#25312A]/90 backdrop-blur-sm rounded-lg p-6 
                  border border-[#D4B068]/10 shadow-xl hover:shadow-glow-custom 
                  transition-all duration-300 hover:-translate-y-1
                `}>
                  <h3 className="text-xl font-semibold text-[#E6C882]">{job.title}</h3>
                  <h4 className="text-lg text-[#D4B068]/90 mb-2">{job.company}</h4>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-[#B8C5AA] text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 opacity-70" />
                      {job.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 opacity-70" />
                      {job.location}
                    </div>
                  </div>
                  
                  <p className="text-[#D8E1CA] mb-4">{job.description}</p>
                  
                  <div className="mt-4">
                    <h5 className="text-[#E6C882] text-sm font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-[#D8E1CA] text-sm achievement-item">
                          <span className="w-1.5 h-1.5 bg-[#D4B068] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Image Container */}
              <div 
                ref={el => imageRefs.current[index] = el}
                className="w-full md:w-1/2 p-6 flex items-center justify-center"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-sm transform transition-transform hover:scale-105 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25312A]/80 via-transparent to-transparent z-10"></div>
                  <img
                    src={job.image || "/api/placeholder/400/300"}
                    alt={`${job.title} at ${job.company}`}
                    className="w-full object-cover h-64"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <p className="text-[#E6C882] text-sm font-medium">{job.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#25312A]/80 to-transparent"></div>
      
      <style jsx>{`
        .shadow-glow-sm {
          box-shadow: 0 0 15px rgba(212, 176, 104, 0.3);
        }
        .shadow-glow-custom {
          box-shadow: 0 8px 20px rgba(37, 49, 42, 0.4), 0 0 15px rgba(212, 176, 104, 0.2);
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, rgba(228, 217, 187, 0.05) 0%, rgba(58, 77, 57, 0) 70%);
        }
      `}</style>
    </div>
  );
};

export default Experience;