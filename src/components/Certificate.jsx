import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const CertificateSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "December 2024",
      credentialId: "AWS-123456",
      skills: ["Cloud Architecture", "AWS Services", "Cloud Security"],
      image: "/api/placeholder/400/300",
      verificationLink: "https://aws.amazon.com/verify"
    },
    {
      title: "Professional Data Engineer",
      organization: "Google Cloud",
      date: "November 2024",
      credentialId: "GCP-789012",
      skills: ["Big Data", "Machine Learning", "Data Processing"],
      image: "/api/placeholder/400/300",
      verificationLink: "https://google.com/verify"
    },
    {
      title: "Full Stack Web Development",
      organization: "freeCodeCamp",
      date: "October 2024",
      credentialId: "FCC-345678",
      skills: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/300",
      verificationLink: "https://freecodecamp.org/verify"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#3F4E4F] to-[#2C3639] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group bg-[#2C3639] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Award Icon Overlay */}
                <div className="absolute top-4 right-4 bg-[#A27B5C] p-2 rounded-full">
                  <Award className="w-5 h-5 text-[#DCD7C9]" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#DCD7C9] mb-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <Building className="w-4 h-4 text-[#A27B5C]" />
                  <span className="text-[#DCD7C9]/80 text-sm">
                    {cert.organization}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-[#A27B5C]" />
                  <span className="text-[#DCD7C9]/80 text-sm">
                    {cert.date}
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-[#A27B5C]/20 rounded-full text-[#DCD7C9] border border-[#A27B5C]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential ID and Verify Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#DCD7C9]/60">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#A27B5C] text-[#DCD7C9] rounded-lg hover:bg-[#A27B5C]/80 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;