import { useState } from "react";
import { Phone, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface SOSButtonProps {
  size?: "default" | "large" | "floating";
  className?: string;
}

export const SOSButton = ({ size = "default", className }: SOSButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { toast } = useToast();

  const handleSOSClick = () => {
    setIsOpen(true);
  };

  const activateSOS = async () => {
    setIsActivating(true);
    
    // Simulate getting location and sending SOS
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsActivating(false);
    setIsActive(true);
    setIsOpen(false);

    toast({
      title: "🚨 SOS Activated",
      description: "Emergency services have been notified. Help is on the way!",
      variant: "destructive",
    });

    // Reset after demo
    setTimeout(() => setIsActive(false), 5000);
  };

  const sizeClasses = {
    default: "h-12 w-12",
    large: "h-20 w-20 text-2xl",
    floating: "h-16 w-16 fixed bottom-6 right-6 z-50",
  };

  return (
    <>
      <Button
        variant="emergency"
        className={`${sizeClasses[size]} rounded-full font-bold ${isActive ? 'animate-pulse' : ''} ${className}`}
        onClick={handleSOSClick}
        aria-label="Emergency SOS"
      >
        {isActive ? (
          <Phone className="h-6 w-6 animate-bounce" />
        ) : (
          <span className="text-lg font-black">SOS</span>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-emergency">
              <AlertTriangle className="h-6 w-6" />
              Activate Emergency SOS?
            </DialogTitle>
            <DialogDescription className="text-base">
              This will immediately:
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emergency/10 border border-emergency/20">
              <div className="h-2 w-2 rounded-full bg-emergency animate-pulse" />
              <span className="text-sm">Share your live GPS location</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emergency/10 border border-emergency/20">
              <div className="h-2 w-2 rounded-full bg-emergency animate-pulse" />
              <span className="text-sm">Alert nearest hospital & paramedics</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emergency/10 border border-emergency/20">
              <div className="h-2 w-2 rounded-full bg-emergency animate-pulse" />
              <span className="text-sm">Notify your emergency contacts</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emergency/10 border border-emergency/20">
              <div className="h-2 w-2 rounded-full bg-emergency animate-pulse" />
              <span className="text-sm">Share your medical history with responders</span>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button
              variant="emergency"
              size="xl"
              className="w-full"
              onClick={activateSOS}
              disabled={isActivating}
            >
              {isActivating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Activating SOS...
                </>
              ) : (
                <>
                  <Phone className="h-5 w-5" />
                  Confirm Emergency
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
              disabled={isActivating}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
