import React from 'react'
//react player
import ReactPlayer from 'react-player'
//reactstrap
import { Container } from 'reactstrap'
//video
import video from './../../assets/video/3. Arrow Functions.mp4';
//css modules
import classes from './Demo.module.css'

const Demo = () => {
    return (
        <div className={classes.Demo}>
            <Container className={classes.Container}>
                <ReactPlayer url={video} width="100%" height="100%" controls={true} />
            </Container>
        </div>
    )
}

export default Demo
