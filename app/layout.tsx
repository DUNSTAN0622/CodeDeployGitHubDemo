import '../styles/globals.css';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode, Box } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Sidebar, { drawerWidth } from '../components/layout/Sidebar';
import { ReactNode, useMemo, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const toggleSidebar = () => {
    if (mdUp) {
      setCollapsed((c) => !c);
    } else {
      setMobileOpen((o) => !o);
    }
  };

  const toggleColor = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const sidebarWidth = collapsed ? 72 : drawerWidth;

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" minHeight="100vh">
            <Navbar toggleSidebar={toggleSidebar} toggleColor={toggleColor} mode={mode} />
            <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} toggle={toggleSidebar} />
            <Box component="main" flexGrow={1} pt={7} pl={{ xs: 0, md: sidebarWidth }}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
