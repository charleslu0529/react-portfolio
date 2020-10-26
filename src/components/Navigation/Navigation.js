import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import classes from './Navigation.module.scss';

const navigation = (props) => (
    <div className={classes.Navigation}>
        <Logo />
        <div className={classes.NavItemContainer}>
            <NavItems />
        </div>
    </div>
)

export default navigation;