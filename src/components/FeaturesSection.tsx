import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Users, 
  MapPin, 
  Video, 
  Award,
  Zap,
  Lock,
  Cloud,
  Activity
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced computer vision analyzes fitness tests in real-time with 99.9% accuracy",
      category: "Technology",
      highlights: ["Pose Estimation", "Movement Tracking", "Performance Metrics"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Blockchain Security",
      description: "Immutable records ensure complete data integrity and prevent tampering",
      category: "Security",
      highlights: ["Tamper-Proof", "Digital Signatures", "Audit Trail"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Works seamlessly on low-cost smartphones with offline capabilities",
      category: "Accessibility",
      highlights: ["Offline Mode", "Low Data Usage", "Cross-Platform"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with performance insights and talent identification",
      category: "Analytics",
      highlights: ["Live Dashboards", "Trend Analysis", "Predictive Insights"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Assessment",
      description: "Standardized fitness tests captured via guided video recording",
      category: "Assessment",
      highlights: ["Guided Recording", "Auto-Calibration", "Quality Control"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-User Platform",
      description: "Separate interfaces for athletes, coaches, and SAI officials",
      category: "Platform",
      highlights: ["Role-Based Access", "Collaboration Tools", "User Management"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-sai-saffron border-sai-saffron">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Revolutionary Technology for 
            <span className="text-sai-saffron"> Talent Discovery</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our cutting-edge platform combines AI, blockchain, and mobile technology to democratize sports talent identification across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card bg-card"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-sai-saffron transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-sai-saffron rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Powered by Advanced Technology</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-sai-saffron" />
              <span className="text-sm font-medium">TensorFlow Lite</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-sai-green" />
              <span className="text-sm font-medium">Hyperledger Fabric</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="h-5 w-5 text-sai-gold" />
              <span className="text-sm font-medium">AWS Cloud</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-sai-navy" />
              <span className="text-sm font-medium">PoseNet AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}