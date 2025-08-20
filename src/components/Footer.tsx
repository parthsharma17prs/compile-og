import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6">
                <img
                  src="/Logo.png"
                  alt="CompliLedger Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-space-grotesk font-bold">
                CompliLedger
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Provable compliance through Zero-Knowledge Proofs and blockchain technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link to="/demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Book Demo
              </Link>
              <Link to="/partners" className="block text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <a href="mailto:maranda@compliledger.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get compliance insights and product updates.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter email"
                className="flex-1"
              />
              <Button size="sm" className="btn-glow">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CompliLedger. All rights reserved.
          </p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;