'use client';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export const drawerWidth = 240;

export interface NavItem {
  title: string;
  icon: ReactNode;
  href: string;
}

export const navItems: NavItem[] = [
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
  const pathname = usePathname();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const content = (
    <List sx={{ width: collapsed ? 72 : drawerWidth, transition: theme.transitions.create('width') }}>
      {navItems.map((item) => (
        <ListItemButton
          key={item.href}
          component={Link}
          href={item.href}
          selected={pathname === item.href}
          sx={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 2 }}>
            {item.icon}
          </ListItemIcon>
          {!collapsed && <ListItemText primary={item.title} />}
        </ListItemButton>
      ))}
    </List>
  );

  if (mdUp) {
    return (
      <Drawer
        variant="permanent"
        open={!collapsed}
        sx={{
          width: collapsed ? 72 : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: collapsed ? 72 : drawerWidth,
            boxSizing: 'border-box',
            transition: theme.transitions.create('width'),
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={toggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      {content}
    </Drawer>
  );
}
