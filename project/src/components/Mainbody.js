import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from '@mui/material/styles';



import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


import Stack from '@mui/material/Stack';


import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { BsMenuButtonWide, BsJournalText, BsReverseLayoutTextWindowReverse, BsBarChart, BsGem, BsPerson, BsQuestionCircle, BsEnvelope, BsCardList, BsBoxArrowInRight, BsDashCircle, BsGrid, BsExclamationCircle, BsXCircle } from "react-icons/bs";

import CircleIcon from '@mui/icons-material/Circle';


import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Hidden from '@mui/material/Hidden';

//pages
import Dashboard from './Dashboard';
import CategoryPage from '../Pages/Category';
import AccordionPage from '../Pages/Accordion';
import Profile from '../Pages/Profile';
import Contact from '../Pages/Contact';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { useHistory } from "react-router-dom";


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Mainbody = () => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  // console.log("history", history)

  const key = window.localStorage.getItem("key")

  if (!key) {
    history.push("/Login");
  }
  const handleDrawer = () => {
    setOpen(!open);
  }


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      // onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          // overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={(event) => {
        event.stopPropagation();
        history.push("/user/profile");
        handleMenuClose();
      }} >
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HelpOutlineIcon fontSize="small" />
        </ListItemIcon>
        Need Help?
      </MenuItem>
      <MenuItem onClick={() => {
        handleMenuClose();
        window.localStorage.removeItem("kye");
        
      }}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMessageNotifyClick}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MessageOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleNotifyClick}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fff',
      },
    },
  });

  const [notifyMenu, setNotifyMenu] = React.useState(null);
  const openNotify = Boolean(notifyMenu);


  function handleNotifyClick(event) {
    setNotifyMenu(event.currentTarget);
  }

  // const handleNotifyClick = (event) => {
  //   setNotifyMenu(event.currentTarget);
  // };

  const handleNotifyClose = () => {
    setNotifyMenu(null);
    // handleNotificationCloses();
  };
  // const handleNotificationCloses = () => {
  //   setNotifyMenu(null);

  // }


  const notificationMenu = (

    <Menu
      id="basic-menu"
      anchorEl={notifyMenu}
      open={openNotify}
      onClose={handleNotifyClose}
    // sx={{width : "350px"}}
    >
      <MenuItem disableRipple sx={{ pointerEvents: "none" }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" gutterBottom >
            You have 2 new notifications
          </Typography>
          <Button variant="contained" size="small" sx={{ pointerEvents: "auto", borderRadius: "16px", fontSize: "12px", textTransform: "capitalize" }}>View all</Button>
        </Stack>
      </MenuItem>
      <Divider component="li" />
      <MenuItem onClick={handleNotifyClose}>
        <List disablePadding>
          <ListItem alignItems="center" disablePadding>
            <ListItemIcon sx={{ minWidth: "42px!important" }}>
              <BsExclamationCircle size={23} />
            </ListItemIcon>
            <Stack>
              <ListItemText
                primary="Lorem Ipsum"
                secondary="Quae dolorem earum veritatis oditseno"
              />
              <Typography variant="caption" display="block" >30 min.ago</Typography>

            </Stack>
          </ListItem>
        </List>
      </MenuItem>
      <Divider component="li" />
      <MenuItem onClick={handleNotifyClose} >
        <List disablePadding>
          <ListItem alignItems="center" disablePadding>

            <ListItemIcon sx={{ minWidth: "42px!important" }}>
              <BsXCircle size={23} />
            </ListItemIcon>
            <Stack>
              <ListItemText
                primary="Atque rerum nesciunt"
                secondary="Quae dolorem earum veritatis oditseno"
              />
              <Typography variant="caption" display="block" >1 hr.ago</Typography>

            </Stack>
          </ListItem>
        </List>
      </MenuItem>
    </Menu>

  )


  // messages notifications

  const [messageNotify, setMessageNotify] = React.useState(null);
  const openMessageNotify = Boolean(messageNotify);


  function handleMessageNotifyClick(event) {
    setMessageNotify(event.currentTarget);
  }
  // const handleMessageNotifyClick = (event) => {
  //   setMessageNotify(event.currentTarget);
  // }

  const handleMessageNotifyClose = () => {
    setMessageNotify(null);
  }

  const messageNotificationMenu = (
    <Menu
      id="basic-menu"
      anchorEl={messageNotify}
      open={openMessageNotify}
      onClose={handleMessageNotifyClose}
      sx={{ width: "350px" }}
    >
      <MenuItem disableRipple sx={{ pointerEvents: "none" }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" gutterBottom >
            You have 2 new Messages
          </Typography>
          <Button variant="contained" size="small" sx={{ pointerEvents: "auto", borderRadius: "16px", fontSize: "12px", textTransform: "capitalize" }}>View all</Button>
        </Stack>
      </MenuItem>
      <Divider component="li" />
      <MenuItem onClick={handleMessageNotifyClose}  >
        <List disablePadding  >
          <ListItem alignItems="flex-start" disablePadding>
            <ListItemAvatar sx={{ marginTop: 0 }}>
              <Avatar alt="Maria Hudson" src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/messages-1.jpg" />
            </ListItemAvatar>
            <Stack>
              <ListItemText
                primary="Maria Hudson"
                secondary={
                  <Typography variant="body2" color="textSecondary" component="span" sx={{ whiteSpace: 'pre-line' }}>
                    Velit asperiores et ducimus soluta repudiandae labore officia est ut...
                  </Typography>
                }
              />
              <Typography variant="caption" display="block" >4 hrs. ago</Typography>

            </Stack>
          </ListItem>
        </List>
      </MenuItem>
      <Divider component="li" />
      <MenuItem onClick={handleMessageNotifyClose}  >
        <List disablePadding  >
          <ListItem alignItems="flex-start" disablePadding>
            <ListItemAvatar sx={{ marginTop: 0 }}>
              <Avatar alt="Anna Nelson" src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/messages-2.jpg" />
            </ListItemAvatar>
            <Stack>
              <ListItemText
                primary="Anna Nelson"
                secondary={
                  <Typography variant="body2" color="textSecondary" component="span" sx={{ whiteSpace: 'pre-line' }}>
                    Velit asperiores et ducimus soluta repudiandae labore officia est ut...
                  </Typography>
                }
              />
              <Typography variant="caption" display="block" >6 hrs. ago</Typography>

            </Stack>
          </ListItem>
        </List>
      </MenuItem>
    </Menu>


  )



  // Dropdown Pages 
  const Components = [
    {
      path: "/component/Category",
      page: "catagory"
    },
    {
      path: "/component/accordion",
      page: "Accordion"
    },
  ];
  // ["Badges", "Breadcrumbs", "Buttons", "Cards", "Carousel", "List group", "Modal", "Tabs", "Pagination", "Progress", "Spinners", "Tooltips"];
  const Forms = ["Form Elements", "Form Layouts", "Form Editors", "Form Validation"];
  const Tables = ["General Tables", "Data Tables"];
  const Charts = ["Chart.js", "ApexCharts", "ECharts"];
  const Icons = ["Bootstrap Icons", "Remix Icons", "Boxions"]

  //Pages 

  const Pages = [
    {
      page: "Profile",
      icon: <BsPerson />,
      path: "/user/profile"
    },
    {
      page: "F.A.Q",
      icon: <BsQuestionCircle />,
      path: ""
    },
    {
      page: "Contact",
      icon: <BsEnvelope />,
      path: "/page/contact"
    },
    {
      page: "Register",
      icon: <BsCardList />,
      path: "/register"
    },
    {
      page: "Login",
      icon: <BsBoxArrowInRight />,
      path: "/login"
    },
    {
      page: "Error 404",
      icon: <BsDashCircle />,
      path: ""
    }
  ]


  // Dropdown manage state object 
  const DropdownExpand = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  }

  // Dropdown Expand State 
  const [expand, setExpand] = React.useState(DropdownExpand);

  // use for screen breakpoint 
  // const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>


      <Box sx={{ flexGrow: 1, position: "sticky", top: 0 }} zIndex={1030}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static"  >
            <Toolbar >

              <Stack spacing={1} direction="row" alignItems="center" sx={{ width: "20%" }}>
                <img
                  src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                  alt="NiceAdminlogo"
                  width="25px"
                  height="25px"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"

                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: "24px",
                    color: "#012970",
                    textDecoration: 'none',
                  }}
                >
                  NiceAdmin
                </Typography>

              </Stack>


              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mx: { md: "15px", xs: "5px" } }}
                onClick={handleDrawer}

              // sx={{ mr: 2, ...(open && { display: 'none' }) }}

              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={handleNotifyClick}
                >
                  <Badge badgeContent={17} className='bg-primary'>

                    <NotificationsOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleMessageNotifyClick}>
                  <Badge badgeContent={4} color="success">
                    <MessageOutlinedIcon />
                  </Badge>
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  disableRipple
                >
                  <Tooltip title="Account settings">
                    <Stack direction="row">
                      <Avatar alt="Profile" src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"></Avatar>
                      <Button
                        size='small'
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        disableRipple
                        sx={{ textTransform: 'capitalize', fontSize: "16px", paddingRight: "0px" }}
                        className='profileBTN'
                      >
                        K. Anderson
                      </Button>

                    </Stack>
                  </Tooltip>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {/* {renderMobileMenu}
          {renderMenu}
          {messageNotificationMenu}
          {notificationMenu} */}

        </ThemeProvider>
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant={isLG ? "persistent" : "temporary"}
          anchor="left"
          open={open}
        >

          <Hidden lgUp>
            <DrawerHeader  >
              <Stack spacing={1} direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                <img
                  src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                  alt="NiceAdminlogo"
                  width="25px"
                  height="25px"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"

                  sx={{
                    mr: 2,
                    // display: 'flex' ,
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: "24px",
                    color: "#012970",
                    textDecoration: 'none',
                  }}
                >
                  NiceAdmin
                </Typography>

              </Stack>


              <IconButton onClick={handleDrawer}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

          </Hidden>

          <Divider />

          <Box sx={{ padding: "20px 0px 70px" }}>
            <List >
              <ListItem sx={{ padding: "0px 20px" }} onClick={() => { history.push("/") }}>
                <ListItemButton >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsGrid />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>

              </ListItem>

              <ListItem sx={{ padding: "0px 20px" }}>
                <ListItemButton onClick={() => setExpand({ ...expand, 1: !expand[1] })}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsMenuButtonWide />
                  </ListItemIcon>
                  <ListItemText primary="Components" />
                  {expand[1] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={expand[1]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  {Components.map((component) => (
                    <ListItem key={component.page} disablePadding onClick={() => { history.push(component.path) }}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ minWidth: "20px", marginLeft: "30px" }}>
                          <CircleIcon sx={{ fontSize: "9px" }} />
                        </ListItemIcon>
                        <ListItemText primary={component.page} />
                      </ListItemButton>
                    </ListItem>

                  ))}

                </List>
              </Collapse>

              <ListItem sx={{ padding: "0px 20px" }}>
                <ListItemButton onClick={() => setExpand({ ...expand, 2: !expand[2] })}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsJournalText />
                  </ListItemIcon>
                  <ListItemText primary="Forms" />
                  {expand[2] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={expand[2]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  {Forms.map((formEle) => (
                    <ListItem key={formEle} disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ minWidth: "20px", marginLeft: "30px" }}>
                          <CircleIcon sx={{ fontSize: "9px" }} />
                        </ListItemIcon>
                        <ListItemText primary={formEle} />
                      </ListItemButton>
                    </ListItem>

                  ))}

                </List>
              </Collapse>

              <ListItem sx={{ padding: "0px 20px" }}>
                <ListItemButton onClick={() => setExpand({ ...expand, 3: !expand[3] })}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsReverseLayoutTextWindowReverse />
                  </ListItemIcon>
                  <ListItemText primary="Tables" />
                  {expand[3] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={expand[3]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  {Tables.map((tableEle) => (
                    <ListItem key={tableEle} disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ minWidth: "20px", marginLeft: "30px" }}>
                          <CircleIcon sx={{ fontSize: "9px" }} />
                        </ListItemIcon>
                        <ListItemText primary={tableEle} />
                      </ListItemButton>
                    </ListItem>

                  ))}

                </List>
              </Collapse>

              <ListItem sx={{ padding: "0px 20px" }}>
                {/* <ListItemButton onClick={handleExpand}> */}
                <ListItemButton onClick={() => setExpand({ ...expand, 4: !expand[4] })}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsBarChart />
                  </ListItemIcon>
                  <ListItemText primary="Charts" />
                  {expand[4] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={expand[4]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  {Charts.map((chartEle) => (
                    <ListItem key={chartEle} disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ minWidth: "20px", marginLeft: "30px" }}>
                          <CircleIcon sx={{ fontSize: "9px" }} />
                        </ListItemIcon>
                        <ListItemText primary={chartEle} />
                      </ListItemButton>
                    </ListItem>

                  ))}

                </List>
              </Collapse>

              <ListItem sx={{ padding: "0px 20px" }}>
                <ListItemButton onClick={() => setExpand({ ...expand, 5: !expand[5] })}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <BsGem />
                  </ListItemIcon>
                  <ListItemText primary="Icons" />
                  {expand[5] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={expand[5]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  {Icons.map((iconEle) => (
                    <ListItem key={iconEle} disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon sx={{ minWidth: "20px", marginLeft: "30px" }}>
                          <CircleIcon sx={{ fontSize: "9px" }} />
                        </ListItemIcon>
                        <ListItemText primary={iconEle} />
                      </ListItemButton>
                    </ListItem>

                  ))}

                </List>
              </Collapse>

            </List>

            <List subheader={
              <ListSubheader component="div">
                PAGES
              </ListSubheader>
            }>
              {Pages.map((PageEle) => (
                <ListItem sx={{ padding: "0px 20px" }}>
                  <ListItemButton onClick={() => { history.push(PageEle.path) }}>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      {PageEle.icon}
                    </ListItemIcon>
                    <ListItemText primary={PageEle.page} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>


        </Drawer>
        <Main open={open} sx={{ maxWidth: "100%", backgroundColor: "#f6f9ff" }}>

          <Switch>
            <Route exact path="/" >
              <Dashboard />
            </Route>
            <Route path="/component/Category">
              <CategoryPage />
            </Route>
            <Route path="/component/accordion">
              <AccordionPage />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/page/contact">
              <Contact />
            </Route>
          </Switch>

        </Main>
        {renderMobileMenu}
        {renderMenu}
        {messageNotificationMenu}
        {notificationMenu}


      </Box>

    </>
  )
}

export default Mainbody;