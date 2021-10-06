import React from 'react';
//reactstrap
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalUI = (props) => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Thanks For Your Email</ModalHeader>
                <ModalBody>
                    We have received your email and we will get back to you shortly
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalUI;