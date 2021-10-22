import React from 'react'
//css modules
import classes from './Footer.module.css'

const footer = () => {
    console.log('Footer Rendering')
    return (
        <footer className={classes.Footer}>
            &copy;2021 Daniel
        </footer>
    )
}

export default React.memo(footer);
