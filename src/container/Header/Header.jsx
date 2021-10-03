import React, { useState, useEffect } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Logo from './../../assets/images/robot-removebg-preview.png';
import CV from './../../assets/CV/Daniel Adama resume original.pdf';
import classes from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, SetNavbar] = useState(false);
 
  const toggle = () => setIsOpen(!isOpen);

  const changeBackgroundHandler = () => {
    if (window.scrollY >= 88) {
      SetNavbar(true);
    } else{
      SetNavbar(false);
    }
  }

  useEffect(() => {
    changeBackgroundHandler()
    window.addEventListener('scroll', changeBackgroundHandler)
  })

  return (
    <div className={classes.Header}>
      <Navbar  className={navbar ? classes.NavbarScroll : classes.Navbar} color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">
            <img src={Logo} className={classes.Logo} alt="company logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={classes.NavbarBtn}/>
        <Collapse isOpen={isOpen} navbar className={classes.Collapse}>
          <Nav className="mx-auto" navbar>
            <NavItem className={classes.NavItem}>
              <NavLink to="/#" className={classes.NavItemLink}>Home</NavLink>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <NavLink to="/#about" className={classes.NavItemLink}>About</NavLink>
            </NavItem >
            <NavItem className={classes.NavItem}>
              <NavLink to="/#portfolio" className={classes.NavItemLink}>Portfolio</NavLink>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <NavLink to="/#contact" className={classes.NavItemLink}>Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className={classes.NavItem}>
              <a download href={CV} className={"btn btn-primary PrimaryBtn"}>Download CV</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
