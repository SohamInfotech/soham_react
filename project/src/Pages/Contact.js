import React from 'react';
import { Box, Typography, Breadcrumbs, Grid, styled, Paper, Stack, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2.5),
    color: theme.palette.text.secondary,
}));


const Contact = () => {


    const theme = useTheme();

    //breakpoints
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            <Typography variant="h5">
                Contact
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Pages</Typography>
                <Typography color="#273246" fontSize="14px">Contact</Typography>
            </Breadcrumbs>

            <Grid container spacing={3}>
                <Grid item md={6} xs={12}  >
                    <Item>
                        <Stack spacing={3}>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <Box>
                                    <BsGeoAlt size="22px" color='#4154f1' />
                                </Box>
                                <Box>
                                    <Typography variant="h6" lineHeight="1" className='nunito-sans' color="#012970" fontWeight={700} gutterBottom>
                                        Address
                                    </Typography>
                                    <Typography variant="body2" >
                                        A108 Adam Street,New York, NY 535022
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <Box>
                                    <BsTelephone size="22px" color='#4154f1' />
                                </Box>
                                <Box>
                                    <Typography variant="h6" lineHeight="1" className='nunito-sans' color="#012970" fontWeight={700} gutterBottom>
                                        Call Us
                                    </Typography>
                                    <Typography variant="body2" >
                                        +1 5589 55488 55
                                    </Typography>
                                    <Typography variant="body2" >
                                        +1 6678 254445 41
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <Box>
                                    <BsEnvelope size="22px" color='#4154f1' />
                                </Box>
                                <Box>
                                    <Typography variant="h6" lineHeight="1" className='nunito-sans' color="#012970" fontWeight={700} gutterBottom>
                                        Email Us
                                    </Typography>
                                    <Typography variant="body2" >
                                        info@example.com
                                    </Typography>
                                    <Typography variant="body2" >
                                        contact@example.com
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction="row" alignItems="flex-start" spacing={2}>
                                <Box>
                                    <BsClock size="22px" color='#4154f1' />
                                </Box>
                                <Box>
                                    <Typography variant="h6" lineHeight="1" className='nunito-sans' color="#012970" fontWeight={700} gutterBottom>
                                        Open Hours
                                    </Typography>
                                    <Typography variant="body2" >
                                        Monday - Friday
                                    </Typography>
                                    <Typography variant="body2" >
                                        9:00AM - 05:00PM
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item md={6} xs={12} >
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField type='text' label="Your Name" variant="outlined" size='small' fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type='email' label="Your Email" variant="outlined" size='small' fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type='text' label="Subject" variant="outlined" size='small' fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    multiline
                                    rows={4}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12} className='btn-grid'>
                                <Stack direction="row" justifyContent="center" marginTop="15px" className='btn'>
                                    <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: "15px" }} size={isSm ? "medium" : "small"} className='change-btn'>Send Message</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Contact;