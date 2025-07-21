'use client';
import Grid from '@mui/material/Grid';
import { AttachMoney, ShoppingCart, BarChart, TrendingUp } from '@mui/icons-material';
import KpiCard from '../components/kpi/KpiCard';
import useKpi from '../hooks/useKpi';

export default function HomePage() {
  const { data } = useKpi();

  return (
    <Grid container spacing={2}>
      {data && (
        <>
          <Grid item xs={12} md={3}>
            <KpiCard
              title="Revenue"
              value={`$${data.revenue.toLocaleString()}`}
              diff={5.2}
              icon={<AttachMoney />}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <KpiCard
              title="Orders"
              value={data.orders}
              diff={-1.3}
              icon={<ShoppingCart />}
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <KpiCard
              title="Traffic"
              value={data.traffic}
              diff={3.1}
              icon={<BarChart />}
              color="info"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <KpiCard
              title="CVR"
              value={`${data.conversion}%`}
              diff={0.4}
              icon={<TrendingUp />}
              color="success"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
