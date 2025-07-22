'use client';
import '../styles/globals.css';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { useMemo, useState, ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar, { drawerWidth } from '../components/layout/Sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const toggleColor = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth < theme.breakpoints.values.md) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" minHeight="100vh">
            <Navbar toggleSidebar={toggleSidebar} toggleColor={toggleColor} mode={mode} />
            <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} toggle={toggleSidebar} />
            <Box component="main" flexGrow={1} pt={7} pl={drawerWidth}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
