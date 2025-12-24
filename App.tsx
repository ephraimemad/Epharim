import React from 'react';
import { Github, Linkedin, Youtube, Mail, Sparkles, ArrowRight, MessageSquare, Terminal, Layout } from 'lucide-react';
import { SERVICES, PROJECTS, CONTENT_STRATEGIES } from './constants.tsx';
import SectionHeader from './components/SectionHeader.tsx';
import ContactForm from './components/ContactForm.tsx';

const App: React.FC = () => {
  const email = "ephraimemad56@gmail.com";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            EPHRAIM <span className="text-violet-400">EMAD</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="bg-violet-500/10 text-violet-400 px-5 py-2 rounded-full border border-violet-500/20 hover:bg-violet-500 hover:text-white transition-all">Say Hi!</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Open for collaboration
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Hi, this is <span className="gradient-text">Ephraim!</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              I'm an <span className="text-white font-medium">AI Engineer</span>. I help people build smart, friendly software that uses data to solve real problems.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a href="#contact" className="bg-violet-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-violet-500 hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-violet-600/20">
                Contact Me <Mail size={18} />
              </a>
              <div className="flex items-center gap-6 px-4">
                <a href="https://github.com/ephraimemad" target="_blank" className="text-gray-500 hover:text-violet-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/ephraimemad" target="_blank" className="text-gray-500 hover:text-violet-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 order-first md:order-last">
            <div className="absolute inset-0 bg-violet-500 blur-[60px] opacity-20"></div>
            <div className="profile-frame w-full h-full">
              <img 
                src="profile.jpg"
                alt="Ephraim Emad"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Ephraim+Emad&background=8b5cf6&color=fff&size=512';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-white">Making AI easy for everyone.</h2>
            <p>
              I specialize in building Machine Learning systems that aren't just powerful, but practical. I believe technology should disappear into the background while it solves your biggest bottlenecks.
            </p>
            <p>
              I work with startups to turn complex data into features that users love. Whether it's automation, chat systems, or custom models—I'm here to help.
            </p>
          </div>
          <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 accent-glow">
            <h3 className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'FastAPI', 'LLMs', 'NLP', 'Computer Vision', 'React', 'Data Strategy'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-violet-500/5 text-xs font-semibold text-violet-200 rounded-lg border border-violet-500/10 transition-colors">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="How I can help" 
            subtitle="Tailored AI solutions to help you scale and simplify." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(service => (
              <div key={service.id} className="p-8 border border-white/5 rounded-3xl bg-zinc-950 hover:bg-zinc-900 transition-all group hover:border-violet-500/30">
                <h3 className="text-lg font-bold mb-3 group-hover:text-violet-300 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Recent Work" 
            subtitle="Real systems built for real problems."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="p-8 border border-white/5 rounded-[2rem] bg-black hover:border-violet-500/20 transition-all group flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-violet-300 transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="text-[10px] font-bold text-violet-300/70 uppercase tracking-wider bg-violet-500/5 px-2.5 py-1 rounded-full border border-violet-500/10">{tool}</span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-violet-500/5 text-xs text-gray-300 italic">
                    <span className="text-violet-400 font-bold not-italic mr-1">Result:</span> {project.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's chat!</h2>
            <p className="text-lg text-gray-400">
              Have a question or a project? Drop a line below or email me directly at <a href={`mailto:${email}`} className="text-violet-400 font-bold hover:underline underline-offset-4">{email}</a>
            </p>
          </div>
          
          <ContactForm email={email} />
          
          <div className="pt-20 border-t border-white/5 text-left grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <Layout size={20} className="text-violet-400 mx-auto md:mx-0" />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Scale Up</h4>
              <p className="text-xs text-gray-500">Built to grow from MVP to production.</p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <Terminal size={20} className="text-violet-400 mx-auto md:mx-0" />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Clean Code</h4>
              <p className="text-xs text-gray-500">Reliable, documented, and maintainable tech.</p>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <MessageSquare size={20} className="text-violet-400 mx-auto md:mx-0" />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Partner</h4>
              <p className="text-xs text-gray-500">I help you find real value, not just follow trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2024 Ephraim Emad.</p>
          <div className="flex gap-8 font-semibold">
            <a href="https://github.com/ephraimemad" className="hover:text-violet-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ephraimemad" className="hover:text-violet-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${email}`} className="hover:text-violet-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;