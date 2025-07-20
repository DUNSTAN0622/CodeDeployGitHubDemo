import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import Link from 'next/link';
import { NavItem } from './Sidebar';
import { useLayoutContext } from '../../contexts/LayoutContext';

interface Props {
  item: NavItem;
  collapsed: boolean;
}

export default function SidebarItem({ item, collapsed }: Props) {
  const { closeSidebar } = useLayoutContext();

  const content = (
    <ListItemButton component={Link} href={item.href} onClick={closeSidebar}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      {!collapsed && <ListItemText primary={item.title} />}
    </ListItemButton>
  );

  return collapsed ? (
    <Tooltip title={item.title} placement="right">
      {content}
    </Tooltip>
  ) : (
    content
  );
}
