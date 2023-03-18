import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ListItemText from '@mui/material/ListItemText';
import logo from '../images/logo.png';



import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>

          <img src={logo} alt='sachin' style={{
            width: 80, height: 20
          }} />
        </ListItem>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'About'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Skills'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalActivityRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={'Skills'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'Education'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SchoolRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={'Education'} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItemButton>
          <Button size='large' varient="contained" style={{ backgroundColor: "green" }}>Contact</Button>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>

      <Button color='ter' onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>

    </div>
  );
}