import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Scan, ExternalLink, Copy, Mail, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ScamResult {
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  redFlags: string[];
  summary: string;
  recommendations: string[];
}

export const ScamChecker = () => {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScamResult | null>(null);
  const [activeTab, setActiveTab] = useState('email');

  const exampleScams = {
    email: `From: noreply@servicesaustralia.gov.au.secure-update.com
Subject: URGENT: Your Medicare benefits will be suspended

Dear Recipient,

Your Medicare account requires immediate verification. Click the link below within 24 hours or your benefits will be suspended.

Verify Now: http://bit.ly/medicare-urgent-verify

Australian Government
Services Australia`,
    sms: "SERVICES AUSTRALIA: Your payment is pending. Verify your details immediately: http://short-link.co/verify-payment or call 1800-XXX-XXX",
    url: "https://servicesaustralia-gov-au-secure.verify-payments.net/login"
  };

  const handleAnalyze = () => {
    if (!content.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate analysis - in real implementation, this would call the scam detection API
    setTimeout(() => {
      const mockResult: ScamResult = {
        riskScore: 85,
        riskLevel: 'High',
        redFlags: [
          'Suspicious domain: not official gov.au domain',
          'Urgent language pressuring immediate action',
          'Shortened URL that hides real destination',
          'Generic greeting instead of personal details',
          'Threats of service suspension'
        ],
        summary: 'This appears to be a phishing attempt impersonating Services Australia. The email uses urgent language and suspicious links to steal personal information.',
        recommendations: [
          'Do not click any links in this message',
          'Delete the email/SMS immediately',
          'Report this scam to Scamwatch',
          'Check your actual Services Australia account via official website',
          'Never provide personal details via email or SMS'
        ]
      };
      
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'High': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-success/10';
      case 'Medium': return 'bg-warning/10';
      case 'High': return 'bg-destructive/10';
      default: return 'bg-muted';
    }
  };

  const loadExample = (type: 'email' | 'sms' | 'url') => {
    setContent(exampleScams[type]);
    setActiveTab(type);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl  text-white/80 font-bold text-primary">Scam & Phishing Detector</h2>
        <p className="text-lg  text-white/80 text-muted-foreground">
          Paste suspicious messages or URLs to check for scams and fraud attempts
        </p>
      </div>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Check for Scams
          </CardTitle>
          <CardDescription>
            Paste the content you want to analyze below - emails, SMS messages, or URLs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </TabsTrigger>
              <TabsTrigger value="sms" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                SMS
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                URL
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="email" className="space-y-4">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the suspicious email content here..."
                className="min-h-32"
              />
            </TabsContent>
            
            <TabsContent value="sms" className="space-y-4">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the suspicious SMS message here..."
                className="min-h-32"
              />
            </TabsContent>
            
            <TabsContent value="url" className="space-y-4">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the suspicious URL here..."
                className="min-h-32"
              />
            </TabsContent>
          </Tabs>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => loadExample('email')}>
                Load Example Email
              </Button>
              <Button variant="outline" size="sm" onClick={() => loadExample('sms')}>
                Load Example SMS
              </Button>
              <Button variant="outline" size="sm" onClick={() => loadExample('url')}>
                Load Example URL
              </Button>
            </div>
            
            <Button onClick={handleAnalyze} disabled={isAnalyzing || !content.trim()}>
              {isAnalyzing ? (
                <>
                  <Scan className="h-4 w-4 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Scan className="h-4 w-4 mr-2" />
                  Analyze for Scams
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Risk Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Risk Assessment</span>
                <Badge className={getRiskBgColor(result.riskLevel) + ' ' + getRiskColor(result.riskLevel)}>
                  {result.riskLevel} Risk
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Risk Score</span>
                    <span className={`text-lg font-bold ${getRiskColor(result.riskLevel)}`}>
                      {result.riskScore}/100
                    </span>
                  </div>
                  <Progress value={result.riskScore} className="h-2" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{result.summary}</p>
              </div>
            </CardContent>
          </Card>

          {/* Red Flags */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Red Flags Detected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.redFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                What You Should Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{rec}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Report to Scamwatch
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  ACMA Report Spam
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="h-3 w-3 mr-1" />
                  Copy Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!result && !isAnalyzing && (
        <Card>
          <CardContent className="text-center py-12">
            <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ready to Protect You</h3>
            <p className="text-muted-foreground">
              Paste any suspicious content above and we'll analyze it for scam indicators
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};