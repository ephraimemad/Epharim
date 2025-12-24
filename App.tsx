import React from 'react';
import { Github, Linkedin, Mail, Sparkles, Terminal, Layout, Code2, Cpu } from 'lucide-react';
import { SERVICES, PROJECTS } from './constants.tsx';
import SectionHeader from './components/SectionHeader.tsx';
import ContactForm from './components/ContactForm.tsx';

const App: React.FC = () => {
  const email = "ephraimemad56@gmail.com";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500 selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter">
            EPHRAIM <span className="text-violet-400">EMAD</span>
          </span>
          <nav className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="bg-white/5 text-white px-6 py-2.5 rounded-full border border-white/10 hover:bg-violet-600 hover:border-violet-600 transition-all">Let's Talk</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Abstract Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/20 text-violet-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={12} className="animate-pulse" /> Available for AI Engineering
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter">
              Hi, I'm <br/><span className="gradient-text">Ephraim.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              I build <span className="text-white font-medium">intelligent systems</span> that transform raw data into high-impact business products.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-6">
              <a href="#contact" className="bg-white text-black px-10 py-4.5 rounded-full font-bold hover:bg-violet-600 hover:text-white transition-all flex items-center gap-3 shadow-2xl shadow-white/5 text-lg">
                Get In Touch <Mail size={20} />
              </a>
              <div className="flex items-center gap-8 px-4">
                <a href="https://github.com/ephraimemad" target="_blank" className="text-gray-500 hover:text-white transition-all hover:scale-110">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/ephraimemad" target="_blank" className="text-gray-500 hover:text-white transition-all hover:scale-110">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative w-72 h-72 md:w-[440px] md:h-[440px] flex-shrink-0 order-first md:order-last">
            <div className="profile-frame w-full h-full accent-glow">
              <img 
                src="./profile.jpg" 
                alt="Ephraim Emad" 
                className="w-full h-full object-cover rounded-full border-[6px] border-[#050505]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Ephraim+Emad&background=8b5cf6&color=fff&size=800';
                }}
              />
            </div>
            {/* Status Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-950/90 border border-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-2xl hidden md:flex items-center gap-4 animate-in slide-in-from-left duration-1000">
              <div className="p-3 bg-violet-500/10 rounded-2xl text-violet-400">
                <Cpu size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Core Focus</div>
                <div className="text-sm font-bold">Deep Learning & NLP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Specialized Services" 
            subtitle="I provide technical leadership and implementation for AI-driven transformation." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
            {SERVICES.map(service => (
              <div key={service.id} className="p-10 border border-white/5 rounded-[2.5rem] bg-zinc-950/40 hover:bg-zinc-900 transition-all group hover:border-violet-500/30">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 mb-8 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-all">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-violet-200 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Technical Case Studies" 
            subtitle="Proof-of-concepts and production systems built to solve complex data hurdles."
          />
          <div className="grid md:grid-cols-2 gap-10 pt-20">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative p-10 border border-white/5 rounded-[3rem] bg-black hover:bg-zinc-900/50 transition-all flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Code2 size={48} className="text-violet-500" />
                </div>
                <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map(tool => (
                        <span key={tool} className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">{project.problem}</p>
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[11px] text-violet-400 font-black uppercase tracking-[0.2em] mb-2">Measurable ROI</div>
                    <p className="text-sm text-gray-300 font-medium italic">"{project.value}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Let's build.</h2>
            <p className="text-xl text-gray-500 font-light">
              Ready to integrate AI into your workflow? Reach out at <br/>
              <a href={`mailto:${email}`} className="text-white font-bold hover:text-violet-400 transition-all underline decoration-violet-500/30 underline-offset-8 decoration-2">{email}</a>
            </p>
          </div>
          
          <ContactForm email={email} />
          
          <div className="pt-24 border-t border-white/5 grid md:grid-cols-3 gap-16 text-left">
            <div className="space-y-4">
              <Layout size={24} className="text-violet-500" />
              <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-300">Scalable Systems</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-light">I architect solutions that grow from experimental MVPs to robust enterprise architectures.</p>
            </div>
            <div className="space-y-4">
              <Terminal size={24} className="text-violet-500" />
              <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-300">Clean Implementation</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-light">Production-ready code that is modular, documented, and easy for your team to maintain.</p>
            </div>
            <div className="space-y-4">
              <Cpu size={24} className="text-violet-500" />
              <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-300">Strategic AI</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-light">I focus on real-world utility and business value, cutting through the generative AI hype.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-gray-600 text-[11px] font-black uppercase tracking-[0.3em]">
          <p>© 2024 Ephraim Emad.</p>
          <div className="flex gap-12">
            <a href="https://github.com/ephraimemad" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ephraimemad" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;