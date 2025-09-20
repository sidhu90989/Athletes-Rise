import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Trophy, 
  Target, 
  Activity,
  Users,
  Award,
  TrendingUp,
  Smartphone
} from "lucide-react";

export function HeroSection() {
  const stats = [
    { value: "50K+", label: "Athletes Assessed", icon: <Users className="h-4 w-4" /> },
    { value: "95%", label: "Accuracy Rate", icon: <Target className="h-4 w-4" /> },
    { value: "1M+", label: "Tests Completed", icon: <Activity className="h-4 w-4" /> },
    { value: "24/7", label: "AI Analysis", icon: <TrendingUp className="h-4 w-4" /> },
  ];

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-athlete-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-athlete-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="text-athlete-orange border-athlete-orange">
                AI-Powered Sports Assessment
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Rise to Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Athletic Peak
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Advanced AI technology analyzes your fitness tests in real-time. Get instant feedback, 
                track progress, and unlock your true athletic potential with our comprehensive assessment platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero text-white border-0 hover:opacity-90 shadow-elegant">
                <Play className="mr-2 h-5 w-5" />
                Start Free Assessment
              </Button>
              <Button variant="outline" size="lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-athlete-orange">
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mock App Preview */}
          <div className="relative">
            <Card className="bg-card border-0 shadow-assessment overflow-hidden">
              <CardContent className="p-0">
                {/* Phone Mockup */}
                <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                    {/* App Header */}
                    <div className="bg-gradient-hero p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-6 w-6" />
                          <span className="font-bold">Athlete Rise</span>
                        </div>
                        <Award className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold">Welcome Back, Alex!</h3>
                      <p className="text-white/80 text-sm">Ready for today's assessment?</p>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 space-y-4">
                      <div className="bg-athlete-green/10 p-4 rounded-lg border border-athlete-green/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-athlete-green">Sprint Test</h4>
                            <p className="text-sm text-muted-foreground">40m dash analysis</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-athlete-green">5.8s</div>
                            <div className="text-xs text-muted-foreground">Personal Best</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-athlete-purple/10 p-4 rounded-lg border border-athlete-purple/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-athlete-purple">Vertical Jump</h4>
                            <p className="text-sm text-muted-foreground">Height measurement</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-athlete-purple">62cm</div>
                            <div className="text-xs text-muted-foreground">+5cm improvement</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-athlete-blue/10 p-4 rounded-lg border border-athlete-blue/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-athlete-blue">Endurance</h4>
                            <p className="text-sm text-muted-foreground">VO2 Max estimate</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-athlete-blue">58.5</div>
                            <div className="text-xs text-muted-foreground">Excellent</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}