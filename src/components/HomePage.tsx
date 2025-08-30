import { Shield, Compass, MapPin, Download, CheckCircle, AlertTriangle, TrendingUp, ArrowRight, Brain, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import coalaAstronaut from '@/assets/coala-astronaut.png';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: Compass,
      title: "🧭 Service Navigator",
      description: "Ask me anything about Aussie government services, mate! I'll guide you through it step-by-step with official links.",
      example: "How do I apply for rent assistance?",
      color: "bg-primary",
      tab: "navigator"
    },
    {
      icon: Shield,
      title: "🛡️ Scam Detector",
      description: "Don't get caught out! Paste any suss emails, texts, or websites and I'll check if they're dodgy.",
      example: "Is this government email legit?",
      color: "bg-warning",
      tab: "scam-checker"
    },
    {
      icon: MapPin,
      title: "🗺️ Scam Heatmap",
      description: "Check out where the scammers are most active across Australia! See scam hotspots in your neck of the woods.",
      example: "Show me scam activity near me",
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
    <div className="space-y-16 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-8 py-12 relative z-10">
        <div className="space-y-6 animate-slide-up">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg animate-pulse-glow"></div>
              <div className="relative p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-xl">
                <Sparkles className="h-12 w-12 text-white animate-float" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              G'day! Meet Coala
            </h1>
            <img 
              src={coalaAstronaut} 
              alt="Coala the Space Koala" 
              className="h-20 w-20 animate-float"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your friendly Aussie AI mate for navigating government services, 
            spotting dodgy scams, and keeping you safe online!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {[
            { icon: '🏛️', text: 'Official Government Data' },
            { icon: '🤖', text: 'AI-Powered Intelligence' },
            { icon: '🛡️', text: 'Advanced Scam Protection' }
          ].map((badge, index) => (
            <Badge key={index} variant="secondary" className="px-6 py-3 text-base bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="mr-2 text-lg">{badge.icon}</span>
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>

      {/* Interactive Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
        {stats.map((stat, index) => (
          <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-white to-secondary/20 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <CardContent className="pt-8 pb-6 relative z-10">
              <div className="space-y-4 text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`h-8 w-8 ${stat.color} group-hover:animate-pulse`} />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Features Section */}
      <div className="space-y-12">
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            How Coala Helps You Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three bonzer AI tools designed to make government services easy as and keep you safe from scammers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-to-br from-white to-secondary/30 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-translate-y-3 animate-slide-up"
              style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              onClick={() => onNavigate(feature.tab)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:animate-scale-bounce shadow-xl">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-muted/50 to-muted/30 p-4 rounded-xl border border-muted">
                    <p className="text-sm text-muted-foreground italic flex items-center">
                      <span className="mr-2">💭</span>
                      "{feature.example}"
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:animate-pulse-glow"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(feature.tab);
                    }}
                  >
                    <span className="flex items-center justify-center">
                      Try {feature.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary shadow-2xl border-0 animate-slide-up" style={{ animationDelay: '1.8s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/50 via-white/80 to-white/50"></div>
        
        <CardContent className="relative z-10 p-12 text-center text-white">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Choose your path to smarter government services and enhanced digital security
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => onNavigate('navigator')}
                className="group flex items-center gap-3 px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Compass className="h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
                Ask a Question
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => onNavigate('scam-checker')}
              >
                <Shield className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                Check for Scams
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Export Feature */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-secondary/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-up" style={{ animationDelay: '2.1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="text-center relative z-10">
          <CardTitle className="flex items-center justify-center gap-3 text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-success to-primary rounded-xl group-hover:animate-scale-bounce">
              <Download className="h-6 w-6 text-white" />
            </div>
            Export Your Results
          </CardTitle>
          <CardDescription className="text-lg leading-relaxed">
            Generate a comprehensive PDF "Coala Report" with your personalized guidance, 
            safety recommendations, and official source links - fair dinkum helpful!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};