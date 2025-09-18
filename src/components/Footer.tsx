import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const handleSubscribeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[name="email"]') as HTMLInputElement | null;
    if (!input) return;
    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
    const subject = encodeURIComponent('Subscription request – CompliLedger updates');
    const bodyText = `Hello CompliLedger Team,\n\nI would like to subscribe to CompliLedger news and product updates.\n\nSubscriber details:\n- Email: ${subscriberEmail || '(not provided)'}\n\nIf any additional information is required, please let me know.\n\nThank you.\n\nBest regards,`;
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:info@compliledger.com?subject=${subject}&body=${body}`;
  };
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

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link to="/platform" className="block text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </Link>
              <Link to="/solutions" className="block text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </Link>
              <Link to="/security" className="block text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
              <Link to="/demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Book Demo
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/founder" className="block text-muted-foreground hover:text-foreground transition-colors">
                Our Founder
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/partners" className="block text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
              <a href="mailto:info@compliledger.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get compliance insights and product updates.
            </p>
            <form className="flex space-x-2" onSubmit={handleSubscribeSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <Input
                id="newsletter-email"
                name="email"
                placeholder="Enter email"
                className="flex-1"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                type="email"
                autoComplete="email"
                inputMode="email"
                required
              />
              <Button
                size="sm"
                className="btn-glow"
                type="submit"
                aria-label="Email info@compliledger.com to subscribe"
                disabled={!subscriberEmail}
                title={!subscriberEmail ? 'Please enter your email' : undefined}
              >
                <Mail size={16} />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CompliLedger. All rights reserved.
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