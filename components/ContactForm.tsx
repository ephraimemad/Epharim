import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  email?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ email = "ephraimemad56@gmail.com" }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-violet-500/5 border border-violet-500/10 p-12 rounded-[2rem] text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-600/30">
            <CheckCircle className="text-white w-8 h-8" />
          </div>
        </div>
        <h3 className="text-2xl font-bold">Sent!</h3>
        <p className="text-gray-400">Thanks for reaching out! I'll get back to you soon.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-violet-400 font-bold hover:text-violet-300 underline underline-offset-4"
        >
          Send another?
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left bg-zinc-950 p-6 md:p-10 rounded-[2rem] border border-white/5 accent-glow">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Name</label>
          <input
            required
            type="text"
            placeholder="What's your name?"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-violet-500 transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Email</label>
          <input
            required
            type="email"
            placeholder="Where should I reply?"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-violet-500 transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Message</label>
        <textarea
          required
          rows={5}
          placeholder="What are you working on?"
          className="w-full bg-black border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-violet-500 transition-all resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        disabled={status === 'sending'}
        type="submit"
        className="w-full bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-violet-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </button>
    </form>
  );
};

export default ContactForm;