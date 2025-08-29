import { useState } from 'react';
import { Send, ExternalLink, Loader2, HelpCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const ServiceNavigator = () => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<Array<{
    question: string;
    answer: string;
    sources: Array<{ title: string; url: string; }>;
    steps?: Array<string>;
  }>>([]);

  const exampleQuestions = [
    "How do I apply for rent assistance?",
    "What Medicare rebates am I eligible for?",
    "How do I report a change in income to Centrelink?",
    "What tax deductions can I claim this year?",
    "How do I get a Seniors Card?",
    "What childcare subsidies are available?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    
    // Simulate API call - in real implementation, this would call the AI service
    setTimeout(() => {
      const mockResponse = {
        question: question,
        answer: "Based on your query about rent assistance, here's what you need to know: Rent Assistance is a payment to help with rent costs if you receive certain Centrelink payments. You may be eligible if you pay rent and receive qualifying payments like JobSeeker, Youth Allowance, or Age Pension.",
        sources: [
          { title: "Rent Assistance - Services Australia", url: "https://www.servicesaustralia.gov.au/rent-assistance" },
          { title: "How to apply for Rent Assistance", url: "https://www.servicesaustralia.gov.au/how-to-apply-rent-assistance" }
        ],
        steps: [
          "Check your eligibility on the Services Australia website",
          "Gather required documents (lease agreement, rent receipts)",
          "Log into your myGov account or create one",
          "Navigate to Centrelink online services", 
          "Complete the Rent Assistance application form",
          "Submit supporting documents",
          "Wait for assessment (usually 1-2 weeks)"
        ]
      };
      
      setResponses(prev => [mockResponse, ...prev]);
      setQuestion('');
      setIsLoading(false);
    }, 2000);
  };

  const handleExampleClick = (example: string) => {
    setQuestion(example);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">Service Navigator</h2>
        <p className="text-lg text-muted-foreground">
          Ask questions about Australian government services in plain English
        </p>
      </div>

      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            What would you like to know?
          </CardTitle>
          <CardDescription>
            Type your question below and get step-by-step guidance with official sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., How do I apply for rent assistance?"
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !question.trim()}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            {/* Example Questions */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleExampleClick(example)}
                    className="text-xs h-8"
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Responses */}
      {responses.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Your Questions & Answers</h3>
          {responses.map((response, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Q: {response.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Answer:</h4>
                  <p className="text-muted-foreground leading-relaxed">{response.answer}</p>
                </div>

                {response.steps && (
                  <div>
                    <h4 className="font-semibold mb-2">Step-by-step Guide:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      {response.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Official Sources:
                  </h4>
                  <div className="space-y-2">
                    {response.sources.map((source, sourceIndex) => (
                      <div key={sourceIndex} className="flex items-center gap-2">
                        <Badge variant="secondary">gov.au</Badge>
                        <a 
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          {source.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {responses.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ready to Help!</h3>
            <p className="text-muted-foreground">
              Ask any question about Australian government services and get step-by-step guidance
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};