import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const SendMessageForm = ({ sendMessage }) => {
    const [textArea, setTextArea] = useState();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        sendMessage(textArea);
        setTextArea('');
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormGroup>
                <Label for="chat">
                    Text Area
                </Label>
                <Input
                    id="chat"
                    name="chat"
                    type="chat"
                    onChange={(e) => setTextArea(e.target.value)}
                    value={textArea}
                />
            </FormGroup>
            <Button color='secondary' type='submit' disabled={!textArea}>
                Send
            </Button>
        </Form>
    )
}

export default SendMessageForm