import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CustomForm from './form';
import ErrorText from './errorText';


class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            error: false,
            show: true,
        }
    }

    handleLoginStatus = () => {
        this.setState({
            error: this.state.userName.length === 0
        }, () => {
            this.props.handleLogin(this.state.userName)
        })
    }
    handleChange = (e) => {
        this.setState({
            userName: e.target.value,
        });
    }
    handleClose = () => {
        this.setState({
            show: false,
        })
    }
    render() {
        const { show } = this.state;
        return (<Modal
            show={show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomForm
                    formLabel="User Name:"
                    formControl="email"
                    handleChange={this.handleChange}
                />
                <CustomForm
                    formLabel="Password:"
                    formControl="password"
                />
                {this.state.error && <ErrorText value="Please enter your Username and password" />}
            </Modal.Body>
            <Modal.Footer>

                <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={() => this.handleLoginStatus()}>
                    Login
                </Button>

            </Modal.Footer>
        </Modal>);
    }
}
export default CustomModal;