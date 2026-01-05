import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  Ambulance,
  CheckCircle,
  XCircle,
  Navigation,
  Activity,
  Users,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  MoreVertical,
  ArrowLeft,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const emergencyAlerts = [
  {
    id: 1,
    patient: "John Doe",
    age: 45,
    condition: "Cardiac Emergency",
    location: "123 Main St, New York",
    distance: "2.3 km",
    time: "2 min ago",
    status: "pending",
    priority: "critical",
  },
  {
    id: 2,
    patient: "Sarah Johnson",
    age: 32,
    condition: "Accident Trauma",
    location: "456 Oak Ave, Brooklyn",
    distance: "4.1 km",
    time: "5 min ago",
    status: "dispatched",
    priority: "high",
  },
  {
    id: 3,
    patient: "Mike Williams",
    age: 67,
    condition: "Breathing Difficulty",
    location: "789 Pine Rd, Queens",
    distance: "3.8 km",
    time: "8 min ago",
    status: "in-progress",
    priority: "medium",
  },
];

const stats = [
  { label: "Active Emergencies", value: "12", change: "+3", icon: AlertTriangle, color: "emergency" },
  { label: "Ambulances Available", value: "8", change: "-2", icon: Ambulance, color: "primary" },
  { label: "Doctors On-Duty", value: "24", change: "+5", icon: Users, color: "success" },
  { label: "Avg Response Time", value: "4.2m", change: "-0.5m", icon: Clock, color: "accent" },
];

export default function Hospital() {
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hospital Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="h-10 w-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-foreground">Hospital Command Center</h1>
              <p className="text-xs text-muted-foreground">City General Hospital</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emergency text-[10px] text-emergency-foreground flex items-center justify-center">
                5
              </span>
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className={stat.color === "emergency" ? "border-emergency/30 bg-emergency/5" : ""}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                  <Badge variant={stat.change.startsWith("+") ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Emergency Alerts List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-emergency" />
                      Emergency SOS Alerts
                    </CardTitle>
                    <CardDescription>Real-time emergency requests</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search..." className="pl-9 w-48" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedAlert === alert.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      } ${alert.priority === "critical" ? "border-l-4 border-l-emergency" : ""}`}
                      onClick={() => setSelectedAlert(alert.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            alert.priority === "critical" 
                              ? "bg-emergency/10 sos-pulse" 
                              : "bg-primary/10"
                          }`}>
                            <User className={`h-5 w-5 ${
                              alert.priority === "critical" ? "text-emergency" : "text-primary"
                            }`} />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{alert.patient}</div>
                            <div className="text-sm text-muted-foreground">Age: {alert.age}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={alert.priority === "critical" ? "destructive" : "default"}
                          >
                            {alert.priority}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Activity className="h-4 w-4 text-emergency" />
                          <span className="text-foreground">{alert.condition}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{alert.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="truncate">{alert.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Navigation className="h-4 w-4" />
                          <span>{alert.distance} away</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {alert.status === "pending" ? (
                          <>
                            <Button variant="emergency" size="sm" className="flex-1">
                              <Ambulance className="h-4 w-4 mr-1" />
                              Dispatch Ambulance
                            </Button>
                            <Button variant="outline" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                          </>
                        ) : alert.status === "dispatched" ? (
                          <Badge className="bg-warning text-warning-foreground">
                            <Ambulance className="h-3 w-3 mr-1" />
                            Ambulance Dispatched - ETA 5 min
                          </Badge>
                        ) : (
                          <Badge className="bg-success text-success-foreground">
                            <Activity className="h-3 w-3 mr-1" />
                            Paramedic On-Site
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Live Location Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground text-sm">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p>Interactive Map View</p>
                    <p className="text-xs">Showing patient & ambulance locations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Available Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Ambulance className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Ambulances</span>
                  </div>
                  <Badge variant="secondary">8 / 12</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Paramedics</span>
                  </div>
                  <Badge variant="secondary">15 / 20</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">ICU Beds</span>
                  </div>
                  <Badge variant="secondary">4 / 10</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Staff
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Ambulance className="h-4 w-4 mr-2" />
                  Fleet Status
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
