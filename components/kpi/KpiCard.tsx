
'use client';


import { Card, CardContent, Typography, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import type { ReactElement } from 'react';

interface KpiCardProps {
  title: string;
  value: React.ReactNode;
  diff: number;
  icon: ReactElement;
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning' | string;
}

export default function KpiCard({ title, value, diff, icon, color }: KpiCardProps) {
  const DiffIcon = diff >= 0 ? ArrowUpward : ArrowDownward;
  const diffColor = diff >= 0 ? 'green' : 'red';

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Box color={color}>{icon}</Box>
          <Box display="flex" alignItems="center" color={diffColor}>
            <DiffIcon fontSize="small" />
            <Typography variant="body2" ml={0.5}>{Math.abs(diff)}%</Typography>
          </Box>
        </Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </CardContent>
    </Card>
  );
}
