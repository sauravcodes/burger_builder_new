import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return (
        <React.Fragment>
            {props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null}
        </React.Fragment>
    );
};

export default Backdrop;