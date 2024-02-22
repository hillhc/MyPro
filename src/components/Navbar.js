import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReorderIcon from '@mui/icons-material/Reorder';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#223794',
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
  },
  listItemText: {
    color: 'white',
    textDecoration: 'none',
  },
  listItemIcon: {
    color: 'white',
  },
}));

function Navbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton onClick={() => setExpand((prev) => !prev)}>
          <ReorderIcon className={classes.listItemIcon} />
        </IconButton>
        <Drawer anchor="left" open={expand} onClose={() => setExpand(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon className={classes.listItemIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" className={classes.listItemText} />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon className={classes.listItemIcon}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About Me" className={classes.listItemText} />
            </ListItem>
            <ListItem button component={Link} to="/project">
              <ListItemIcon className={classes.listItemIcon}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="My Project" className={classes.listItemText} />
            </ListItem>
          </List>
        </Drawer>
        <div className={classes.links}>
          <Link to="/" className={classes.listItemText}>
            Home
          </Link>
          <Link to="/about" className={classes.listItemText}>
            About Me
          </Link>
          <Link to="/project" className={classes.listItemText}>
            My Project
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;