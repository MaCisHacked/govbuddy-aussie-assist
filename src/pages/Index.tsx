import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/components/HomePage';
import { ServiceNavigator } from '@/components/ServiceNavigator';
import { ScamChecker } from '@/components/ScamChecker';
import { ScamHeatmap } from '@/components/ScamHeatmap';
import { DigitalCoach } from '@/components/DigitalCoach';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />;
      case 'navigator':
        return <ServiceNavigator />;
      case 'scam-checker':
        return <ScamChecker />;
      case 'scam-map':
        return <ScamHeatmap />;
      case 'coach':
        return <DigitalCoach />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default Index;
