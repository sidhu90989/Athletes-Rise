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
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Healthcare Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive patient and medical data management</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency Call</span>
            </Button>
            <Button variant="default" className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>Video Consultation</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="text-xs">
                        {stat.change} {stat.trend === "up" ? "↑" : "↓"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">last 7 days</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-background ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar and Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>March 2022</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">‹</Button>
                      <Button variant="ghost" size="sm">›</Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="p-2 font-medium text-muted-foreground">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div key={i} className={`p-2 hover:bg-accent rounded cursor-pointer ${i === 6 ? 'bg-primary text-primary-foreground' : ''}`}>
                        {i < 3 ? i + 28 : i > 30 ? i - 30 : i - 2}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Department Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Patient Visit by Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>
                    <div className="absolute inset-2 bg-background rounded-full"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {departmentData.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                          <span>{dept.name}</span>
                        </div>
                        <span className="font-medium">{dept.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Medicine & Health Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Medications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="h-5 w-5" />
                    <span>Current Medications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {medicineData.map((med, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div>
                        <p className="font-medium">{med.name}</p>
                        <p className="text-sm text-muted-foreground">{med.dosage} - {med.frequency}</p>
                      </div>
                      <Badge variant={med.status === "active" ? "default" : "secondary"}>
                        {med.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Health Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Health Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Heart Rate</span>
                      <span className="font-medium">72 BPM</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Blood Pressure</span>
                      <span className="font-medium">120/80</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Oxygen Level</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">All vitals normal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointment History */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointmentHistory.map((appointment, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 hover:bg-accent/50 rounded-lg cursor-pointer">
                      <div className={`p-2 rounded-full bg-background ${appointment.color}`}>
                        <appointment.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{appointment.type}</p>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Patient List */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Patient List</span>
                  <Button variant="ghost" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {patientList.map((patient, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-accent/50 rounded-lg cursor-pointer">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-medium text-sm">
                        {patient.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{patient.name}</p>
                        <p className="text-xs text-muted-foreground">{patient.gender}, {patient.age}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Phone className="h-3 w-3" />
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
  );
}