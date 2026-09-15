import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const desktop = useMediaQuery('(min-width: 640px)');
  useEffect(() => { setOpen(false); }, [location, desktop]);
  const navigation = [['/', 'Home'], ['/about', 'About'], ['/project', 'Projects']].map(([path, label]) => (
    <NavLink key={path} to={path} end onClick={() => setOpen(false)}>{label}</NavLink>
  ));
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/">Hill Choy<span></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation}</nav>
        <IconButton className="mobile-menu-button" aria-label="Open navigation" aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} onClick={() => setOpen(true)}><MenuIcon /></IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(300px, 85vw)', backgroundColor: '#f8f9f5' } }}>
          <div className="mobile-nav-header"><span>Navigation</span><IconButton aria-label="Close navigation" onClick={() => setOpen(false)}><CloseIcon /></IconButton></div>
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation}</nav>
        </Drawer>
      </div>
    </header>
  );
}
export default Navbar;
