import { HeroButton } from "@/components/ui/hero-button";
import { Play, Users, Trophy, Shield, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/sai-hero.jpg";

export function HeroSection() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First",
      description: "Works on any smartphone, even offline"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Blockchain Secure",
      description: "Tamper-proof assessment records"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "AI Analysis",
      description: "Instant performance evaluation"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Athletes in training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sai-navy/90 via-sai-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Trophy className="h-4 w-4 text-sai-gold" />
                <span className="text-sm font-medium">Excellence in Sports</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover India's
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Next Champions</span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                Revolutionary AI-powered talent assessment platform enabling secure, standardized fitness evaluations across India. From rural villages to urban centers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton variant="hero" size="xl" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Assessment
              </HeroButton>
              <HeroButton variant="outline" size="xl">
                <Users className="mr-2 h-5 w-5" />
                Official Dashboard
              </HeroButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-sai-gold">50K+</div>
                <div className="text-sm text-gray-300">Athletes Assessed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sai-gold">500+</div>
                <div className="text-sm text-gray-300">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sai-gold">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}