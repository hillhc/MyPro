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
  backgroundColor: '#white',
  width: '200px',
}));

const BlackListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'black',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

function Navbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <NavbarContainer position="static">
      <ToolbarStyled>
        <IconButton onClick={() => setExpand((prev) => !prev)}>
          <ReorderIcon sx={{ color: 'white' }} />
        </IconButton>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemTextStyled primary="Home" />
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItemTextStyled primary="About Me" />
          </Link>
          <Link to="/project" style={{ textDecoration: 'none' }}>
            <ListItemTextStyled primary="My Project" />
          </Link>
        </div>
      </ToolbarStyled>
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
    </NavbarContainer>
  );
}

export default Navbar;