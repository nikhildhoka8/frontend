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
  'Adams County', 'Allen County', 'Bartholomew County', 'Benton County', 'Blackford County', 'Boone County', 'Brown County', 'Carroll County', 'Cass County', 'Clark County', 'Clay County', 'Clinton County', 'Crawford County', 'Daviess County', 'Dearborn County', 'Decatur County', 'DeKalb County', 'Delaware County', 'Dubois County', 'Elkhart County', 'Fayette County', 'Floyd County', 'Fountain County', 'Franklin County', 'Fulton County', 'Gibson County', 'Grant County', 'Greene County', 'Hamilton County', 'Hancock County', 'Harrison County', 'Hendricks County', 'Henry County', 'Howard County', 'Huntington County', 'Jackson County', 'Jasper County', 'Jay County', 'Jefferson County', 'Jennings County', 'Johnson County', 'Knox County', 'Kosciusko County', 'LaGrange County', 'Lake County', 'LaPorte County', 'Lawrence County', 'Madison County', 'Marion County County', 'Marshall County', 'Martin County', 'Miami County', 'Monroe County', 'Montgomery County', 'Morgan County', 'Newton County', 'Noble County', 'Ohio County', 'Orange County', 'Owen County', 'Parke County', 'Perry County', 'Pike County', 'Porter County', 'Posey County', 'Pulaski County', 'Putnam County', 'Randolph County', 'Ripley County', 'Rush County', 'St. Joseph County', 'Scott County', 'Shelby County', 'Spencer County', 'Starke County', 'Steuben County', 'Sullivan County', 'Switzerland County', 'Tippecanoe County', 'Tipton County', 'Union County', 'Vanderburgh County', 'Vermillion County', 'Vigo County', 'Wabash County', 'Warren County', 'Warrick County', 'Washington County', 'Wayne County', 'Wells County', 'White County', 'Whitley County'

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