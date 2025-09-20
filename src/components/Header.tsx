import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Trophy, Activity } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Assessments", href: "#assessments" },
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "#dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">Athlete Rise</span>
            <span className="text-xs text-muted-foreground">Sports Assessment Platform</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-athlete-orange transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button className="bg-gradient-hero text-white border-0 hover:opacity-90">
            <Activity className="mr-2 h-4 w-4" />
            Start Assessment
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-hero rounded-md">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">Athlete Rise</span>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-athlete-orange transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button className="bg-gradient-hero text-white border-0 hover:opacity-90 justify-start">
                  <Activity className="mr-2 h-4 w-4" />
                  Start Assessment
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}