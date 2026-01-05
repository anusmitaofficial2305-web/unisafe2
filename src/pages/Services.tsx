import { 
  AlertTriangle, 
  Video, 
  Pill, 
  MapPin, 
  Ambulance, 
  Stethoscope,
  Clock,
  Shield,
  ChevronRight,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";

const services = [
  {
    id: "sos",
    icon: AlertTriangle,
    title: "SOS Emergency",
    description: "Instant emergency response at the press of a button. Get connected to nearest hospitals, ambulances, and paramedics within seconds.",
    features: ["One-tap emergency alert", "GPS location sharing", "Real-time ambulance tracking", "Emergency contact notification"],
    color: "emergency",
    cta: "Activate SOS",
    href: "/dashboard",
    priority: true,
  },
  {
    id: "doctor",
    icon: Video,
    title: "Doctor Consultation",
    description: "Connect with qualified doctors instantly through video or chat consultations from the comfort of your home.",
    features: ["24/7 availability", "Video & chat options", "E-prescriptions", "Medical records access"],
    color: "primary",
    cta: "Consult Now",
    href: "/dashboard",
  },
  {
    id: "medicine",
    icon: Pill,
    title: "Medicine Delivery",
    description: "Upload your prescription and get medicines delivered to your doorstep. Fast, reliable, and affordable.",
    features: ["Prescription upload", "Verified pharmacies", "Express delivery", "Order tracking"],
    color: "accent",
    cta: "Order Medicine",
    href: "/dashboard",
  },
  {
    id: "hospital",
    icon: MapPin,
    title: "Hospital Locator",
    description: "Find hospitals, clinics, and diagnostic centers near you. Filter by specialty, ratings, and availability.",
    features: ["GPS-based search", "Specialty filters", "Bed availability", "Appointment booking"],
    color: "success",
    cta: "Find Hospital",
    href: "/dashboard",
  },
  {
    id: "ambulance",
    icon: Ambulance,
    title: "Ambulance Services",
    description: "Request ambulance services for patient transport, inter-hospital transfer, or emergency response.",
    features: ["Multiple ambulance types", "Real-time tracking", "Trained paramedics", "24/7 availability"],
    color: "warning",
    cta: "Book Ambulance",
    href: "/dashboard",
  },
  {
    id: "checkup",
    icon: Stethoscope,
    title: "Health Checkups",
    description: "Comprehensive health checkup packages. Book home sample collection or visit nearby diagnostic centers.",
    features: ["Full body checkups", "Home collection", "Digital reports", "Expert analysis"],
    color: "primary",
    cta: "Book Checkup",
    href: "/dashboard",
  },
];

export default function Services() {
  return (
    <Layout showFloatingSOS={true}>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Shield className="h-3 w-3 mr-1" />
              Trusted Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Complete Healthcare at Your{" "}
              <span className="text-primary">Fingertips</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From emergency response to routine checkups, we've got all your healthcare needs covered. 
              Available 24/7, just a tap away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" variant="emergency" className="gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  SOS Emergency
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="gap-2">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  service.priority ? "border-emergency/30 bg-emergency/5 md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-${service.color}/10 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-6 w-6 text-${service.color}`} />
                    </div>
                    {service.priority && (
                      <Badge variant="destructive" className="animate-pulse">
                        <Clock className="h-3 w-3 mr-1" />
                        Instant
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`h-1.5 w-1.5 rounded-full bg-${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.href}>
                    <Button 
                      variant={service.priority ? "emergency" : "default"} 
                      className="w-full gap-2"
                    >
                      {service.cta}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Card className="bg-gradient-hero text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-4">
                    Need Immediate Assistance?
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Our emergency helpline is available 24/7. Call now or use the SOS feature 
                    in our app for instant emergency response.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" size="lg" className="gap-2">
                      <Phone className="h-5 w-5" />
                      1-800-UNI-SAFE
                    </Button>
                    <Link to="/dashboard">
                      <Button variant="outline" size="lg" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                        <AlertTriangle className="h-5 w-5" />
                        Go to Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-3xl" />
                    <Ambulance className="h-32 w-32 text-primary-foreground relative" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
