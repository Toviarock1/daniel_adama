import React from 'react'
//react player
import ReactPlayer from 'react-player'
//reactstrap
import { Container } from 'reactstrap'
//css modules
import classes from './Demo.module.css'

const Demo = (props) => {
    return (
        <div className={classes.Demo}>
            <Container className={classes.Container}>
                <ReactPlayer url={props.video} width="100%" height="100%" controls={true} />
            </Container>
        </div>
    )
}

export default Demo
