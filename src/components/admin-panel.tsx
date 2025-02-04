import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function AdminPanel() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScrape = async () => {
    setIsLoading(true);
    // Implement web scraping logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-4">Admin Panel</h3>
      
      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <Input
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={handleScrape} disabled={isLoading}>
            {isLoading ? 'Scraping...' : 'Scrape Data'}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Scraped Programs</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="text-center text-muted-foreground">
                No programs scraped yet
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}