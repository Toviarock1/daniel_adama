import React from 'react';
//reactstrap
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalUI = (props) => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    {props.content}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalUI;