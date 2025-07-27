import { Recycle, Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Recycle className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">ReHarvest</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transforming surplus into shared community resources. 
              Building a circular economy one exchange at a time.
            </p>
            <p className="text-accent font-medium text-sm">
              Reclaim. Reuse. Reharvest.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#browse" className="text-primary-foreground/80 hover:text-accent transition-colors">Browse Listings</a></li>
              <li><a href="#post" className="text-primary-foreground/80 hover:text-accent transition-colors">Post Surplus</a></li>
              <li><a href="#impact" className="text-primary-foreground/80 hover:text-accent transition-colors">Impact Dashboard</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sustainability Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Composting Tips</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Food Safety Guidelines</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">hello@reharvest.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2024 ReHarvest. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;