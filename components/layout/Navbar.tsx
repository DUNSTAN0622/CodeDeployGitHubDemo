import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { PaletteMode } from '@mui/material';

interface NavbarProps {
  toggleSidebar: () => void;
  toggleColor: () => void;
  mode: PaletteMode;
}

export default function Navbar({ toggleSidebar, toggleColor, mode }: NavbarProps) {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <IconButton edge="start" onClick={toggleSidebar} color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton onClick={toggleColor} color="inherit">
          {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
