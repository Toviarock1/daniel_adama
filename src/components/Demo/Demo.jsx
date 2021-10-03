import React from 'react'
import ReactPlayer from 'react-player'
import { Container } from 'reactstrap'
import classes from './Demo.module.css'
import video from './../../assets/video/3. Arrow Functions.mp4';

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
