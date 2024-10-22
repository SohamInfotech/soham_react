import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { LineChart } from '@mui/x-charts/LineChart';
import { Breadcrumbs} from '@mui/material';
import { Link} from "react-router-dom";

import { BsThreeDots, BsCart, BsCurrencyDollar, BsPeople } from "react-icons/bs";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 150,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const steps = [
    {
        // label: 'Select campaign settings',
        time: "32 min",
        description: `Quia quae rerum explicabo officiis beatae `,
    },
    {
        // label: 'Create an ad group',
        time: "56 min",
        description:
            'Voluptatem blanditiis blanditiis eveniet',
    },
    {
        // label: 'Create an ad',
        time: "2 hrs",
        description: `Voluptates corrupti molestias voluptatem`,
    },
];

const Dashboard = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // Stepper 

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                Dashboard
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link  className="Breadcrumb"  style={{color : "#899bbd",fontSize : "14px",textDecoration: "none"}}  to="/dashboard">
                    Home
                </Link>
                <Typography color="#273246"  fontSize="14px">Dashboard</Typography>
            </Breadcrumbs>

            <Grid container spacing={3} >

                <Grid item md={8} xs={12}>
                    <Grid container columnSpacing={3} rowSpacing={4} >
                        <Grid item sm={6} xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            Sales
                                        </Typography>
                                        <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem />
                                        <Typography variant="subtitle1" color="#ababab" gutterBottom>
                                            Today
                                        </Typography>

                                    </Box>
                                    <Box>
                                        <IconButton onClick={handleClick} size='small'>
                                            <BsThreeDots />
                                        </IconButton>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose} disableRipple disabled>
                                                FILTER
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                Today
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Year
                                            </MenuItem>
                                        </StyledMenu>

                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#f6f9ff" borderRadius="50%" lineHeight="0">
                                        <BsCart color='#4154f1' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            145
                                        </Typography>
                                        <Typography variant="overline" sx={{ textTransform: "lowercase", fontSize: "15px" }} display="flex" alignItems="center" marginBottom="0" gap={1} gutterBottom>
                                            <Typography color="rgb(25,135,84)" sx={{ fontWeight: 600 }}> 12% </Typography>
                                            increase
                                        </Typography>
                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>
                        <Grid item sm={6} xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            Revenue
                                        </Typography>
                                        <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem />
                                        <Typography variant="subtitle1" color="#ababab" gutterBottom>
                                            This Month
                                        </Typography>

                                    </Box>
                                    <Box>
                                        <IconButton onClick={handleClick} size='small'>
                                            <BsThreeDots />
                                        </IconButton>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose} disableRipple disabled>
                                                FILTER
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                Today
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Year
                                            </MenuItem>
                                        </StyledMenu>

                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#e0f8e9" borderRadius="50%" lineHeight="0">
                                        <BsCurrencyDollar color='#2eca6a' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            $3,264
                                        </Typography>
                                        <Typography variant="overline" sx={{ textTransform: "lowercase", fontSize: "15px" }} display="flex" alignItems="center" marginBottom="0" gap={1} gutterBottom>
                                            <Typography color="rgb(25,135,84)" sx={{ fontWeight: 600 }}> 8% </Typography>
                                            increase
                                        </Typography>
                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>
                        <Grid item xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            Customers
                                        </Typography>
                                        <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem />
                                        <Typography variant="subtitle1" color="#ababab" gutterBottom>
                                            This Year
                                        </Typography>

                                    </Box>
                                    <Box>
                                        <IconButton onClick={handleClick} size='small'>
                                            <BsThreeDots />
                                        </IconButton>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose} disableRipple disabled>
                                                FILTER
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                Today
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Year
                                            </MenuItem>
                                        </StyledMenu>

                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#ffecdf" borderRadius="50%" lineHeight="0">
                                        <BsPeople color='#ff771d' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            1244
                                        </Typography>
                                        <Typography variant="overline" sx={{ textTransform: "lowercase", fontSize: "14px" }} display="flex" alignItems="center" marginBottom="0" gap={1} gutterBottom>
                                            <Typography color="rgb(220,53,69)" sx={{ fontWeight: 600 }}> 12% </Typography>
                                            decrease
                                        </Typography>
                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start"  >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                        Reports
                                        </Typography>
                                        <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem />
                                        <Typography variant="subtitle1" color="#ababab" gutterBottom>
                                        Today
                                        </Typography>

                                    </Box>
                                    <Box>
                                        <IconButton onClick={handleClick} size='small'>
                                            <BsThreeDots />
                                        </IconButton>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'demo-customized-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose} disableRipple disabled>
                                                FILTER
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                Today
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose} disableRipple>
                                                This Year
                                            </MenuItem>
                                        </StyledMenu>

                                    </Box>
                                </Stack>
                                <Stack direction="row">
                                <LineChart
                                    xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                                    series={[
                                        {
                                            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                                            showMark: ({ index }) => index % 2 === 0,
                                        },
                                    ]}
                                    width="500"
                                    height="300"
                                />

                                </Stack>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Grid item xs={12} >
                        <Item sx={{ padding: "20px" }} >
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                <Box display="flex" alignItems="center" >
                                    <Typography variant="h6" gutterBottom color="#000">
                                        Recent Activity
                                    </Typography>
                                    <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem />
                                    <Typography variant="subtitle1" color="#ababab" gutterBottom>
                                        Today
                                    </Typography>

                                </Box>
                                <Box>
                                    <IconButton onClick={handleClick} size='small'>
                                        <BsThreeDots />
                                    </IconButton>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} disableRipple disabled>
                                            FILTER
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            Today
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            This Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            This Year
                                        </MenuItem>
                                    </StyledMenu>

                                </Box>
                            </Stack>
                            <Box sx={{ maxWidth: 400 }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Typography width="20%" variant="subtitle2">{step.time}</Typography>
                                                <Box>
                                                    <StepLabel
                                                    // optional={
                                                    //     index === 2 ? (
                                                    //         <Typography variant="caption">Last step</Typography>
                                                    //     ) : null
                                                    // }
                                                    >
                                                        <Typography>{step.description}</Typography>
                                                    </StepLabel>
                                                    <StepContent>
                                                        <Box sx={{ mb: 2 }}>
                                                            <div>
                                                                <Button
                                                                    variant="contained"
                                                                    onClick={handleNext}
                                                                    sx={{ mt: 1, mr: 1 }}
                                                                >
                                                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                                </Button>
                                                                <Button
                                                                    disabled={index === 0}
                                                                    onClick={handleBack}
                                                                    sx={{ mt: 1, mr: 1 }}
                                                                >
                                                                    Back
                                                                </Button>
                                                            </div>
                                                        </Box>
                                                    </StepContent>
                                                </Box>
                                            </Stack>
                                        </Step>

                                    ))}
                                </Stepper>
                                {activeStep === steps.length && (
                                    <Paper square elevation={0} sx={{ p: 3 }}>
                                        <Typography>All steps completed - you&apos;re finished</Typography>
                                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                            Reset
                                        </Button>
                                    </Paper>
                                )}
                            </Box>

                        </Item>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;