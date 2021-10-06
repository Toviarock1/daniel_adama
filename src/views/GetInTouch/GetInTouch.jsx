import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './GetInTouch.module.css';

const GetInTouch = () => {
    return (
        <div className={classes.GetInTouch}>
            <p>I'm extremely passionate about software development in all it's forms</p>
            <Link to="/#contact" className={classes.GetInTouchBtn} color="primary">GET IN TOUCH</Link>
        </div>
    )
}

export default GetInTouch
