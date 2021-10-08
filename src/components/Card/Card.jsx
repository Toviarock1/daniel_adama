import React from 'react';
//reactrap
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//component
import CardBadge from './CardBadge/CardBadge'
//css modules
import classes from './Card.module.css';
import { withRouter } from 'react-router';

const card = (props) => {
    let builtWithInitialValue = props.builtWith;
    let cardBadgeContent;

    if (builtWithInitialValue) {
        cardBadgeContent = builtWithInitialValue.split(' ');
        console.log(cardBadgeContent)
    }

    return (
        <>
            <Card className={classes.CardContent}>
                <CardImg className={classes.CardImg} top width="100%" src={props.projectImg} alt={props.alt} />
                <CardBody>
                    <CardTitle tag="h5" className={classes.CardTitle}>{props.title}</CardTitle>
                    <CardText className={classes.CardText}>{props.text}</CardText>
                    <div style={{ margin: '20px 2px' }}>
                        {
                            builtWithInitialValue ? cardBadgeContent.map(name => {
                                return <CardBadge key={name} name={name} />;
                            }) : null
                        }
                    </div>
                    <Button color="primary" className="Btn" onClick={() => props.history.push(`/project/${props.url}`)}>Demo</Button>
                    <a href={props.githubLocation} className="Btn btn btn-primary">Source</a>
                </CardBody>
            </Card>
        </>
    )
}

export default withRouter(card);
