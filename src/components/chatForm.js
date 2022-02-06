import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ChatForm(props) {
    const { sendMessage, handleChange } = props;
    return (
        <>
            <Form.Control action="#" id="chat-form" bsPrefix="form" type="text" size="lg" placeholder="Enter message" onChange={handleChange} />
            <Button class="btn" type="submit" onClick={sendMessage}>Send</Button>
        </>
    )
}