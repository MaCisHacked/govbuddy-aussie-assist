import { useState } from 'react';
import { GraduationCap, Trophy, Target, CheckCircle, Star, ArrowRight, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: number;
  points: number;
  completed?: boolean;
}

export const DigitalCoach = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [userLevel, setUserLevel] = useState(250); // out of 1000
  const [userBadges, setUserBadges] = useState(['Scam Spotter', 'Email Expert']);

  const quizzes: Quiz[] = [
    {
      id: 'email-safety',
      title: 'Email Safety Basics',
      description: 'Learn to identify suspicious emails and phishing attempts',
      difficulty: 'Beginner',
      questions: 5,
      points: 50,
      completed: true
    },
    {
      id: 'url-verification',
      title: 'URL Verification',
      description: 'Master the art of checking website authenticity',
      difficulty: 'Beginner',
      questions: 7,
      points: 70,
      completed: true
    },
    {
      id: 'social-media-scams',
      title: 'Social Media Scams',
      description: 'Spot fraudulent posts, fake profiles, and social engineering',
      difficulty: 'Intermediate',
      questions: 8,
      points: 100
    },
    {
      id: 'investment-fraud',
      title: 'Investment Fraud Detection',
      description: 'Identify fake investment opportunities and Ponzi schemes',
      difficulty: 'Advanced',
      questions: 10,
      points: 150
    },
    {
      id: 'mobile-security',
      title: 'Mobile Security Essentials',
      description: 'Protect your smartphone from malware and data theft',
      difficulty: 'Intermediate',
      questions: 6,
      points: 80
    }
  ];

  const personalizedTips = [
    'Based on your location in VIC, be aware of rental scams targeting students',
    'You\'ve shown good email security skills - try the intermediate social media quiz next',
    'Consider enabling 2FA on your government service accounts for extra security',
    'Your scam detection rate is improving - keep practicing with our daily challenges'
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success text-success-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    // In real implementation, this would navigate to the quiz interface
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">Digital Confidence Coach</h2>
        <p className="text-lg text-muted-foreground">
          Build your scam detection skills with interactive quizzes and personalized tips
        </p>
      </div>

      {/* User Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            Your Digital Safety Level
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Safety Score</span>
                <span className="text-2xl font-bold text-primary">{userLevel}/1000</span>
              </div>
              <Progress value={(userLevel / 1000) * 100} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                You're in the top 30% of users! Keep learning to reach expert level.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Your Badges</h4>
              <div className="flex flex-wrap gap-2">
                {userBadges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {badge}
                  </Badge>
                ))}
                <Badge variant="outline" className="text-muted-foreground">
                  +3 more to unlock
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalized Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Personalized Safety Tips
          </CardTitle>
          <CardDescription>
            Based on your progress and location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {personalizedTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Quizzes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Interactive Learning Quizzes
          </CardTitle>
          <CardDescription>
            Test your knowledge and earn points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="cursor-pointer transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{quiz.title}</h4>
                    {quiz.completed && (
                      <CheckCircle className="h-5 w-5 text-success" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty}
                    </Badge>
                    <Badge variant="outline">
                      {quiz.points} points
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {quiz.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {quiz.questions} questions
                    </span>
                    <Button 
                      size="sm"
                      variant={quiz.completed ? "outline" : "default"}
                      onClick={() => startQuiz(quiz)}
                    >
                      {quiz.completed ? (
                        <>Retake Quiz</>
                      ) : (
                        <>
                          Start Quiz
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Challenge */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            Today's Challenge
          </CardTitle>
          <CardDescription>
            Complete for bonus points and maintain your streak
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border">
              <h4 className="font-semibold mb-2">Spot the Fake Government Email</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Can you identify what makes this email suspicious? Look for 5 red flags.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">20 bonus points</Badge>
                <Badge variant="outline">5 min challenge</Badge>
              </div>
            </div>
            
            <Button className="w-full">
              Start Today's Challenge
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};