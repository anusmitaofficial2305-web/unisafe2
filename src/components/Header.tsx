import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOSButton } from "@/components/SOSButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Heart className="h-8 w-8 text-primary fill-primary/20 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            U&I-<span className="text-primary">Safe</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <SOSButton size="default" />
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Patient
            </Button>
          </Link>
          <Link to="/hospital">
            <Button variant="default" size="sm" className="gap-2">
              <Building2 className="h-4 w-4" />
              Hospital
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <SOSButton size="default" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-in-up">
          <nav className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  My Profile
                </Button>
              </Link>
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Patient Dashboard
                </Button>
              </Link>
              <Link to="/hospital" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="w-full gap-2">
                  <Building2 className="h-4 w-4" />
                  Hospital Portal
                </Button>
              </Link>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Login / Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
