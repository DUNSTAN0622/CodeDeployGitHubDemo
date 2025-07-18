'use client';

import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorMode } from '../src/contexts/ColorMode';

export default function Navbar() {
  const { toggleColorMode, mode } = useColorMode();
  return (
    <nav
      style={{
        padding: '1rem',
        background: '#eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      Navbar
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </nav>
  );
}
