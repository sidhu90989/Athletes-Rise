import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Shield,
  Award,
  Users,
  Globe
} from "lucide-react";
import saiLogo from "@/assets/sai-logo.png";

export function Footer() {
  const quickLinks = [
    { name: "About SAI", href: "#about" },
    { name: "Athlete Portal", href: "#athletes" },
    { name: "Official Dashboard", href: "#officials" },
    { name: "Assessment Tests", href: "#tests" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "User Guide", href: "#guide" },
    { name: "Technical Support", href: "#support" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Data Protection", href: "#data-protection" },
    { name: "Compliance", href: "#compliance" },
  ];

  return (
    <footer className="bg-sai-navy text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={saiLogo} alt="SAI Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Sports Authority of India</h3>
                <p className="text-sm text-gray-300">Talent Assessment Platform</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md leading-relaxed">
              Empowering India's next generation of athletes through cutting-edge technology and standardized assessment protocols. Building champions from every corner of our nation.
            </p>

            {/* Government Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-sai-saffron text-white border-0">
                <Award className="mr-1 h-3 w-3" />
                Government of India
              </Badge>
              <Badge className="bg-sai-green text-white border-0">
                <Shield className="mr-1 h-3 w-3" />
                Secure Platform
              </Badge>
              <Badge className="bg-sai-gold text-sai-navy border-0">
                <Globe className="mr-1 h-3 w-3" />
                National Initiative
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-sai-saffron" />
                <span>Sports Authority of India, New Delhi - 110003</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-sai-saffron" />
                <span>+91-11-2436-8500</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-sai-saffron" />
                <span>support@sai-assessment.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-sai-saffron transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support & Legal</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-sai-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© 2024 Sports Authority of India. All rights reserved.</span>
            <Separator orientation="vertical" className="h-4 bg-gray-600" />
            <span>National Sports Development Initiative</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-sai-gold" />
              <span>50,000+ Athletes Assessed</span>
            </div>
            <Separator orientation="vertical" className="h-4 bg-gray-600" />
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-sai-green" />
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}