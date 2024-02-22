import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#223794',
}));

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: 'auto',
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
}));

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
  color: 'white',
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
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIconStyled>
                <HomeIcon />
              </ListItemIconStyled>
              <ListItemTextStyled primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIconStyled>
                <InfoIcon />
              </ListItemIconStyled>
              <ListItemTextStyled primary="About Me" />
            </ListItem>
            <ListItem button component={Link} to="/project">
              <ListItemIconStyled>
                <FolderIcon />
              </ListItemIconStyled>
              <ListItemTextStyled primary="My Project" />
            </ListItem>
          </List>
        </Drawer>
        <LinksContainer>
          <Link to="/" component={ListItemTextStyled}>
            Home
          </Link>
          <Link to="/about" component={ListItemTextStyled}>
            About Me
          </Link>
          <Link to="/project" component={ListItemTextStyled}>
            My Project
          </Link>
        </LinksContainer>
      </Toolbar>
    </NavbarContainer>
  );
}

export default Navbar;