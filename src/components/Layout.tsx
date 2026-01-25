"use client";
import React, { useEffect, useState, ReactNode } from 'react';
import { Navigation } from './Navigation';
import Footer from './Footer';
import { EncryptedText } from '@/components/ui/encrypted-text';

interface LayoutProps {
  children: ReactNode;
}

// Loader configuration — edit these values to adjust behavior/style
const LOADER_TEXT = 'Loading CompliLedger...';
const LOADER_DURATION_MS = 2200; // how long the loader stays visible
const LOADER_TEXT_CLASSES = 'text-white text-2xl md:text-4xl tracking-wider';
const LOADER_ENCRYPTED_CLASS = 'text-white/60';
const LOADER_REVEALED_CLASS = 'text-white font-semibold';

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background bg-black transition-all duration-500">
      <Navigation />
      <main className="pt-16 relative">
        {children}
      </main>
      <Footer />

      {loading && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <EncryptedText
            text={LOADER_TEXT}
            className={LOADER_TEXT_CLASSES}
            encryptedClassName={LOADER_ENCRYPTED_CLASS}
            revealedClassName={LOADER_REVEALED_CLASS}
            revealDelayMs={60}
            flipDelayMs={40}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;