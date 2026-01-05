import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SOSButton } from "@/components/SOSButton";

import heroImage from "@/assets/hero-medical.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-medium text-primary">24/7 Emergency Response Active</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Emergency Healthcare{" "}
              <span className="text-gradient-hero">When Every Second</span>{" "}
              Counts
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Instant connection to hospitals, paramedics, and pharmacies. 
              One tap SOS for emergencies. Real-time tracking and medical history sharing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <SOSButton size="large" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">2min</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="relative lg:pl-8">
            <div className="grid gap-4">
              {/* Main emergency card */}
              <div className="relative p-6 rounded-2xl bg-gradient-card border border-border shadow-xl animate-float">
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-emergency animate-pulse" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emergency/10">
                    <Shield className="h-8 w-8 text-emergency" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">SOS Emergency</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      One-tap emergency alert with auto location sharing
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature cards grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                  <Clock className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-medium text-foreground">Real-time Tracking</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Live ambulance & paramedic ETA
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                  <MapPin className="h-6 w-6 text-accent mb-3" />
                  <h4 className="font-medium text-foreground">GPS Location</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Precise location sharing
                  </p>
                </div>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-hero border-2 border-background"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-medium text-foreground">50,000+ Lives Saved</div>
                  <div className="text-xs text-muted-foreground">Trusted by patients nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
