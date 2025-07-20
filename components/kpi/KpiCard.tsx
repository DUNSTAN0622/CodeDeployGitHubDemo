import { Card, CardContent, Stack, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReactNode } from 'react';

interface KpiCardProps {
  title: string;
  value: ReactNode;
  diff: number;
  icon: ReactNode;
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

export default function KpiCard({ title, value, diff, icon, color }: KpiCardProps) {
  const isPositive = diff >= 0;
  const DiffIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon;
  const diffColor = isPositive ? 'success.main' : 'error.main';

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          {icon}
          <Stack>
            <Typography color="text.secondary" variant="body2">
              {title}
            </Typography>
            <Typography variant="h5" color={color}>
              {value}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <DiffIcon fontSize="small" sx={{ color: diffColor }} />
              <Typography variant="body2" sx={{ color: diffColor }}>
                {Math.abs(diff)}%
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
