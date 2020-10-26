import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.scss'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem>Nav A</NavItem>
        <NavItem>Nav B</NavItem>
        <NavItem>Nav C</NavItem>
    </ul>
)

export default navItems;