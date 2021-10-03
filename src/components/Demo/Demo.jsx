import React from 'react'
import { Container } from 'reactstrap'
import classes from './Demo.module.css'

const Demo = () => {
    return (
        <div className={classes.Demo}>
            <Container>
                <video>
                    <source></source>
                </video>
            </Container>
        </div>
    )
}

export default Demo
