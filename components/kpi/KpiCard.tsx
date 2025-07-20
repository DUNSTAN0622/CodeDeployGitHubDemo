import { Card, CardContent, Stack, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { ReactElement } from 'react';

interface KpiCardProps {
  title: string;
  value: string | number;
  diff: number;
  icon: ReactElement;
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export default function KpiCard({ title, value, diff, icon, color }: KpiCardProps) {
  const isPositive = diff >= 0;
  const DiffIcon = isPositive ? ArrowUpward : ArrowDownward;
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          {icon}
          <Typography color={color} variant="h6">
            {title}
          </Typography>
        </Stack>
        <Typography variant="h4" gutterBottom>
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <DiffIcon style={{ color: isPositive ? 'green' : 'red' }} fontSize="small" />
          <Typography variant="body2" style={{ color: isPositive ? 'green' : 'red' }}>
            {Math.abs(diff)}%
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
