import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

// Dummy data for demonstration
const DUMMY_PROGRAMS = [
  {
    id: 1,
    name: 'Crop Insurance Program',
    description: 'Insurance coverage for crop losses due to natural causes',
    eligibility: 'All farmers with active farming operations',
    deadline: '2024-12-31',
    fundingAmount: '$50,000',
  },
  {
    id: 2,
    name: 'Conservation Reserve Program',
    description: 'Financial incentives for farmers to convert farmland to conservation uses',
    eligibility: 'Landowners with eligible agricultural land',
    deadline: '2024-10-15',
    fundingAmount: '$75,000',
  },
  {
    id: 3,
    name: 'Beginning Farmer Program',
    description: 'Support for new farmers starting their agricultural operations',
    eligibility: 'First-time farmers with less than 10 years of experience',
    deadline: '2024-09-30',
    fundingAmount: '$25,000',
  },
];

interface ProgramListProps {
  county: string;
}

export function ProgramList({ county }: ProgramListProps) {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-4">
        Available Programs in {county} County
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Program Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Eligibility</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Funding Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DUMMY_PROGRAMS.map((program) => (
            <TableRow key={program.id}>
              <TableCell className="font-medium">{program.name}</TableCell>
              <TableCell>{program.description}</TableCell>
              <TableCell>{program.eligibility}</TableCell>
              <TableCell>{program.deadline}</TableCell>
              <TableCell>{program.fundingAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}