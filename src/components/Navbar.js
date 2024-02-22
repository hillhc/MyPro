import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#white',
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
}));

const SideListContainer = styled(List)(({ theme }) => ({
  backgroundColor: '#223794',
  width: '200px',
}));

const BlackListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'black',
}));

function Navbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <NavbarContainer position="static">
      <Toolbar>
        <IconButton onClick={() => setExpand((prev) => !prev)}>
          <ReorderIcon sx={{ color: 'white' }} />
        </IconButton>
        <Drawer anchor="left" open={expand} onClose={() => setExpand(false)}>
          <SideListContainer>
            <ListItem button component={Link} to="/">
              <BlackListItemIcon>
                <HomeIcon />
              </BlackListItemIcon>
              <ListItemTextStyled primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <BlackListItemIcon>
                <InfoIcon />
              </BlackListItemIcon>
              <ListItemTextStyled primary="About Me" />
            </ListItem>
            <ListItem button component={Link} to="/project">
              <BlackListItemIcon>
                <FolderIcon />
              </BlackListItemIcon>
              <ListItemTextStyled primary="My Project" />
            </ListItem>
          </SideListContainer>
        </Drawer>
      </Toolbar>
    </NavbarContainer>
  );
}

export default Navbar;