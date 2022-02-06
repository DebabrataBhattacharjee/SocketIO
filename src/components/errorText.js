import React from 'react';

export default function ErrorText(props) {
    const { value } = props;
    return (
        <p className='error' style={{ color: 'red' }}>{value}</p>
    )
}