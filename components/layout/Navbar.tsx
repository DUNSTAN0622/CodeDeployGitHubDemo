'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
  toggleSidebar: () => void;
  toggleColor: () => void;
  mode: 'light' | 'dark';
}

export default function Navbar({ toggleSidebar, toggleColor, mode }: NavbarProps) {
  return (
    <AppBar position="fixed" elevation={0} sx={{ height: 56, justifyContent: 'center' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleColor}>
          {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
