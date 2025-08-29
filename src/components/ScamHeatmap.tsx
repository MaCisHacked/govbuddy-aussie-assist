import { MapPin, TrendingUp, DollarSign, AlertTriangle, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ScamHeatmap = () => {
  const scamStats = [
    { suburb: 'Melbourne CBD', state: 'VIC', reports: 245, losses: 1250000, risk: 'High' },
    { suburb: 'Sydney CBD', state: 'NSW', reports: 198, losses: 980000, risk: 'High' },
    { suburb: 'Perth CBD', state: 'WA', reports: 87, losses: 420000, risk: 'Medium' },
    { suburb: 'Brisbane CBD', state: 'QLD', reports: 156, losses: 750000, risk: 'High' },
    { suburb: 'Adelaide CBD', state: 'SA', reports: 65, losses: 320000, risk: 'Medium' },
    { suburb: 'Hobart', state: 'TAS', reports: 32, losses: 180000, risk: 'Low' },
    { suburb: 'Darwin', state: 'NT', reports: 28, losses: 150000, risk: 'Low' },
    { suburb: 'Canberra', state: 'ACT', reports: 54, losses: 290000, risk: 'Medium' }
  ];

  const topScamTypes = [
    { type: 'Investment Scams', reports: 312, losses: 2100000 },
    { type: 'Romance Scams', reports: 198, losses: 1800000 },
    { type: 'Phishing Emails', reports: 456, losses: 890000 },
    { type: 'Phone Scams', reports: 287, losses: 650000 },
    { type: 'Online Shopping', reports: 234, losses: 420000 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-destructive text-destructive-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">Scam Heatmap</h2>
        <p className="text-lg text-muted-foreground">
          Interactive map showing scam reports and financial losses by location across Australia
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Map Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">State/Territory</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="nsw">New South Wales</SelectItem>
                  <SelectItem value="vic">Victoria</SelectItem>
                  <SelectItem value="qld">Queensland</SelectItem>
                  <SelectItem value="wa">Western Australia</SelectItem>
                  <SelectItem value="sa">South Australia</SelectItem>
                  <SelectItem value="tas">Tasmania</SelectItem>
                  <SelectItem value="nt">Northern Territory</SelectItem>
                  <SelectItem value="act">ACT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select defaultValue="ytd">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                  <SelectItem value="last12">Last 12 Months</SelectItem>
                  <SelectItem value="last6">Last 6 Months</SelectItem>
                  <SelectItem value="last3">Last 3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Scam Type</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="phishing">Phishing</SelectItem>
                  <SelectItem value="phone">Phone Scams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Interactive Scam Map
          </CardTitle>
          <CardDescription>
            Click on regions to see detailed scam statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Interactive Map Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              This will display an interactive map of Australia with heat zones showing scam density and losses by suburb
            </p>
            <Button variant="outline">
              View Full Screen Map
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Scam Reports by Location
            </CardTitle>
            <CardDescription>
              Top areas for scam activity (Year to Date)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scamStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{stat.suburb}</h4>
                      <Badge variant="secondary">{stat.state}</Badge>
                      <Badge className={getRiskColor(stat.risk)}>{stat.risk}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.reports} reports • {formatCurrency(stat.losses)} lost
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{stat.reports}</div>
                    <div className="text-xs text-muted-foreground">reports</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Scam Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Scam Types by Financial Impact
            </CardTitle>
            <CardDescription>
              Most costly scam categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topScamTypes.map((scam, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{scam.type}</h4>
                    <div className="text-sm text-muted-foreground">
                      {scam.reports} reports • Avg loss: {formatCurrency(scam.losses / scam.reports)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-destructive">
                      {formatCurrency(scam.losses)}
                    </div>
                    <div className="text-xs text-muted-foreground">total lost</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Warning Card */}
      <Card className="bg-warning/10 border-warning">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• Scam data is sourced from official Scamwatch reports and may not represent all incidents</p>
            <p>• Many scams go unreported, so actual numbers may be higher</p>
            <p>• Data is updated monthly and may have a delay</p>
            <p>• Use this information for awareness - high numbers don't mean an area is unsafe</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};