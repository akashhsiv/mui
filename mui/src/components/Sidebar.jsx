import React from 'react'
import {Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText} from "@mui/material"
import { Home, Article, Group, Storefront, Person, Settings, Portrait, NightsStay} from '@mui/icons-material';
import Switch from '@mui/material/Switch';

const Sidebar =({mode,setMode}) => {
    return(
      <Box
        flex={1} 
        p={2}
        sx={{display:{xs: "none", sm:"block"} }}
        >
          <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
            <ListItemIcon>
                <Article/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Group">
            <ListItemIcon>
                <Group/>
            </ListItemIcon>
            <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Marketplace">
            <ListItemIcon>
                <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
            <ListItemIcon>
                <Person/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
            <ListItemIcon>
                <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Profile">
            <ListItemIcon>
                <Portrait/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
            <ListItemIcon>
                <NightsStay/>
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode ==="light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
        </Box>
    )
}

export default Sidebar