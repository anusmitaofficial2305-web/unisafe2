import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Experience<br />
            Life-Saving Healthcare?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of users who trust MediRescue for their emergency 
            healthcare needs. Setup takes less than 2 minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard">
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 shadow-xl"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="glass" 
              size="xl"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required • HIPAA compliant • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};
