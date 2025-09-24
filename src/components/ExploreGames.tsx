import { useState } from "react";
import { X, Gamepad2, Users, Trophy, Target, Zap, Heart, Activity, Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

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

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  sport: string;
  players: string[];
  status: "upcoming" | "live" | "completed";
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
      },
      {
        id: "6",
        name: "MS Dhoni",
        age: 42,
        position: "Wicket Keeper",
        stats: { stamina: 88, strength: 90, health: 93, fitness: 89, speed: 80, agility: 85 },
        achievements: ["Former Captain", "World Cup Winner", "Finisher"]
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
      },
      {
        id: "7",
        name: "Sandesh Jhingan",
        age: 30,
        position: "Defender",
        stats: { stamina: 87, strength: 89, health: 92, fitness: 88, speed: 75, agility: 80 },
        achievements: ["Defender of Year", "National Team", "ISL Winner"]
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
      },
      {
        id: "8",
        name: "Saina Nehwal",
        age: 34,
        position: "Singles",
        stats: { stamina: 91, strength: 80, health: 94, fitness: 93, speed: 89, agility: 92 },
        achievements: ["Olympic Medalist", "World No. 1", "Commonwealth Gold"]
      }
    ]
  }
];

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "IPL Finals 2024",
    date: "2024-05-26",
    time: "7:30 PM",
    venue: "Wankhede Stadium, Mumbai",
    sport: "Cricket",
    players: ["Virat Kohli", "Rohit Sharma", "MS Dhoni"],
    status: "upcoming"
  },
  {
    id: "2",
    title: "ISL Championship",
    date: "2024-03-16",
    time: "8:00 PM",
    venue: "Salt Lake Stadium, Kolkata",
    sport: "Football",
    players: ["Sunil Chhetri", "Gurpreet Sandhu"],
    status: "upcoming"
  },
  {
    id: "3",
    title: "BWF World Championship",
    date: "2024-08-19",
    time: "2:00 PM",
    venue: "Gachibowli Stadium, Hyderabad",
    sport: "Badminton",
    players: ["P.V. Sindhu", "Saina Nehwal"],
    status: "upcoming"
  },
  {
    id: "4",
    title: "India vs Australia ODI",
    date: "2024-04-10",
    time: "1:30 PM",
    venue: "M. Chinnaswamy Stadium, Bangalore",
    sport: "Cricket",
    players: ["Virat Kohli", "Rohit Sharma"],
    status: "live"
  }
];

export function ExploreGames() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [currentView, setCurrentView] = useState<"games" | "players" | "officials">("games");

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
                {currentView === "games" ? "Explore Games" : 
                 currentView === "players" ? `${selectedGame?.name} Players` :
                 "Officials & Events"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-sai-saffron/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={currentView === "games" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCurrentView("games");
                  setSelectedGame(null);
                  setSelectedPlayer(null);
                }}
                className="flex-1"
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                Games
              </Button>
              <Button
                variant={currentView === "officials" ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentView("officials")}
                className="flex-1"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Officials
              </Button>
            </div>

            {/* Games View */}
            {currentView === "games" && !selectedGame && (
              <div className="space-y-4">
                {gamesData.map((game) => {
                  const Icon = game.icon;
                  return (
                    <Card
                      key={game.id}
                      className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-sai-saffron/20 hover:border-sai-saffron relative overflow-hidden"
                      onClick={() => {
                        setSelectedGame(game);
                        setCurrentView("players");
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sai-navy group-hover:text-sai-saffron transition-colors">
                              {game.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{game.category}</p>
                            <Badge variant="secondary" className="mt-1">
                              {game.players.length} Players
                            </Badge>
                          </div>
                          <Target className="w-5 h-5 text-sai-saffron opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Players View */}
            {currentView === "players" && selectedGame && !selectedPlayer && (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setCurrentView("games");
                    setSelectedGame(null);
                  }}
                  className="flex items-center gap-2 text-sai-saffron hover:text-sai-navy transition-colors mb-4"
                >
                  ← Back to Games
                </button>

                <div className="grid gap-3">
                  {selectedGame.players.map((player) => (
                    <Card 
                      key={player.id} 
                      className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-sai-saffron/20 hover:border-sai-saffron"
                      onClick={() => setSelectedPlayer(player)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                            <AvatarImage src={player.avatar} />
                            <AvatarFallback className="bg-gradient-hero text-white">
                              {player.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sai-navy group-hover:text-sai-saffron transition-colors">
                              {player.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {player.position} • Age {player.age}
                            </p>
                            <div className="flex gap-1 mt-1">
                              {player.achievements.slice(0, 2).map((achievement, index) => (
                                <Badge key={index} variant="outline" className="text-xs border-sai-saffron/50">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Target className="w-5 h-5 text-sai-saffron opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Player Details View */}
            {selectedPlayer && (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedPlayer(null)}
                  className="flex items-center gap-2 text-sai-saffron hover:text-sai-navy transition-colors mb-4"
                >
                  ← Back to Players
                </button>

                <Card className="border-sai-saffron/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={selectedPlayer.avatar} />
                        <AvatarFallback className="bg-gradient-hero text-white text-lg">
                          {selectedPlayer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-sai-navy">{selectedPlayer.name}</CardTitle>
                        <p className="text-muted-foreground">
                          {selectedPlayer.position} • Age {selectedPlayer.age}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sai-navy mb-3">Performance Stats</h4>
                        <StatBar label="Stamina" value={selectedPlayer.stats.stamina} icon={Activity} />
                        <StatBar label="Strength" value={selectedPlayer.stats.strength} icon={Zap} />
                        <StatBar label="Health" value={selectedPlayer.stats.health} icon={Heart} />
                        <StatBar label="Fitness" value={selectedPlayer.stats.fitness} icon={Target} />
                        <StatBar label="Speed" value={selectedPlayer.stats.speed} icon={Zap} />
                        <StatBar label="Agility" value={selectedPlayer.stats.agility} icon={Activity} />
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sai-navy mb-3">Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPlayer.achievements.map((achievement, index) => (
                            <Badge key={index} variant="outline" className="border-sai-saffron text-sai-navy">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Officials & Events View */}
            {currentView === "officials" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-sai-saffron" />
                  <h3 className="text-lg font-semibold text-sai-navy">Upcoming Events</h3>
                </div>

                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="border-sai-saffron/20 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-sai-navy">{event.title}</h4>
                              <Badge 
                                variant={event.status === "live" ? "destructive" : "secondary"}
                                className="mt-1"
                              >
                                {event.status === "live" ? "LIVE" : event.status.toUpperCase()}
                              </Badge>
                            </div>
                            <Badge variant="outline" className="border-sai-saffron text-sai-navy">
                              {event.sport}
                            </Badge>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {new Date(event.date).toLocaleDateString('en-IN', { 
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {event.venue}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium text-sai-navy mb-2">Featured Players:</p>
                            <div className="flex flex-wrap gap-1">
                              {event.players.map((playerName, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {playerName}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}