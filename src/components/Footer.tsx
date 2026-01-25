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
        <div className="flex-1 w-full flex flex-col sm:flex-row justify-end gap-12">
          {/* Product */}
          <div>
            <h4 className="text-xs text-gray-400 font-mono mb-4 tracking-widest">PRODUCT</h4>
              <ul className="space-y-2 font-mono text-lg">
              <li><a href="/how-it-works" className="hover:underline">HOW IT WORKS</a></li>
              <li><a href="/demo" className="hover:underline">BOOK A DEMO</a></li>
              <li><a href="/partners" className="hover:underline">PARTNERS</a></li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs text-gray-400 font-mono mb-4 tracking-widest">COMPANY</h4>
            <ul className="space-y-2 font-mono text-lg">
              <li><a href="/about" className="hover:underline">ABOUT</a></li>
              <li><a href="/blog" className="hover:underline">BLOG</a></li>
              <li><a href="/contact" className="hover:underline">CONTACT</a></li>

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
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

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