import React from 'react'
//reactstrap
import { Col, Row, Button, Form as FormStrap, FormGroup, Input, Spinner } from 'reactstrap';
//component
import ModalUI from './../Modal/Moda';
//css modules
import classes from './Form.module.css'


const Form = (props) => {

    return (
        <div className={classes.Form} >
            <ModalUI modal={props.modal} toggle={props.toggle} />
            <h3 className={classes.Title}>Let's Get In Touch!</h3>
            <FormStrap onSubmit={props.submit}>
                <Row>
                    <Col md={6}>
                        <FormGroup className={classes.FormGroup}>
                            <Input type="text" name="first_name" id="" placeholder="First Name" onChange={props.setFirstName} value={props.firstName} required />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup className={classes.FormGroup}>
                            <Input type="text" name="last_name" id="" placeholder="Last Name" onChange={props.setLastName} value={props.lastName} required />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className={classes.FormGroup}>
                    <Input type="email" name="email" id="" placeholder="Email" onChange={props.setEmail} value={props.email} required />
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                    <Input type="textarea" name="message" id="" placeholder="Message" onChange={props.setMessage} value={props.message} required />
                </FormGroup>
                <Button color="primary" className="Btn" disabled={props.loading}>{props.loading ? <Spinner color="dark" children='' /> : 'Submit'}</Button>
            </FormStrap>
        </div>
    )
}

export default Form
