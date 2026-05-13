import { motion } from 'motion/react';
import { Mail, Globe, Code, Zap, Users, ArrowRight, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';

// --- Components ---

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="h-10 overflow-hidden">
             <img 
               src="/logo.png" 
               alt="EWD" 
               className="h-full w-auto object-contain brightness-0 invert" 
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block opacity-80 group-hover:opacity-100 transition-opacity uppercase italic">ELITE WEB DEVELOPERS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors cursor-pointer">Portfolio</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors px-5 py-2.5 bg-blue-600 text-white rounded-full transition-transform active:scale-95 text-center cursor-pointer">Work With Us</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Elite Web Development Agency
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            WE BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">DIGITAL FUTURE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Led by Kamesh, we are a team of expert developers crafting high-performance, 
            visually stunning websites and applications that define the modern web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              View Our Work <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  color: string;
  url: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, description, color, url, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="group relative cursor-pointer"
      onClick={() => window.open(url, '_blank')}
    >
      <div className={`aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${color} p-8 flex flex-col justify-end transition-all duration-700 group-hover:scale-[0.98] group-hover:shadow-2xl group-hover:shadow-blue-500/20`}>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
          <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 block text-white">{category}</span>
          <h3 className="text-3xl font-bold mb-3 text-white tracking-tight">{title}</h3>
          <p className="text-sm text-white/70 line-clamp-2 mb-6 max-w-xs">{description}</p>
          <div className="flex items-center gap-2 text-sm font-bold bg-white text-black py-3 px-6 rounded-full w-fit opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            View Live Site <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Sun Beauty Care",
      url: "https://sunbeautycare.in",
      category: "Health & Beauty",
      description: "A premium salon and wellness platform focused on elegance and seamless booking experiences.",
      color: "from-rose-500 to-orange-600"
    },
    {
      title: "Virukshaa Events",
      url: "https://virukshaaevents.in",
      category: "Event Management",
      description: "A dynamic showcase for luxury event planning, featuring traditional and modern celebrations.",
      color: "from-amber-500 to-red-700"
    },
    {
      title: "Inkde Memories",
      url: "https://inkdememories.kameshravirks.workers.dev",
      category: "Photography Portfolio",
      description: "A cinematic gallery for capturing life's most precious moments with technical precision.",
      color: "from-blue-600 to-indigo-900"
    },
    {
      title: "Elite Web Devs",
      url: "https://elitewebdevelopers.kameshravirks.workers.dev",
      category: "Agency Showcase",
      description: "Our high-performance digital hub showcasing our commitment to full-stack excellence.",
      color: "from-zinc-700 to-black"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 italic">FEATURED WORK</h2>
            <p className="text-gray-500 max-w-md">Every project is a fusion of corporate reliability and creative freedom.</p>
          </div>
          <div className="group cursor-pointer flex items-center gap-2 text-gray-400 font-medium hover:text-white transition-colors">
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <PortfolioItem 
              key={i} 
              title={project.title}
              url={project.url}
              category={project.category}
              description={project.description}
              color={project.color}
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Code className="w-6 h-6" />, title: "Custom Web Apps", desc: "Complex business logic translated into sleek, high-performing web applications." },
    { icon: <Globe className="w-6 h-6" />, title: "Brand Identity", desc: "Complete visual systems that define who you are in the digital space." },
    { icon: <Zap className="w-6 h-6" />, title: "Performance SEO", desc: "Lightning fast loads and search engine optimization that puts you on page one." }
  ];

  return (
    <section id="services" className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[60px] p-1 overflow-hidden"
          >
             <div className="w-full h-full bg-zinc-900 rounded-[58px] flex items-center justify-center p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
                <div className="text-center relative z-10">
                   <div className="text-8xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 tracking-widest pointer-events-none">EST. 2026</div>
                   <h4 className="text-4xl font-bold text-white mb-4 tracking-tight">The Origin Story</h4>
                   <p className="text-gray-400 max-w-sm mx-auto font-medium">5 Years Corporate Expertise. <br />Infinite Creative Vision.</p>
                </div>
                <Users className="absolute bottom-10 right-10 w-20 h-20 text-blue-500/10" />
             </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8 italic">
              FROM CORPORATE <br /><span className="text-blue-500">TO CREATIVE.</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-medium">
              After spending <span className="text-white italic underline">5 powerful years</span> in the corporate engine room, honing technical precision and mastering enterprise standards, we decided it was time to bring that 'Elite' level of engineering to the visionary businesses.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mt-6">
              Founded by Kamesh, Elite Web Developers was born from a simple realization: the web deserves better than generic templates. We combine corporate-grade stability with boutique creative flair.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 py-8 border-y border-white/5"
          >
             <div>
                <div className="text-4xl font-bold text-white tracking-tight">5+ YRS</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-black mt-2">Corp Experience</div>
             </div>
             <div>
                <div className="text-4xl font-bold text-white tracking-tight">Elite</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-black mt-2">Design Standards</div>
             </div>
          </motion.div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 font-bold text-white text-lg hover:text-blue-400 transition-all cursor-pointer"
          >
            Work With Kamesh <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white h-full"></div>)}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 italic">
          READY TO START YOUR NEXT PROJECT?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          We are currently accepting new clients for late 2026. Reach out and let's build something elite together.
        </p>
        <a 
          href="mailto:kameshravirks@gmail.com" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl text-xl hover:scale-105 transition-transform"
        >
          Get In Touch <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
             <img 
               src="/logo.png" 
               alt="EWD" 
               className="h-8 w-auto object-contain brightness-0 invert opacity-50" 
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
            <span className="text-lg font-bold tracking-tight text-white uppercase italic opacity-50">ELITE WEB DEVELOPERS</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Elite Web Developers. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
            <Twitter className="w-5 h-5" />
          </div>
          <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
            <Linkedin className="w-5 h-5" />
          </div>
          <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white">
            <Github className="w-5 h-5" />
          </div>
        </div>
        <div className="text-gray-500 text-sm font-medium">
          BASED WORLDWIDE.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-blue-500 selection:text-white scroll-smooth outline-none">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
