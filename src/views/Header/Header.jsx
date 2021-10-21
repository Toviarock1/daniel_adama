import React from 'react';
//react-router-hash-link
import { HashLink as NavLink } from 'react-router-hash-link';
//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
//image
import Logo from './../../assets/images/robot-removebg-preview.png';
//CV
import CV from './../../assets/CV/Daniel Adama resume original.pdf';
//css modules
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Navbar className={props.navbar ? classes.NavbarScroll : classes.Navbar} color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={Logo} className={classes.Logo} alt="company logo" />
        </NavbarBrand>
        <NavbarToggler onClick={props.toggle} className={classes.NavbarBtn} />
        <Collapse isOpen={props.isOpen} navbar className={classes.Collapse}>
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
