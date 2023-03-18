import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import plane from '../images/plane.gif'
import logo from '../images/logo.png'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

export default function Home() {
    return (
        <div className='home'>
            <Grid style={{ height: '70%', width: '100%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center',alignItems:'center' }} alignItems='center' container >

                <Grid md={5} xs={12}>
                    <img src={plane} alt='loading...' style={{ width: '100%', height: '100%' }} />
                </Grid>

                <Grid md={5} xs={12} >
                    <Typography fontWeight={600} variant="h1" component="div" sx={{ flexGrow: 1 }}>
                        Hey, I'm <Typography fontWeight={100} component='h1' variant='h1' color={'secondary'} style={{
                            fontFamily: ['Courgette', 'cursive']
                        }}>Sachin</Typography>
                    </Typography>
                    <Typography variant='subtitle1' component='div' >
                        I'm a Computer Engineering student with a passion for Web and Software Development.
                    </Typography>

                    <Button style={{color:'#000', paddingLeft:'0'}} varient='text'>About Me <NavigateNextRoundedIcon /></Button>
                </Grid>


            </Grid>
        </div>
    )
}
