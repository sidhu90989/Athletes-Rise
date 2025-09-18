import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroButton } from "@/components/ui/hero-button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Trophy, 
  MapPin, 
  Calendar,
  Eye,
  ArrowRight,
  Target,
  Activity,
  Award,
  BarChart3
} from "lucide-react";

export function DashboardPreview() {
  const recentAssessments = [
    { 
      name: "Priya Sharma", 
      location: "Rajasthan", 
      score: 92, 
      sport: "Athletics",
      status: "verified"
    },
    { 
      name: "Raj Patel", 
      location: "Gujarat", 
      score: 88, 
      sport: "Football",
      status: "pending"
    },
    { 
      name: "Meera Singh", 
      location: "Punjab", 
      score: 95, 
      sport: "Boxing",
      status: "verified"
    }
  ];

  const stats = [
    { 
      title: "Total Athletes", 
      value: "52,847", 
      change: "+12%", 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      title: "Districts Covered", 
      value: "547", 
      change: "+8%", 
      icon: <MapPin className="h-5 w-5" /> 
    },
    { 
      title: "Verified Talents", 
      value: "2,341", 
      change: "+24%", 
      icon: <Trophy className="h-5 w-5" /> 
    },
    { 
      title: "Success Rate", 
      value: "98.7%", 
      change: "+2%", 
      icon: <Target className="h-5 w-5" /> 
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-sai-green border-sai-green">
            Official Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Analytics &
            <span className="text-sai-green"> Talent Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real-time monitoring and analysis tools for SAI officials to identify, track, and nurture sporting talent across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gradient-success rounded-lg text-white">
                    {stat.icon}
                  </div>
                  <Badge variant="secondary" className="text-sai-green">
                    {stat.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Assessments */}
          <Card className="lg:col-span-2 bg-card border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-foreground">Recent Assessments</CardTitle>
                <HeroButton variant="ghost" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View All
                </HeroButton>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssessments.map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {assessment.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{assessment.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{assessment.location}</span>
                          <span>•</span>
                          <span>{assessment.sport}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{assessment.score}%</div>
                        <Badge 
                          variant={assessment.status === 'verified' ? 'default' : 'secondary'}
                          className={assessment.status === 'verified' ? 'bg-sai-green' : ''}
                        >
                          {assessment.status}
                        </Badge>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card className="bg-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Activity className="mr-2 h-5 w-5 text-sai-saffron" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Athletics</span>
                  <span className="font-medium text-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Football</span>
                  <span className="font-medium text-foreground">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Boxing</span>
                  <span className="font-medium text-foreground">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Wrestling</span>
                  <span className="font-medium text-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Progress</span>
                  <Award className="h-4 w-4 text-sai-gold" />
                </div>
                <div className="text-2xl font-bold text-sai-green">82.5%</div>
                <p className="text-xs text-muted-foreground">Above national average</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <HeroButton variant="success" size="xl">
            <BarChart3 className="mr-2 h-5 w-5" />
            Access Full Dashboard
          </HeroButton>
        </div>
      </div>
    </section>
  );
}