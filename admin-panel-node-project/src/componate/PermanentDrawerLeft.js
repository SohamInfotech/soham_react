import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const iconslist = [<SpaceDashboardIcon />, <CategoryIcon />, <ControlPointDuplicateIcon />, <HelpOutlineIcon />]
  const lo=useLocation().pathname;
  console.log(lo);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "#1976d2" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <ExitToAppIcon />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ backgroundColor: "#1976d2", color: "white" }} >
          <Typography variant="h6" noWrap component="div">
            Interview Portal
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[{name:'Dashboard',path:"/"}, {name:'Category',path:"/Category"}, {name:'Sub Category',path:"/Sub_Category"}, {name:'Q & A',path:"/Q_&_A"}].map((item, index) => (
            <ListItem key={item.name} disablePadding sx={{ width: "100%", margin: "10px 0px" }}>
              <Link to={item.path} style={{ width: "90%", margin: "auto", textDecoration: "none" }}>
                <ListItemButton sx={{
                  backgroundColor: "#1976d2", color: "white", borderRadius: "10px", '&:hover': {
                    backgroundColor: "blue"
                  }
                }}>
                  <ListItemIcon sx={{color:"white"}}>
                    {iconslist[index]}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet/>
        
      </Box>
    </Box>
  );
}
