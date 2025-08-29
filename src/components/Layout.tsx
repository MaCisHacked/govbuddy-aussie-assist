import { useState } from 'react';
import { Compass, Shield, MapPin, GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import govbuddyLogo from '@/assets/govbuddy-logo.jpg';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Compass },
  { id: 'navigator', label: 'Service Navigator', icon: Compass },
  { id: 'scam-checker', label: 'Scam Checker', icon: Shield },
  { id: 'scam-map', label: 'Scam Heatmap', icon: MapPin },
  { id: 'coach', label: 'Digital Coach', icon: GraduationCap },
];

export const Layout = ({ children, activeTab, onTabChange }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary to-accent shadow-xl border-b border-primary/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={govbuddyLogo} 
                alt="GovBuddy Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">GovBuddy</h1>
                <p className="text-xs text-primary-foreground/80">Your Government Services Assistant</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105",
                      activeTab === tab.id
                        ? "bg-white/90 text-primary shadow-lg backdrop-blur-sm animate-pulse-glow"
                        : "text-white hover:bg-white/20 hover:shadow-lg"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    onClick={() => {
                      onTabChange(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full justify-start flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium",
                      activeTab === tab.id
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Official Sources:</strong> Data from Scamwatch, ACMA, Services Australia, ATO, and ABS
            </p>
            <p className="mb-2">
              <strong>Disclaimer:</strong> This information is for guidance only. Always verify with official government sources.
            </p>
            <p>
              Built for GovHack 2025 • Not an official government website
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};