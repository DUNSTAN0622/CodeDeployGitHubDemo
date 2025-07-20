import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../src/components/layout/Sidebar';
import { LayoutProvider } from '../src/contexts/LayoutContext';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CssBaseline />
        <LayoutProvider>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
}
