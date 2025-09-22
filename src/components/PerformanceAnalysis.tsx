import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";
import { Activity, Clock, Flame, MapPin, Lock } from "lucide-react";

const weeklyData = [
  { day: "Tue", performance: 40, calories: 25 },
  { day: "Wed", performance: 35, calories: 30 },
  { day: "Thu", performance: 105, calories: 45 },
  { day: "Fri", performance: 185, calories: 35 },
  { day: "Sat", performance: 35, calories: 25 },
  { day: "Sun", performance: 15, calories: 40 },
  { day: "Mon", performance: 165, calories: 240 },
];

const heartRateData = [
  { time: 20, peak: 15, cardio: 30, fatBurn: 30 },
  { time: 40, peak: 20, cardio: 35, fatBurn: 35 },
  { time: 80, peak: 35, cardio: 45, fatBurn: 50 },
  { time: 160, peak: 65, cardio: 75, fatBurn: 85 },
  { time: 200, peak: 85, cardio: 95, fatBurn: 100 },
  { time: 280, peak: 95, cardio: 100, fatBurn: 105 },
];

export const PerformanceAnalysis = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Performance Analysis</h2>
              </div>
              <Lock className="w-5 h-5 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md">
                  <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
                  <TabsTrigger value="running" className="text-sm">Running</TabsTrigger>
                  <TabsTrigger value="cycling" className="text-sm">Cycling</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8 space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Weekly Performance Chart */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Weekly Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis 
                              dataKey="day" 
                              stroke="hsl(var(--muted-foreground))"
                              fontSize={12}
                            />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <Tooltip 
                              contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                            />
                            <Bar dataKey="performance" fill="hsl(var(--primary))" radius={4} />
                            <Bar dataKey="calories" fill="hsl(var(--secondary))" radius={4} />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    {/* Heart Rate Zones Chart */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Heart Rate Zones during Activity</CardTitle>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-0.5 bg-primary"></div>
                            <span className="text-muted-foreground">Peak</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-0.5 bg-blue-500"></div>
                            <span className="text-muted-foreground">Cardio</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-0.5 bg-secondary"></div>
                            <span className="text-muted-foreground">Fat Burn</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={heartRateData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis 
                              dataKey="time" 
                              stroke="hsl(var(--muted-foreground))"
                              fontSize={12}
                            />
                            <YAxis 
                              stroke="hsl(var(--muted-foreground))" 
                              fontSize={12}
                              label={{ value: 'Training Intensity', angle: -90, position: 'insideLeft' }}
                            />
                            <Tooltip 
                              contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="peak" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={3}
                              dot={false}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="cardio" 
                              stroke="#3B82F6" 
                              strokeWidth={3}
                              dot={false}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="fatBurn" 
                              stroke="hsl(var(--secondary))" 
                              strokeWidth={3}
                              dot={false}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-12 bg-blue-500 rounded-full"></div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Avg. Pace</p>
                            <p className="text-3xl font-bold text-foreground">5:30</p>
                            <p className="text-sm text-muted-foreground">min.km</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-8 h-8 text-green-600" />
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Total Distance</p>
                            <p className="text-3xl font-bold text-foreground">45.2</p>
                            <p className="text-sm text-muted-foreground">km</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <Flame className="w-8 h-8 text-orange-600" />
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Calories Burned</p>
                            <p className="text-3xl font-bold text-foreground">2,800</p>
                            <p className="text-sm text-muted-foreground">kcal</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Footer */}
                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Powered by <span className="font-semibold text-primary">Athlete Rise AI</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Data secured & <span className="inline-flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        encrypted
                      </span>
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="running" className="mt-8">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Running Analytics</h3>
                      <p className="text-muted-foreground">
                        Detailed running performance metrics will be displayed here once you complete your running assessments.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cycling" className="mt-8">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Cycling Analytics</h3>
                      <p className="text-muted-foreground">
                        Comprehensive cycling performance data will be shown here after your cycling assessments.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};