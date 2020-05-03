import React from 'react';
import BurgerLogo from '../../../assets/burger.png'
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img alt='hello' src={BurgerLogo} />
        </div>
    );
};

export default Logo;