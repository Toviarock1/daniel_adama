import React from 'react';
//reactrap
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//component
import CardBadge from './CardBadge/CardBadge'
//image
import ProjectImg from './../../assets/images/project-image.jpg';
//css modules
import classes from './Card.module.css';

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
                <CardImg className={classes.CardImg} top width="100%" src={ProjectImg} alt="Card image cap" />
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
                    <Button color="primary" className="Btn">{props.btn}</Button>
                    <a href={props.location} className="Btn btn btn-primary">{props.btn2}</a>
                </CardBody>
            </Card>
        </>
    )
}

export default card;
