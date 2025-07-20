import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const drawerWidth = 240;

interface NavItem {
  title: string;
  icon: ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Dashboard', icon: <DashboardIcon />, href: '/' },
  { title: 'Sales', icon: <BarChartIcon />, href: '/sales' },
  { title: 'Settings', icon: <SettingsIcon />, href: '/settings' },
];

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  toggle: () => void;
}

export default function Sidebar({ collapsed, mobileOpen, toggle }: SidebarProps) {
  const theme = useTheme();
  const pathname = usePathname();

  const width = collapsed ? 72 : drawerWidth;

  const content = (
    <List>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} passHref legacyBehavior>
          <ListItemButton component="a" selected={pathname === item.href}
            sx={{
              pl: 2,
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: collapsed ? 0 : 1 }} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        open={!collapsed}
        sx={{
          display: { xs: 'none', md: 'block' },
          width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width,
            transition: theme.transitions.create('width'),
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {content}
      </Drawer>
    </>
  );
}
