import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const WaitingRoom = ({ joinChatRoom }) => {
    const [userName, setUserName] = useState()
    const [chatRoom, setChatRoom] = useState()

    const handleSubmitForm = (e) => {
        {
            e.preventDefault()
            joinChatRoom(userName, chatRoom)
        }
    }


    return (
        <Form className='m-5' onSubmit={handleSubmitForm}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="User">
                            User
                        </Label>
                        <Input
                            id="User"
                            name="User"
                            placeholder="User"
                            type="User"
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="chatRoom">
                            Chat Room
                        </Label>
                        <Input
                            id="chatRoom"
                            name="chatRoom"
                            placeholder="Chat Room"
                            type="chatRoom"
                            onChange={(e) => { setChatRoom(e.target.value) }}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button type='submit' className='d-flex justify-content-center mx-auto' color='warning'>
                Join
            </Button>
        </Form>
    )
}

export default WaitingRoom