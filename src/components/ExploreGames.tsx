import { useState } from "react";
import { X, Gamepad2, Users, Trophy, Target, Zap, Heart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  avatar?: string;
  stats: {
    stamina: number;
    strength: number;
    health: number;
    fitness: number;
    speed: number;
    agility: number;
  };
  achievements: string[];
}

interface Game {
  id: string;
  name: string;
  icon: any;
  category: string;
  players: Player[];
}

const gamesData: Game[] = [
  {
    id: "cricket",
    name: "Cricket",
    icon: Target,
    category: "Team Sports",
    players: [
      {
        id: "1",
        name: "Virat Kohli",
        age: 35,
        position: "Batsman",
        stats: { stamina: 92, strength: 88, health: 95, fitness: 94, speed: 85, agility: 87 },
        achievements: ["Captain", "Top Scorer", "Player of Match"]
      },
      {
        id: "2",
        name: "Rohit Sharma",
        age: 37,
        position: "Captain/Opener",
        stats: { stamina: 90, strength: 85, health: 92, fitness: 91, speed: 82, agility: 84 },
        achievements: ["Captain", "Century Maker", "World Cup Winner"]
      }
    ]
  },
  {
    id: "football",
    name: "Football",
    icon: Trophy,
    category: "Team Sports",
    players: [
      {
        id: "3",
        name: "Sunil Chhetri",
        age: 39,
        position: "Forward",
        stats: { stamina: 89, strength: 86, health: 91, fitness: 93, speed: 88, agility: 90 },
        achievements: ["Captain", "Top Goal Scorer", "AIFF Player"]
      },
      {
        id: "4",
        name: "Gurpreet Sandhu",
        age: 32,
        position: "Goalkeeper",
        stats: { stamina: 85, strength: 92, health: 94, fitness: 90, speed: 78, agility: 85 },
        achievements: ["Best Goalkeeper", "Clean Sheets", "National Team"]
      }
    ]
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: Zap,
    category: "Individual Sports",
    players: [
      {
        id: "5",
        name: "P.V. Sindhu",
        age: 29,
        position: "Singles",
        stats: { stamina: 94, strength: 83, health: 96, fitness: 97, speed: 92, agility: 95 },
        achievements: ["Olympic Medalist", "World Champion", "BWF Rankings"]
      }
    ]
  }
];

export function ExploreGames() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const StatBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: any }) => (
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4 text-sai-saffron" />
      <span className="text-sm font-medium min-w-[60px]">{label}</span>
      <Progress value={value} className="flex-1 h-2" />
      <span className="text-sm font-bold text-sai-navy">{value}%</span>
    </div>
  );

  return (
    <>
      {/* Floating Circular Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-hero rounded-full shadow-elegant hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Explore Games"
        >
          <Gamepad2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-sai-navy text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Explore Games
          </span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Games Panel */}
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-96 bg-background border-l shadow-2xl z-50 overflow-y-auto animate-slide-in-right">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-sai-navy flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-sai-saffron" />
                Explore Games
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-sai-saffron/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!selectedGame ? (
              <div className="space-y-4">
                {gamesData.map((game) => {
                  const Icon = game.icon;
                  return (
                    <Card
                      key={game.id}
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-sai-saffron/20 hover:border-sai-saffron"
                      onClick={() => setSelectedGame(game)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sai-navy">{game.name}</h3>
                            <p className="text-sm text-muted-foreground">{game.category}</p>
                            <Badge variant="secondary" className="mt-1">
                              {game.players.length} Players
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedGame(null)}
                  className="flex items-center gap-2 text-sai-saffron hover:text-sai-navy transition-colors mb-4"
                >
                  ← Back to Games
                </button>

                <h3 className="text-xl font-bold text-sai-navy mb-4">{selectedGame.name} Players</h3>

                {selectedGame.players.map((player) => (
                  <Card key={player.id} className="border-sai-saffron/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback className="bg-gradient-hero text-white">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg text-sai-navy">{player.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {player.position} • Age {player.age}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sai-navy mb-2">Performance Stats</h4>
                          <StatBar label="Stamina" value={player.stats.stamina} icon={Activity} />
                          <StatBar label="Strength" value={player.stats.strength} icon={Zap} />
                          <StatBar label="Health" value={player.stats.health} icon={Heart} />
                          <StatBar label="Fitness" value={player.stats.fitness} icon={Target} />
                          <StatBar label="Speed" value={player.stats.speed} icon={Zap} />
                          <StatBar label="Agility" value={player.stats.agility} icon={Activity} />
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sai-navy mb-2">Achievements</h4>
                          <div className="flex flex-wrap gap-1">
                            {player.achievements.map((achievement, index) => (
                              <Badge key={index} variant="outline" className="border-sai-saffron text-sai-navy">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}