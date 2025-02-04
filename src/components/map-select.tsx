import { useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Import Indiana county GeoJSON data
import indianaCounties from '@/data/indiana-counties.json';

interface MapSelectProps {
  selectedCounty: string;
  onCountySelect: (county: string) => void;
  onSubmit: () => void;
}

export function MapSelect({ selectedCounty, onCountySelect, onSubmit }: MapSelectProps) {
  const handleCountyClick = useCallback((geography: any) => {
    const countyName = geography.properties.NAME;
    onCountySelect(countyName);
  }, [onCountySelect]);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden">
          <TooltipProvider>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 5000,
                center: [-86.1349, 39.8283], // Center of Indiana
              }}
            >
              <ZoomableGroup>
                <Geographies geography={indianaCounties}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Tooltip key={geo.rsmKey}>
                        <TooltipTrigger asChild>
                          <Geography
                            geography={geo}
                            onClick={() => handleCountyClick(geo)}
                            style={{
                              default: {
                                fill: selectedCounty === geo.properties.NAME
                                  ? 'hsl(var(--primary))'
                                  : 'hsl(var(--muted))',
                                stroke: 'hsl(var(--border))',
                                strokeWidth: 0.5,
                                outline: 'none',
                              },
                              hover: {
                                fill: 'hsl(var(--primary))',
                                stroke: 'hsl(var(--border))',
                                strokeWidth: 0.5,
                                outline: 'none',
                                cursor: 'pointer',
                              },
                              pressed: {
                                fill: 'hsl(var(--primary))',
                                stroke: 'hsl(var(--border))',
                                strokeWidth: 0.5,
                                outline: 'none',
                              },
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          {geo.properties.NAME} County
                        </TooltipContent>
                      </Tooltip>
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </TooltipProvider>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {selectedCounty
              ? `Selected: ${selectedCounty} County`
              : 'Click on a county to select it'}
          </p>
          <Button
            onClick={onSubmit}
            disabled={!selectedCounty}
          >
            Find Programs
          </Button>
        </div>
      </div>
    </Card>
  );
}