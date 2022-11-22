import React, { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

function Pop_up(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
                <button className="log_in" onClick={handleShow}>BOOKING</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration to {props.name} quest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Teamleader's Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>Number of people</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of teammates"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your phone number"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save information
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;