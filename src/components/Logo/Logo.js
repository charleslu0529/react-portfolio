import React from 'react';
import siteLogo from '../../assets/images/KMLu.png'
import classes from './Logo.module.scss'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={siteLogo} />
    </div>
)

export default logo;