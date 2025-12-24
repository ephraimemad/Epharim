
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-violet-500/10 border border-violet-500/20 p-12 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center">
          <CheckCircle className="text-violet-500 w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-gray-400">Thanks for reaching out, Ephraim will get back to you soon.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-violet-400 text-sm font-semibold hover:text-violet-300 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left bg-zinc-950 p-8 rounded-2xl border border-white/5 accent-glow">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Your Name</label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">How can I help?</label>
        <textarea
          required
          rows={4}
          placeholder="Tell me about your project or just say hi..."
          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        disabled={status === 'sending'}
        type="submit"
        className="w-full bg-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
      >
        {status === 'sending' ? 'Sending...' : (
          <>Send Message <Send size={18} /></>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
