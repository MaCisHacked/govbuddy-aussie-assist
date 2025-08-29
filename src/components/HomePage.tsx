import { Shield, Compass, MapPin, Download, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: Compass,
      title: "Service Navigator",
      description: "Ask questions in plain English about government services. Get step-by-step guidance with official links.",
      example: "How do I apply for rent assistance?",
      color: "bg-primary",
      tab: "navigator"
    },
    {
      icon: Shield,
      title: "Scam & Phishing Detector",
      description: "Paste suspicious emails, SMS, or URLs. Get instant risk assessment and fraud detection.",
      example: "Check if that government email is legitimate",
      color: "bg-warning",
      tab: "scam-checker"
    },
    {
      icon: MapPin,
      title: "Scam Heatmap",
      description: "View interactive maps showing scam reports and losses by suburb across Australia.",
      example: "See scam hotspots in your area",
      color: "bg-destructive",
      tab: "scam-map"
    }
  ];

  const stats = [
    { label: "Government Services", value: "40+", icon: CheckCircle, color: "text-success" },
    { label: "Scam Types Detected", value: "25+", icon: AlertTriangle, color: "text-warning" },
    { label: "Official Sources", value: "12+", icon: TrendingUp, color: "text-primary" }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Welcome to GovBuddy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your AI-powered assistant for navigating Australian government services and staying safe from scams
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🏛️ Official Government Data
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🤖 AI-Powered Assistance
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🛡️ Scam Protection
          </Badge>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">How GovBuddy Helps You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three powerful tools to make government services easier and keep you safe from fraud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  onClick={() => onNavigate(feature.tab)}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm text-muted-foreground italic">
                      "{feature.example}"
                    </p>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(feature.tab);
                    }}
                  >
                    Try {feature.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Choose a tool above or start by asking a question about government services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('navigator')}
              className="flex items-center gap-2"
            >
              <Compass className="h-5 w-5" />
              Ask a Question
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => onNavigate('scam-checker')}
            >
              <Shield className="h-5 w-5 mr-2" />
              Check for Scams
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Export Feature */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Download className="h-5 w-5" />
            Export Your Results
          </CardTitle>
          <CardDescription>
            Get a personalized PDF "GovBuddy Report" with your questions, answers, and safety recommendations
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};