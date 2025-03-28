import React from 'react';
import { Camera, Code, Palette, Github, ExternalLink, Database, Layers } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Mountain Photography App",
      description: "A full-stack application for professional photographers to showcase and sell their mountain landscape photography",
      category: "Full Stack App",
      icon: <Camera className="w-6 h-6" />,
      image: "https://picsum.photos/id/1/600/400",
      techStack: ["React", "Node.js", "MongoDB", "AWS S3"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project.com"
      }
    },
    {
      title: "Forest Explorer Platform",
      description: "Interactive web platform that helps users discover and learn about different forest ecosystems",
      category: "Web Platform",
      icon: <Palette className="w-6 h-6" />,
      image: "https://picsum.photos/id/2/600/400",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Three.js"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project.com"
      }
    },
    {
      title: "Nature Trail Mobile App",
      description: "Mobile application for hiking enthusiasts to track trails and share their experiences",
      category: "Mobile Development",
      icon: <Code className="w-6 h-6" />,
      image: "https://picsum.photos/id/3/600/400",
      techStack: ["React Native", "Firebase", "TypeScript", "Redux"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project.com"
      }
    },
    {
      title: "Wildlife Conservation Dashboard",
      description: "A data-driven dashboard for conservationists to track wildlife population trends",
      category: "Data Science",
      icon: <Database className="w-6 h-6" />,
      image: "https://picsum.photos/id/4/600/400",
      techStack: ["Python", "Flask", "Pandas", "D3.js"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project.com"
      }
    },
    {
      title: "Eco-Friendly E-Commerce",
      description: "An online marketplace for sustainable and eco-friendly products",
      category: "E-Commerce",
      icon: <Layers className="w-6 h-6" />,
      image: "https://picsum.photos/id/5/600/400",
      techStack: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project.com"
      }
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#2C3639] to-[#3F4E4F] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#A27B5C 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#DCD7C9] mb-16 text-center">
          Portfolio
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg bg-[#2C3639] shadow-xl transition-all duration-300 hover:-translate-y-2
                ${index === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'}`}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3639] via-[#2C3639]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Category & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#A27B5C] rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-[#DCD7C9]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#DCD7C9] mb-3">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-[#DCD7C9]/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xl">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-[#A27B5C]/20 rounded-full text-[#DCD7C9] border border-[#A27B5C]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={item.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#A27B5C] rounded-lg hover:bg-[#A27B5C]/80 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={item.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#DCD7C9] text-[#2C3639] rounded-lg hover:bg-[#DCD7C9]/80 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Database Icon for Full Stack Projects */}
              {item.techStack.includes('MongoDB') || item.techStack.includes('PostgreSQL') ? (
                <div className="absolute top-4 right-4 p-2 bg-[#2C3639]/80 rounded-full">
                  <Database className="w-5 h-5 text-[#DCD7C9]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;