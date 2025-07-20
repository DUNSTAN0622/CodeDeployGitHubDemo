import { Drawer, List, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import type { ReactNode } from 'react';
import SidebarItem from './SidebarItem';
import { useLayoutContext } from '../../contexts/LayoutContext';

export interface NavItem {
  title: string;
  icon: ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Home', icon: <HomeIcon />, href: '/' },
  { title: 'Settings', icon: <SettingsIcon />, href: '/settings' },
];

const DRAWER_WIDTH_EXPANDED = 240;
const DRAWER_WIDTH_COLLAPSED = 72;

export default function Sidebar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { isSidebarOpen, closeSidebar } = useLayoutContext();

  const collapsed = isDesktop && !isSidebarOpen;
  const width = collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH_EXPANDED;

  const content = (
    <Box sx={{ width }}>
      <List>
        {navItems.map((item) => (
          <SidebarItem key={item.title} item={item} collapsed={collapsed} />
        ))}
      </List>
    </Box>
  );

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        open
        sx={{
          width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer variant="temporary" open={isSidebarOpen} onClose={closeSidebar}>
      {content}
    </Drawer>
  );
}
