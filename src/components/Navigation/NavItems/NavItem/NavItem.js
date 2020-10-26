import React from 'react';
import classes from './NavItem.module.scss';


const navItem = (props) => (
    <li className={classes.NavItem}>
        <a>{props.children}</a>
    </li>
)

export default navItem;