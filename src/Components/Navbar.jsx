import { AppBar, Box, Button, Grid, Hidden, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { lightGreen } from '@mui/material/colors';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import logo from '../images/logo.png';

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" elevation={0}>
                        <Toolbar >
                            <Grid container spacing={1} display="flex" alignItems="center">
                                <Grid item  md={6} xs={10} justifySelf="start">
                                    <img src={logo} alt='sachin' style={{
                                        width:80, height:20
                                    }}/>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item md={1}>
                                        <Typography fontFamily={'Roboto'} variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
                                            Home
                                        </Typography>
                                    </Grid>

                                    <Grid item md={1}>
                                        <Typography variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
                                            About
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <Typography variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
                                            Skills
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <Typography variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
                                            Projects
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <Typography variant="subtitle" component="div" sx={{ flexGrow: 1 }}>
                                            Education
                                        </Typography>
                                    </Grid>
                                
                                <Grid item md={1} >
                                    <Button varient="contained" style={{ backgroundColor: "green" }}>Contact</Button>
                                </Grid>
                                </Hidden>
                                <Hidden only={['md','lg']}>
                                <Grid item xs={2}>
                                    <SwipeableTemporaryDrawer />
                                </Grid>
                                </Hidden>
                                
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div >
        </>
    )
}
