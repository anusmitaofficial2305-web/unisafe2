import { UserPlus, AlertCircle, Ambulance, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Profile",
    description: "Sign up and add your medical history, allergies, emergency contacts, and saved addresses.",
  },
  {
    icon: AlertCircle,
    step: "02",
    title: "Trigger SOS or Request",
    description: "Use the SOS button for emergencies or request normal consultations and medicine delivery.",
  },
  {
    icon: Ambulance,
    step: "03",
    title: "Instant Response",
    description: "Nearest hospitals, paramedics, and pharmacies are alerted instantly with your location.",
  },
  {
    icon: HeartPulse,
    step: "04",
    title: "Get Care",
    description: "Track responders in real-time. Receive treatment, prescriptions, or medicine delivery.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How <span className="text-gradient-hero">MediRescue</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, fast, and life-saving. Get emergency help in just 4 steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="relative z-10 p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-hero text-primary-foreground text-sm font-bold">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20 w-8 h-8 rounded-full bg-accent flex items-center justify-center transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
