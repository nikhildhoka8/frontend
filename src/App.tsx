import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { MapSelect } from '@/components/map-select';
import { LocationSelect } from '@/components/location-select';
import { ProgramList } from '@/components/program-list';
import { AdminPanel } from '@/components/admin-panel';
import { Leaf } from 'lucide-react';

function App() {
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [showPrograms, setShowPrograms] = useState(false);

  const handleCountySelect = (county: string) => {
    setSelectedCounty(county);
  };

  const handleSubmit = () => {
    if (selectedCounty) {
      setShowPrograms(true);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <h1 className="text-xl font-semibold">Data Mine & ISA</h1>
            </div>
            <ModeToggle />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Welcome to the Data Mine and ISA Collaboration Project
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Enter your state and county to see the eligible agriculture programs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <LocationSelect 
                selectedCounty={selectedCounty} 
                onCountySelect={handleCountySelect}
                onSubmit={handleSubmit}
              />
              <MapSelect 
                selectedCounty={selectedCounty}
                onCountySelect={handleCountySelect}
                onSubmit={handleSubmit}
              />
            </div>

            {showPrograms && <ProgramList county={selectedCounty} />}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;