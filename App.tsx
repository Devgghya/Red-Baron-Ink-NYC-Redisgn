import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Instagram, Facebook, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, ARTISTS, GALLERY_IMAGES, FEATURES, STUDIO_ADDRESS, STUDIO_PHONE } from './constants';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-gold selection:text-black antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="border-2 border-gold px-3 py-2 text-center leading-none">
              <span className="block text-lg md:text-xl font-serif font-bold text-white tracking-widest uppercase">
                Red Baron <span className="text-gold">Ink</span>
              </span>
              <span className="block text-[0.55rem] md:text-[0.6rem] text-gray-300 tracking-[0.2em] uppercase mt-1">
                Tattoo & Piercing
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="border border-gold text-gold hover:bg-gold hover:text-black px-6 py-2 uppercase text-xs tracking-widest font-bold transition-all duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-gold transition-colors">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10">
            <div className="flex flex-col p-6 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-serif text-white hover:text-gold text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2609&auto=format&fit=crop" 
            alt="Tattoo Studio Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h2 className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-bold animate-fade-in-up">
            Est. 2024 • New York City
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight shadow-lg animate-fade-in-up delay-100">
            NYC'S PREMIER <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
              CUSTOM TATTOO
            </span> STUDIO
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Located on W 14th Street. Masters of Realism, Fine Line, and Sacred Geometry.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button className="bg-gold text-black px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Book Appointment
            </button>
            <button className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:border-gold hover:text-gold transition-colors duration-300">
              View Gallery
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* The Studio Features */}
      <section id="studio" className="py-24 bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Experience</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-black/40 border border-white/5 p-8 hover:border-gold/40 transition-all duration-500 group">
                <div className="mb-6 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section id="artists" className="py-24 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="mb-6 md:mb-0">
              <span className="text-gold text-sm tracking-widest uppercase font-bold">World Class Talent</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Resident Artists</h2>
            </div>
            <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-gold transition-colors">
              View All Artists <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {ARTISTS.map((artist) => (
              <div key={artist.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-gold transition-colors">{artist.name}</h3>
                  <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">{artist.specialty}</p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{artist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Selected Works</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['All', 'Realism', 'Fine Line', 'Traditional', 'Geometry'].map((filter) => (
                <button 
                  key={filter}
                  className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${filter === 'All' ? 'text-gold border-b border-gold' : 'text-gray-500'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((item) => (
              <div key={item.id} className="relative group overflow-hidden aspect-square border border-white/5 bg-black">
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-gold text-xs uppercase tracking-widest font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Category
                  </span>
                  <h3 className="text-2xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-gold text-gold hover:bg-gold hover:text-black px-10 py-3 uppercase tracking-widest font-bold text-sm transition-all duration-300">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-16">
            <div className="flex flex-col items-center md:items-start">
               <div className="border-2 border-gold px-3 py-2 text-center leading-none mb-6 inline-block">
                <span className="block text-xl font-serif font-bold text-white tracking-widest uppercase">
                  Red Baron <span className="text-gold">Ink</span>
                </span>
                <span className="block text-[0.6rem] text-gray-300 tracking-[0.2em] uppercase mt-1">
                  Tattoo & Piercing
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Setting the standard for luxury tattooing in New York City. Where artistry meets precision in a private, sterile environment.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="text-white font-serif font-bold text-lg mb-6">Contact</h4>
              <p className="text-gray-400 mb-2 flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <MapPin size={16} className="text-gold" /> {STUDIO_ADDRESS}
              </p>
              <p className="text-gray-400 mb-2 flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Instagram size={16} className="text-gold" /> @RedBaronInk
              </p>
              <p className="text-gray-400 flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                <Facebook size={16} className="text-gold" /> Red Baron Ink
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-white font-serif font-bold text-lg mb-6">Hours</h4>
              <ul className="text-gray-400 text-sm space-y-2 text-center md:text-right">
                <li><span className="text-gold mr-2">Mon - Fri</span> 11:00 AM - 8:00 PM</li>
                <li><span className="text-gold mr-2">Sat</span> 12:00 PM - 9:00 PM</li>
                <li><span className="text-gold mr-2">Sun</span> By Appointment Only</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
            <p>&copy; 2024 Red Baron Ink Tattoo and Piercing. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}