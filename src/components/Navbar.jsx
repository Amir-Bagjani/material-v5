import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useNavigate } from 'react-router-dom'

import { mainNavbarItems } from './consts/navbarItems';
const drawerWidth = 240;

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: `#101F33`,
        color: `rgba(255,255,255,0.7)`
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavbarItems.map((i) => (
        <ListItem
         onClick={() => navigate(i.route)}
         button
         key={i.id}
         >
          <ListItemIcon sx={{color: `rgba(255,255,255,0.7)`}}>
            {i.icon}
          </ListItemIcon>
          <ListItemText primary={i.label} />
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}

export default Navbar