
import React from 'react';
import { Github, Linkedin, Youtube, Mail, Award, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { SERVICES, PROJECTS, CONTENT_STRATEGIES } from './constants';
import SectionHeader from './components/SectionHeader';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500 selection:text-white">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-display text-2xl font-bold tracking-tighter">
            EPHRAIM <span className="text-violet-500">EMAD</span>
          </span>
          <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#content" className="hover:text-white transition-colors">Content</a>
            <a href="#contact" className="hover:text-violet-400 transition-colors font-bold text-violet-500 border-b border-violet-500/0 hover:border-violet-500">Contact Me</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Available for freelance
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Hi, I'm <span className="gradient-text">Ephraim Emad</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed font-light">
              I build <span className="text-white font-normal">intelligent solutions</span> that help startups and businesses scale through AI. Let's turn your data into your biggest advantage.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="bg-violet-600 text-white px-8 py-4 rounded-full font-bold hover:bg-violet-500 transition-all flex items-center gap-2 shadow-lg shadow-violet-500/20">
                Contact Me <Mail size={18} />
              </a>
              <div className="flex items-center gap-6 px-4">
                <a href="https://github.com/ephraimemad" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/ephraimemad" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://youtube.com/@ephraimemad" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 bg-violet-500 blur-[80px] opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 accent-glow bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" 
                alt="Ephraim Emad" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Hi, I'm Ephraim" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                As an AI developer and content creator, I recognize that the biggest hurdle for businesses isn't the lack of technology—it's the lack of clarity on how to apply it effectively.
              </p>
              <p>
                I specialize in building ML and AI systems that aren't just technically "accurate" in a lab setting, but robust enough to solve actual business bottlenecks. My focus is always on clear, measurable results that impact your bottom line.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="font-bold text-violet-400 mb-2 uppercase tracking-widest text-xs">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'NumPy/Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'FastAPI', 'LLM Integration', 'NLP', 'Computer Vision'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-violet-500/5 text-xs font-mono text-violet-300 rounded-lg border border-violet-500/10 hover:bg-violet-500/10 transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Core Services" 
            subtitle="Strategic AI solutions designed to bridge the gap between complexity and profitability." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(service => (
              <div key={service.id} className="p-8 border border-white/5 rounded-2xl bg-zinc-950 hover:bg-zinc-900 transition-all group hover:border-violet-500/30">
                <h3 className="text-xl font-bold mb-4 group-hover:text-violet-400 transition-colors">{service.title}</h3>
                <div className="space-y-4 text-xs">
                  <p className="text-gray-500 leading-relaxed"><strong className="text-white uppercase tracking-tighter mr-1">Problem:</strong> {service.problem}</p>
                  <p className="text-gray-400 leading-relaxed text-sm pt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Recent Work" 
            subtitle="Practical ML/AI applications across various domains, built for production."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="p-8 border border-white/5 rounded-3xl bg-black hover:border-violet-500/20 transition-all group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold group-hover:text-violet-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-mono text-violet-400/80 uppercase bg-violet-500/5 px-2 py-0.5 rounded border border-violet-500/10">{tool}</span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  <div className="p-4 bg-zinc-950 rounded-xl border border-white/5 text-xs leading-relaxed text-gray-300 italic">
                    <span className="text-violet-500 font-bold not-italic mr-1">Result:</span> {project.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creator Section */}
      <section id="content" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Sharing Knowledge" 
            subtitle="I build in public and teach others how to master AI and machine learning." 
          />
          <div className="grid md:grid-cols-3 gap-6">
            {CONTENT_STRATEGIES.map(content => (
              <div key={content.platform} className="p-8 bg-zinc-950 border border-white/5 rounded-2xl flex flex-col gap-4 hover:border-violet-500/20 transition-all">
                <div className="bg-violet-500/10 w-12 h-12 flex items-center justify-center rounded-xl">
                  {content.platform === 'YouTube' && <Youtube className="text-violet-400" />}
                  {content.platform === 'Short-Form (Reels/TikTok)' && <BookOpen className="text-violet-400" />}
                  {content.platform === 'LinkedIn' && <Linkedin className="text-violet-400" />}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{content.platform}</h4>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">{content.strategy}</p>
                  <p className="text-xs text-violet-400/60 font-medium">— {content.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Let's work together</h2>
            <p className="text-xl text-gray-400">
              Have a project in mind or just want to chat about AI? Send me a message below.
            </p>
          </div>
          
          <ContactForm />
          
          <div className="pt-20 border-t border-white/5 text-left grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Layers className="text-violet-500" size={20} />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Scale</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Solutions designed to grow from MVP to production-ready architectures.</p>
            </div>
            <div className="space-y-3">
              <Terminal className="text-violet-500" size={20} />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Reliability</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Clean, documented, and modular code with a focus on long-term stability.</p>
            </div>
            <div className="space-y-3">
              <Award className="text-violet-500" size={20} />
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-200">Trust</h4>
              <p className="text-xs text-gray-500 leading-relaxed">I prioritize real business value over hype, ensuring your investment pays off.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2024 Ephraim Emad. <span className="text-violet-500/50">Built for the future of AI.</span></p>
          <div className="flex gap-8">
            <a href="https://github.com/ephraimemad" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ephraimemad" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://youtube.com/@ephraimemad" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
