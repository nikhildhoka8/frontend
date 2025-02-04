import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const INDIANA_COUNTIES = [
  'Adams', 'Allen', 'Bartholomew', 'Benton', 'Blackford', 'Boone', 'Brown',
  'Carroll', 'Cass', 'Clark', 'Clay', 'Clinton', 'Crawford', 'Daviess', 'Dearborn',
  'Decatur', 'DeKalb', 'Delaware', 'Dubois', 'Elkhart', 'Fayette', 'Floyd',
  'Fountain', 'Franklin', 'Fulton', 'Gibson', 'Grant', 'Greene', 'Hamilton',
  'Hancock', 'Harrison', 'Hendricks', 'Henry', 'Howard', 'Huntington', 'Jackson',
  'Jasper', 'Jay', 'Jefferson', 'Jennings', 'Johnson', 'Knox', 'Kosciusko',
  'LaGrange', 'Lake', 'LaPorte', 'Lawrence', 'Madison', 'Marion', 'Marshall',
  'Martin', 'Miami', 'Monroe', 'Montgomery', 'Morgan', 'Newton', 'Noble', 'Ohio',
  'Orange', 'Owen', 'Parke', 'Perry', 'Pike', 'Porter', 'Posey', 'Pulaski',
  'Putnam', 'Randolph', 'Ripley', 'Rush', 'St. Joseph', 'Scott', 'Shelby',
  'Spencer', 'Starke', 'Steuben', 'Sullivan', 'Switzerland', 'Tippecanoe', 'Tipton',
  'Union', 'Vanderburgh', 'Vermillion', 'Vigo', 'Wabash', 'Warren', 'Warrick',
  'Washington', 'Wayne', 'Wells', 'White', 'Whitley'
];

interface LocationSelectProps {
  selectedCounty: string;
  onCountySelect: (county: string) => void;
  onSubmit: () => void;
}

export function LocationSelect({ selectedCounty, onCountySelect, onSubmit }: LocationSelectProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>
          <Select defaultValue="IN" disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IN">Indiana</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">County</label>
          <Select value={selectedCounty} onValueChange={onCountySelect}>
            <SelectTrigger>
              <SelectValue placeholder="Select county" />
            </SelectTrigger>
            <SelectContent>
              {INDIANA_COUNTIES.map((county) => (
                <SelectItem key={county} value={county}>
                  {county}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={onSubmit}
          disabled={!selectedCounty}
        >
          Find Programs
        </Button>
      </div>
    </Card>
  );
}