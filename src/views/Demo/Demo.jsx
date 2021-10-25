import React from 'react'
//react player
import ReactPlayer from 'react-player'
import { withRouter } from 'react-router'
//reactstrap
import { Button, Container } from 'reactstrap'
//css modules
import classes from './Demo.module.css'

const Demo = (props) => {
    return (
        <div className={classes.Demo}>
            <Container className={classes.Container}>
                <ReactPlayer url={props.video} width="100%" height="100%" controls={true} />
                <Button color="primary" className="Btn" onClick={() => props.history.goBack()}>Back</Button>
            </Container>
        </div>
    )
};

export default withRouter(Demo);
