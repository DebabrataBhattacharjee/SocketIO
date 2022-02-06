import React from 'react';
import { connect } from 'react-redux';
import ChatForm from '../components/chatForm';
import { sendMessage } from '../utils/app';

class ChatScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            textMessage: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            textMessage: e.target.value
        })
    }
    render() {
        return (
            <>
                <div class="msg-view">
                </div>
                <div class="chat-compose">
                    < ChatForm
                        handleChange={this.handleChange}
                        sendMessage={() => sendMessage(this.state.textMessage)}
                    />
                </div>
            </>);
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.login.userName,
    }
}
export default connect(mapStateToProps)(ChatScreen);