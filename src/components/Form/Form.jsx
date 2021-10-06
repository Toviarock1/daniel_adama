import React, { useState } from 'react'
//reactstrap
import { Col, Row, Button, Form as FormStrap, FormGroup, Input, Spinner } from 'reactstrap';
//axios
import axios from 'axios';
//component
import ModalUI from './../Modal/Moda';
//css modules
import classes from './Form.module.css'


const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const sendEmailHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const emailDetails = {
            name: `${firstName} ${lastName}`,
            email: email,
            message: message
        }
        axios.post('https://formsubmit.co/ajax/simontoviaadama@gmail.com', emailDetails)
            .then(res => {
                setLoading(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
                setModal(true)
                console.log(res)
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            })
    }

    return (
        <div className={classes.Form} >
            <ModalUI modal={modal} toggle={toggle} />
            <h3 className={classes.Title}>Let's Get In Touch!</h3>
            <FormStrap onSubmit={sendEmailHandler}>
                <Row>
                    <Col md={6}>
                        <FormGroup className={classes.FormGroup}>
                            <Input type="text" name="first_name" id="" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup className={classes.FormGroup}>
                            <Input type="text" name="last_name" id="" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className={classes.FormGroup}>
                    <Input type="email" name="email" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </FormGroup>
                <FormGroup className={classes.FormGroup}>
                    <Input type="textarea" name="message" id="" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message} required />
                </FormGroup>
                <Button className="Btn" disabled={loading}>{loading ? <Spinner color="primary" children='' /> : 'Submit'}</Button>
            </FormStrap>
        </div>
    )
}

export default Form
