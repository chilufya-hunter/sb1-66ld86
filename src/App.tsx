import React, { useEffect, useRef } from 'react';
import { Github, Mail, Phone, Download, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SecureAuth Pro",
    description: "Advanced authentication system with biometric integration and zero-trust architecture",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "CloudGuard",
    description: "Cloud security monitoring platform with real-time threat detection",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "BlockChain Vault",
    description: "Decentralized storage solution with military-grade encryption",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "AI Security Scanner",
    description: "ML-powered vulnerability assessment tool for web applications",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const container = projectsRef.current;
    if (!container) return;

    let scrollInterval: number;

    const startScroll = () => {
      scrollInterval = window.setInterval(() => {
        if (!isHovered && container) {
          container.scrollLeft += 1;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] 
          bg-cover bg-center"
          style={{ opacity: 0.2 }}
        />
        
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-8 flex justify-between items-center text-white">
          <a href="#" className="text-2xl font-bold tracking-tight hover:text-blue-300 transition">
            Chilufya Mwape
          </a>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="hover:text-blue-300 transition">Projects</a>
            <a href="#blog" className="hover:text-blue-300 transition">Blog</a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition">
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative flex-1 flex items-center justify-center px-6 text-white">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Need a robust web solution or security expertise?
              <span className="block text-blue-300">I offer both: Build with confidence, secure with trust.</span>
            </h1>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full
              text-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Projects
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 bg-blue-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
          <div 
            ref={projectsRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-none w-[300px] bg-blue-900/50 rounded-xl overflow-hidden
                transform transition-all hover:scale-105 backdrop-blur-sm"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-200 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16 border-t border-blue-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Chilufya Mwape</h3>
              <p className="text-blue-300">Building secure and scalable web solutions</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Ready to work together?</h4>
              <div className="space-y-2">
                <a href="tel:+260975665399" className="flex items-center gap-2 text-blue-300 hover:text-blue-400">
                  <Phone size={18} /> +260 975 665 399
                </a>
                <a href="tel:+260950250444" className="flex items-center gap-2 text-blue-300 hover:text-blue-400">
                  <Phone size={18} /> +260 950 250 444
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-blue-300 hover:text-blue-400">
                  <Mail size={18} /> contact@example.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-blue-400">
                  <Github size={24} />
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-400">
            <p>&copy; {new Date().getFullYear()} Chilufya Mwape. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;