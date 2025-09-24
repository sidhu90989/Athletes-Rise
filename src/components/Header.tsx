import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Settings, LogOut, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import saiLogo from "@/assets/sai-logo.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Athletes", href: "#athletes" },
    { name: "Tests", href: "#tests" },
    { name: "Analytics", href: "#analytics" },
    { name: "Physicians Data", href: "#physicians" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src={saiLogo} alt="SAI Logo" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-sai-navy">Sports Authority of India</h1>
              <p className="text-xs text-muted-foreground">Talent Assessment Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <a
                  href={item.href}
                  className="text-foreground hover:text-sai-saffron transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
                {item.name === "Physicians Data" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-2 py-1 h-6 border-sai-saffron text-sai-saffron hover:bg-sai-saffron hover:text-white"
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Authentication Section */}
            {isAuthenticated ? (
              /* User Menu */
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-sai-saffron transition-all duration-300">
                    <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                      AD
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@sai.gov.in</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-destructive cursor-pointer"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              /* Login Button */
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild className="text-foreground hover:text-sai-saffron">
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="default" asChild className="bg-sai-saffron hover:bg-sai-saffron/90">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground hover:text-sai-saffron transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-sai-saffron transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <HeroButton variant="hero" size="lg" className="mt-4">
                Quick Assessment
              </HeroButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}