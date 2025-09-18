import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroButton } from "@/components/ui/hero-button";
import { 
  Play,
  Camera, 
  Timer, 
  Activity, 
  Target,
  CheckCircle,
  Clock,
  Smartphone,
  Brain
} from "lucide-react";

export function AssessmentSection() {
  const tests = [
    {
      id: 1,
      name: "Vertical Jump Test",
      description: "Measures explosive power and leg strength",
      duration: "2 mins",
      difficulty: "Beginner",
      icon: <Target className="h-6 w-6" />,
      status: "available"
    },
    {
      id: 2,
      name: "20m Shuttle Run",
      description: "Evaluates speed, agility, and cardiovascular endurance",
      duration: "5 mins",
      difficulty: "Intermediate",
      icon: <Activity className="h-6 w-6" />,
      status: "available"
    },
    {
      id: 3,
      name: "Push-up Endurance",
      description: "Tests upper body strength and muscular endurance",
      duration: "3 mins",
      difficulty: "Beginner",
      icon: <Timer className="h-6 w-6" />,
      status: "available"
    },
    {
      id: 4,
      name: "Balance & Coordination",
      description: "Assesses stability and motor control skills",
      duration: "4 mins",
      difficulty: "Advanced",
      icon: <CheckCircle className="h-6 w-6" />,
      status: "coming-soon"
    }
  ];

  const assessmentSteps = [
    {
      step: 1,
      title: "Record Your Test",
      description: "Follow guided instructions to record your fitness test",
      icon: <Camera className="h-8 w-8" />
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI analyzes your movement and calculates performance metrics",
      icon: <Brain className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Instant Results",
      description: "Get immediate feedback with detailed performance breakdown",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-sai-green';
      case 'Intermediate': return 'bg-sai-gold';
      case 'Advanced': return 'bg-sai-saffron';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="tests" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-sai-saffron border-sai-saffron">
            Fitness Assessments
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Standardized Tests for
            <span className="text-sai-saffron"> Every Athlete</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete scientifically designed fitness assessments using just your smartphone. Each test is analyzed by AI for accurate, unbiased results.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white mb-4">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-sai-gold rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Test Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tests.map((test) => (
            <Card 
              key={test.id}
              className={`group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-card ${
                test.status === 'coming-soon' ? 'opacity-75' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {test.icon}
                  </div>
                  <Badge 
                    className={`text-white ${getDifficultyColor(test.difficulty)}`}
                  >
                    {test.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-sai-saffron transition-colors">
                  {test.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {test.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    {test.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Smartphone className="mr-1 h-4 w-4" />
                    Mobile Ready
                  </div>
                </div>
                <HeroButton 
                  variant={test.status === 'available' ? 'hero' : 'ghost'} 
                  className="w-full"
                  disabled={test.status === 'coming-soon'}
                >
                  {test.status === 'available' ? (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Start Test
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </HeroButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Assessment CTA */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Showcase Your Talent?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who have already been discovered through our platform. Your journey to sporting excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton variant="outline" size="xl" className="bg-white text-sai-saffron hover:bg-gray-100">
              <Camera className="mr-2 h-5 w-5" />
              Quick Assessment
            </HeroButton>
            <HeroButton variant="ghost" size="xl" className="text-white border-white hover:bg-white/10">
              Learn More
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}