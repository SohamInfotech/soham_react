import React from 'react'
import { Box, Typography, Breadcrumbs, Grid, styled, Paper, Stack, Tabs, Tab, useTheme, useMediaQuery, Fab, TextField, Button, Checkbox, FormGroup, FormControlLabel ,FormControl ,InputLabel ,OutlinedInput ,InputAdornment ,IconButton} from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsUpload, BsTrash } from "react-icons/bs";
import {Visibility ,VisibilityOff} from '@mui/icons-material';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Profile() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //Show Password 
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <Box>
      <Typography variant="h5"  >
        Profile
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
        <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Typography color="#899bbd" fontSize="14px">Users</Typography>
        <Typography color="#273246" fontSize="14px">Profile</Typography>
      </Breadcrumbs>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Item >
            <Stack alignItems="center" padding="5px" spacing={1.5}>
              <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg' alt='user-img' width={120} height={120} style={{ borderRadius: "50%" }} />
              <Box>
                <Typography variant="h5" fontWeight={700} className='nunito-sans' color="#2c384e" >
                  Kevin Anderson
                </Typography>
                <Typography fontSize="17px" textAlign="center" fontWeight="500" lineHeight="1" >
                  Web Designer
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <a href='#a' className='social-icon'><BsTwitter size={20} /></a>
                <a href='#dff' className='social-icon'><BsFacebook size={20} /></a>
                <a href='#fg' className='social-icon'><BsInstagram size={20} /></a>
                <a href='#fgg' className='social-icon'><BsLinkedin size={20} /></a>
              </Stack>

            </Stack>
          </Item>
        </Grid>
        <Grid item md={8} xs={12}>
          <Item>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="basic tabs example">
                  <Tab label="Overview" {...a11yProps(0)} sx={{ textTransform: "capitalize", fontSize: "16px", color: '#2c384e' }} />
                  <Tab label="Edit Profile" {...a11yProps(1)} sx={{ textTransform: "capitalize", fontSize: "16px", color: '#2c384e' }} />
                  <Tab label="Settings" {...a11yProps(2)} sx={{ textTransform: "capitalize", fontSize: "16px", color: '#2c384e' }} />
                  <Tab label="Change Password" {...a11yProps(3)} sx={{ textTransform: "capitalize", fontSize: "16px", color: '#2c384e' }} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h6" className='nunito-sans' color="#012970" fontWeight={600} marginBottom="15px">
                      About
                    </Typography>
                    <Typography fontSize="14.5px" gutterBottom>
                      Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                    </Typography>

                  </Box>
                  <Box>
                    <Typography variant="h6" className='nunito-sans' color="#012970" fontWeight={600} marginBottom="15px">
                      Profile Details
                    </Typography>
                    <Grid container alignItems="center" spacing={isSm ? 1 : 0}>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Full Name
                        </Typography>

                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          Kevin Anderson
                        </Typography>

                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Company
                        </Typography>

                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          Lueilwitz, Wisoky and Leuschke
                        </Typography>

                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Job
                        </Typography>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          Web Designer
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Country
                        </Typography>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          USA
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Address
                        </Typography>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          A108 Adam Street, New York, NY 535022
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Phone
                        </Typography>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          (436) 486-3538 x29071
                        </Typography>
                      </Grid>
                      <Grid item sm={3} xs={12} >
                        <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                          Email
                        </Typography>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Typography variant="body1" marginBottom={isSm ? "5.6px" : "12px"} color="#000">
                          k.anderson@example.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={isSm ? 2 : 1}>
                  <Grid item sm={3} xs={12} >
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Profile Image
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <Stack spacing={1}>
                      <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg' alt='Profile-pic' width={120} height={120} />
                      <Box display="flex" zIndex={0}>
                        <a href='#aa'>
                          <Fab size="small" color="primary" aria-label="add" sx={{ borderRadius: "10px", height: "36px", width: "36px" }}>
                            <BsUpload size={16} />
                          </Fab>
                        </a>
                        <a href='#aaa' style={{ marginLeft: "10px" }}>
                          <Fab size="small" color="error" aria-label="add" sx={{ borderRadius: "10px", height: "36px", width: "36px" }}>
                            <BsTrash size={16} />
                          </Fab>
                        </a>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Full Name
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' id="fullWidth" size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      About
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth id="outlined-multiline-flexible" type='text' multiline maxRows={4} size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Company
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' id="fullWidth" size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Job
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' id="fullWidth" size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Country
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' id="fullWidth" size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Address
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' multiline maxRows={2} size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Phone
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' size="small" inputProps={{ maxLength: 10, pattern: "[0-9]*" }} />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Email
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='email' size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Twitter Profile
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Facebook Profile
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Instagram Profile
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' size="small" />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Linkedin Profile
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <TextField fullWidth type='text' size="small" />
                  </Grid>
                  <Grid item xs={12} className='btn-grid'>
                    <Stack direction="row" justifyContent="center" marginTop="15px" className='btn'>
                      <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: "15px" }} size={isSm ? "medium" : "small"} className='change-btn'>Save Changes</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Grid container spacing={2} >
                  <Grid item sm={3} xs={12}>
                    <Typography className='nunito-sans' fontWeight={700} color="rgba(1, 41, 112, 0.6)">
                      Email Notifications
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                    <FormGroup className='form-group'>
                      <FormControlLabel className='form-lable' control={<Checkbox defaultChecked />} label="Changes made to your account" sx={{ color: '#000', marginX: "0px" }} />
                      <FormControlLabel className='form-lable' control={<Checkbox defaultChecked />} label="Information on new products and services" sx={{ color: '#000', marginX: "0px" }} />
                      <FormControlLabel className='form-lable' control={<Checkbox />} label="Marketing and promo offers" sx={{ color: '#000', marginX: "0px" }} />
                      <FormControlLabel className='form-lable' disabled control={<Checkbox defaultChecked />} label="Security Categorys" sx={{ marginX: "0px" }} />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} className='btn-grid'>
                    <Stack direction="row" justifyContent="center" marginTop="15px" className='btn'>
                      <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: "15px" }} size={isSm ? "medium" : "small"}  className='change-btn'>Save Changes</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>

                <Grid container alignItems="center" spacing={1}>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                      Current Password
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <FormControl sx={{ m: 1}} variant="outlined"  fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput  
                      placeholder='Current Password'                  
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            > 
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                    New Password
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <FormControl sx={{ m: 1}} variant="outlined"  fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput       
                      placeholder='New Genrated Password'                 
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            > 
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <Typography variant="subtitle1" className='nunito-sans' marginBottom={isSm ? "5.6px" : "0px"} color="rgba(1, 41, 112, 0.6)" fontWeight={700}>
                    Re-enter New Password
                    </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12} marginBottom={isSm ? "0px" : "10px"}>
                    <FormControl sx={{ m: 1}} variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput    
                        
                      placeholder='Re-enter New Password'                 
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            > 
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className='btn-grid'>
                    <Stack direction="row" justifyContent="center" marginTop={isSm ? "18px" : "5px"} className='btn'>
                      <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: "15px" }} size={isSm ? "medium" : "small"} className='change-btn'>Change Password</Button>
                    </Stack>
                  </Grid>
                </Grid>

              </CustomTabPanel>
            </Box>
          </Item>
        </Grid>

      </Grid>




    </Box>
  )
}

export default Profile;