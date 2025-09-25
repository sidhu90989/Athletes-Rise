import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Activity, Heart, Syringe, Pill, TrendingUp, Phone, Video, Calendar as CalendarIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const statsData = [
  { title: "Patients", value: "1863", change: "16%", trend: "up", icon: Users, color: "text-blue-600" },
  { title: "Reports", value: "863", change: "16%", trend: "up", icon: Activity, color: "text-green-600" },
  { title: "Injections", value: "363", change: "16%", trend: "down", icon: Syringe, color: "text-purple-600" },
  { title: "Surgery", value: "163", change: "16%", trend: "up", icon: Heart, color: "text-red-600" }
];

const departmentData = [
  { name: "Cardiology", percentage: 40, color: "bg-blue-500" },
  { name: "Neurology", percentage: 20, color: "bg-green-500" },
  { name: "Dermatology", percentage: 30, color: "bg-purple-500" },
  { name: "Others", percentage: 10, color: "bg-orange-500" }
];

const appointmentHistory = [
  { type: "Medical Checkup", time: "March 01 30 am", icon: Heart, color: "text-blue-600" },
  { type: "Screening", time: "April 10 9:30 am", icon: Activity, color: "text-green-600" },
  { type: "Chat Consultation", time: "Jun 21 1:39 am", icon: Video, color: "text-purple-600" },
  { type: "Video call Consultation", time: "Jun 14 10:36 am", icon: Video, color: "text-red-600" }
];

const patientList = [
  { name: "Ben Stokes", gender: "Male", age: 32, avatar: "BS" },
  { name: "Hilda Hunter", gender: "Female", age: 28, avatar: "HH" },
  { name: "Ellen Barton", gender: "Female", age: 35, avatar: "EB" },
  { name: "Thad Emnings", gender: "Female", age: 24, avatar: "TE" },
  { name: "Michel Bomb", gender: "Male", age: 45, avatar: "MB" },
  { name: "Ellen Barton", gender: "Female", age: 35, avatar: "EB" },
  { name: "Thad Emnings", gender: "Female", age: 24, avatar: "TE" },
  { name: "Michel Bomb", gender: "Male", age: 45, avatar: "MB" }
];

const medicineData = [
  { name: "Aspirin", dosage: "100mg", frequency: "Daily", status: "active" },
  { name: "Metformin", dosage: "500mg", frequency: "Twice daily", status: "active" },
  { name: "Lisinopril", dosage: "10mg", frequency: "Daily", status: "paused" },
  { name: "Vitamin D", dosage: "1000IU", frequency: "Daily", status: "active" }
];

export function PhysiciansData() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Healthcare</span>
          </div>
          
          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: Activity, active: true },
              { name: "Appointments", icon: CalendarIcon },
              { name: "Doctors", icon: Users },
              { name: "Departments", icon: Activity },
              { name: "Patients", icon: Users },
              { name: "Payments", icon: Activity },
              { name: "Settings", icon: Activity }
            ].map((item, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-accent'
              }`}>
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </nav>
          
          <div className="mt-auto pt-8">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <span>LOGOUT</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search anything you want..."
                className="w-80 px-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">S</span>
                </div>
                <span className="font-medium">Smith</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="text-xs">
                      {stat.change} {stat.trend === "up" ? "↑" : "↓"}
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">last 7 days</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {/* Top Row - Calendar and Charts */}
            <div className="grid grid-cols-4 gap-6">
              {/* Calendar */}
              <Card className="h-fit">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>March-2022</span>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">‹</Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">›</Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="p-1 font-medium text-muted-foreground">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {Array.from({ length: 35 }, (_, i) => {
                      const isActiveWeek = i >= 7 && i <= 13;
                      return (
                        <div key={i} className={`p-1 hover:bg-accent rounded cursor-pointer ${
                          isActiveWeek ? 'bg-blue-100 text-blue-700' : ''
                        } ${i === 10 ? 'bg-blue-500 text-white' : ''}`}>
                          {i < 3 ? i + 28 : i > 30 ? i - 30 : i - 2}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Department Chart */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Patient Visit by Department</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Weekly</span>
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
                    <div className="absolute inset-2 bg-background rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    {departmentData.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${dept.color}`}></div>
                          <span>{dept.name}</span>
                        </div>
                        <span className="font-medium">{dept.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Appointment History */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Appointment History</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {appointmentHistory.map((appointment, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 hover:bg-accent/50 rounded-lg cursor-pointer">
                        <div className={`p-2 rounded-lg ${appointment.color} bg-blue-50`}>
                          <appointment.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{appointment.type}</p>
                          <p className="text-xs text-muted-foreground">{appointment.time}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">›</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Share Photos */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Share Photos</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Pill className="h-6 w-6 text-blue-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row - Patient Visit by Gender Charts */}
            <div className="grid grid-cols-2 gap-6">
              {/* Male Chart */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Patient Visit by Gender</CardTitle>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Male</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      <span>Female</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span>Monthly</span>
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
                    <div className="relative">
                      <svg className="w-full h-16" viewBox="0 0 100 40">
                        <path
                          d="M 0,35 Q 20,20 40,25 T 80,15 L 100,20"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M 0,30 Q 25,15 50,20 T 100,10"
                          stroke="#fb923c"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-sm">
                    <div>
                      <span className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Total Male</span>
                      </span>
                      <p className="font-bold">60.02%</p>
                    </div>
                    <div>
                      <span className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        <span>Total Female</span>
                      </span>
                      <p className="font-bold">39.08%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Patient List */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>Patient List</span>
                    <Button variant="ghost" size="sm" className="text-xs">View All</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {patientList.map((patient, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 hover:bg-accent/50 rounded-lg cursor-pointer">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-medium text-xs text-white">
                          {patient.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{patient.name}</p>
                          <p className="text-xs text-muted-foreground">{patient.gender}, {patient.age}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          ⋯
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}