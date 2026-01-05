import { 
  Stethoscope, 
  Pill, 
  Ambulance, 
  Video, 
  FileText, 
  Bell,
  MapPin,
  History,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description: "Connect with verified doctors via chat or video call. Get prescriptions and medical advice instantly.",
    color: "primary",
  },
  {
    icon: Pill,
    title: "Medicine Delivery",
    description: "Upload prescriptions and get medicines delivered from the nearest pharmacy within hours.",
    color: "accent",
  },
  {
    icon: Ambulance,
    title: "Ambulance Dispatch",
    description: "Immediate ambulance dispatch with real-time tracking and ETA updates.",
    color: "emergency",
  },
  {
    icon: Video,
    title: "Video Consultations",
    description: "Face-to-face consultations with specialists from the comfort of your home.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Secure digital prescriptions stored in your profile, accessible anytime.",
    color: "accent",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time updates via SMS, email, and push notifications for all activities.",
    color: "warning",
  },
  {
    icon: MapPin,
    title: "Location Services",
    description: "Automatic GPS location sharing during emergencies for faster response.",
    color: "emergency",
  },
  {
    icon: History,
    title: "Medical History",
    description: "Complete medical history, allergies, and emergency contacts in one place.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security protecting your sensitive health information.",
    color: "success",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  emergency: "bg-emergency/10 text-emergency",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-gradient-hero">Healthcare Emergencies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine consultations to life-saving emergencies, our platform 
            connects you with the right care at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
