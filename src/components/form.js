import React from 'react';
import { Form } from 'react-bootstrap';

export default function CustomForm(props) {
    const { formLabel, formControl, placeholder, formText, handleChange } = props;
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {formLabel && <Form.Label>{formLabel}</Form.Label>}
                <Form.Control type={formControl} placeholder={placeholder} onChange={handleChange} />
                {formText && <Form.Text className="text-muted">{formText}</Form.Text>}

            </Form.Group>
        </>

    )
}