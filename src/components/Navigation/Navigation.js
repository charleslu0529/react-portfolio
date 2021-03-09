import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import classes from './Navigation.module.scss';
import Container from '../Container/Container';


const navigation = (props) => (
    <Container className={classes.Navigation}>
        <Logo />
        <div className={classes.NavItemContainer}>
            {/* <NavItems /> */}
        </div>
    </Container>
    
)

export default navigation;
