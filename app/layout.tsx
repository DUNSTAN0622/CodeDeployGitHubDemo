'use client';

import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../src/theme';
import { ColorModeContext } from '../src/contexts/ColorMode';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggleColorMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyL') {
        toggleColorMode();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
          <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
