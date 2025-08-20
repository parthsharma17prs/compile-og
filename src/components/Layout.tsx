import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background pattern-grid bg-grain transition-all duration-500">
      <Navigation />
      <main className="pt-16 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;