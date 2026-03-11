import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Github, Linkedin, Youtube, Globe, MessageCircle } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full pt-24 pb-20 font-sans" style={{ position: 'relative', overflow: 'hidden', minHeight: '520px' }}>
      <div className="w-full px-4 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-20">
        {/* Left: Logo + Stay Updated */}
        <div className="flex-1 min-w-[320px] flex flex-col items-start">
          {/* Logo */}
          <div className="mb-10">
            {/* Replace with your SVG or logo image if available */}
            <img src="/Logo.png" alt="Logo" className="h-12 mb-6" />
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-normal mb-10">Stay updated.</h2>
          {/* Email subscribe form (replaces JOIN DISCORD) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full mb-6"
          >
            <SubscribeInput />
          </form>
          {/* Social icons - moved up to avoid overlap with background text */}
          <div className="flex items-center gap-8 mt-2 mb-0" style={{ marginBottom: '2.5rem' }}>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin size={30} /></a>

          </div>
        </div>

        {/* Right: Menu Columns */}
        <div className="flex-1 w-full flex flex-col sm:flex-row justify-end gap-12 lg:gap-20">
          {/* Solutions & Product */}
          <div>
            <h4 className="text-[10px] text-gray-500 font-black mb-6 tracking-[0.2em] uppercase">Architecture</h4>
            <ul className="space-y-3 font-bold text-sm uppercase tracking-tighter">
              <li><Link to="/problem" className="hover:text-red-500 transition-colors">The Problem</Link></li>
              <li><Link to="/solutions" className="hover:text-red-500 transition-colors">Solutions</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Products</Link></li>
              <li><Link to="/platform" className="hover:text-red-500 transition-colors">Platform</Link></li>
              <li><Link to="/how-it-works" className="hover:text-red-500 transition-colors">Mechanism</Link></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-[10px] text-gray-500 font-black mb-6 tracking-[0.2em] uppercase">Ecosystem</h4>
            <ul className="space-y-3 font-bold text-sm uppercase tracking-tighter">
              <li><Link to="/marketplace" className="hover:text-red-500 transition-colors">Marketplace</Link></li>
              <li><Link to="/security" className="hover:text-red-500 transition-colors">Security</Link></li>
              <li><Link to="/partners" className="hover:text-red-500 transition-colors">Partners</Link></li>
              <li><Link to="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-[10px] text-gray-500 font-black mb-6 tracking-[0.2em] uppercase">Institutional</h4>
            <ul className="space-y-3 font-bold text-sm uppercase tracking-tighter">
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
              <li><Link to="/founder" className="hover:text-red-500 transition-colors">Mission</Link></li>
              <li><Link to="/blog" className="hover:text-red-500 transition-colors">Insights</Link></li>
              <li><Link to="/documentation" className="hover:text-red-500 transition-colors">Documentation</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full flex justify-end items-center mt-8 pr-8">
        <span className="text-xs font-mono text-white/90">© CompliLedger 2026</span>
      </div>
      {/* Large background text centered at bottom with fading effect */}
      <div className="pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2 w-full flex justify-center items-end overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
        <span
          className="font-mono font-bold tracking-tighter leading-none"
          style={{
            fontSize: 'clamp(7rem, 18vw, 15rem)',
            color: 'transparent',
            WebkitTextStroke: '2.5px rgba(255,255,255,0.13)',
            filter: 'blur(0.5px) drop-shadow(0 8px 32px #0008)',
            textAlign: 'center',
            width: '100%',
            display: 'block',
            lineHeight: 1.05,
            WebkitTextFillColor: 'transparent',
            opacity: 0.9,
            marginBottom: '0.5rem',
          }}
        >
          CompliLedger
        </span>
      </div>
    </footer>
  );
};

export default Footer;

// Small inline subscribe input component
const SubscribeInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const validateEmail = (value: string) => {
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleSend = () => {
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    // Try a mailto fallback to send email to your subscriptions address
    const to = '';
    const subject = encodeURIComponent('Subscribe Request');
    const body = encodeURIComponent(`Please add ${email} to the newsletter list.`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
      <input
        type="email"
        aria-label="Email address"
        placeholder="YOUR EMAIL"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
        className="px-4 py-3 bg-black font-mono border border-gray-700  text-white placeholder-gray-400 w-full sm:w-auto"
        style={{ minWidth: 220 }}
      />
      <button
        type="button"
        onClick={handleSend}
        className="px-6 py-3 bg-white text-black font-mono text-base tracking-wide uppercase border border-black hover:bg-neutral-200 transition"
      >
        Subscribe
      </button>
      <div className="mt-2 sm:mt-0 text-sm min-w-[160px]">
        {status === 'error' && <span className="text-red-400">Please enter a valid email.</span>}
        {status === 'sent' && <span className="text-green-400">Opened mail client to send subscription.</span>}
      </div>
    </div>
  );
};