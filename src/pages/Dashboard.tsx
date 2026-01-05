import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  FileText, 
  Pill, 
  Video, 
  Calendar, 
  Bell, 
  Settings, 
  MapPin,
  Upload,
  Clock,
  ChevronRight,
  Activity,
  Heart,
  Thermometer,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOSButton } from "@/components/SOSButton";
import { Header } from "@/components/Header";

const quickActions = [
  { icon: Video, label: "Video Consult", description: "Talk to a doctor", color: "primary" },
  { icon: Upload, label: "Upload Prescription", description: "Get medicines", color: "accent" },
  { icon: Calendar, label: "Book Appointment", description: "Schedule visit", color: "success" },
  { icon: FileText, label: "Medical Records", description: "View history", color: "warning" },
];

const recentActivities = [
  { type: "consultation", title: "Video consultation with Dr. Smith", time: "2 hours ago", status: "completed" },
  { type: "medicine", title: "Medicine order delivered", time: "Yesterday", status: "delivered" },
  { type: "appointment", title: "Upcoming: Cardiology checkup", time: "Tomorrow, 10:00 AM", status: "scheduled" },
];

const healthMetrics = [
  { icon: Heart, label: "Heart Rate", value: "72", unit: "bpm", status: "normal" },
  { icon: Activity, label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal" },
  { icon: Thermometer, label: "Temperature", value: "98.6", unit: "°F", status: "normal" },
];

export default function Dashboard() {
  const [location] = useState("New York, NY");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Welcome back, John
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
              <Badge variant="outline" className="ml-2">
                <div className="h-2 w-2 rounded-full bg-success mr-1" />
                Active
              </Badge>
            </div>
          </div>
          <SOSButton size="large" />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-xl bg-${action.color}/10 mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className={`h-6 w-6 text-${action.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{action.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Health Overview</CardTitle>
                <CardDescription>Your latest health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-muted/50 text-center"
                    >
                      <metric.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.unit}</div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {metric.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest healthcare activities</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        {activity.type === "consultation" && <Video className="h-4 w-4 text-primary" />}
                        {activity.type === "medicine" && <Pill className="h-4 w-4 text-accent" />}
                        {activity.type === "appointment" && <Calendar className="h-4 w-4 text-success" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{activity.title}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </div>
                      </div>
                      <Badge 
                        variant={activity.status === "scheduled" ? "default" : "secondary"}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="cursor-pointer hover:shadow-lg transition-all group">
              <Link to="/profile">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <User className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                    <p className="text-xs text-primary mt-2">Tap to view profile →</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                        <Settings className="h-4 w-4 mr-1" />
                        Settings
                      </Button>
                      <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                        <Bell className="h-4 w-4 mr-1" />
                        Alerts
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-emergency/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emergency">
                  <AlertCircle className="h-5 w-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-emergency/5">
                  <div>
                    <div className="font-medium text-foreground">Jane Doe</div>
                    <div className="text-xs text-muted-foreground">Spouse</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-emergency">
                    Call
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-emergency/5">
                  <div>
                    <div className="font-medium text-foreground">Dr. Smith</div>
                    <div className="text-xs text-muted-foreground">Primary Doctor</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-emergency">
                    Call
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Manage Contacts
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="font-medium text-foreground">Cardiology Checkup</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Tomorrow, 10:00 AM
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Dr. Sarah Johnson
                  </div>
                  <Button variant="default" size="sm" className="w-full mt-3">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating SOS */}
      <SOSButton size="floating" />
    </div>
  );
}
