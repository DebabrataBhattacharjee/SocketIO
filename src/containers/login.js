/* eslint-disable no-restricted-globals */
import React from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import {
    saveUser
} from '../store/LoginScreen/action';
import { loginNewUser } from '../utils/app';
import CustomModal from '../components/modal';
import routes from '../static/routes';

const handleLogin = (props, userName, navigate) => {
    props.saveUser(userName);
    loginNewUser(userName);
    userName.length && navigate(routes.chatPage);
}

function Login(props) {
    const navigate = useNavigate();
    return (
        <CustomModal
            handleClose={() => { }}
            handleLogin={(userName) => handleLogin(props, userName, navigate)}
        />
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (payload) => dispatch(saveUser(payload)),
    };
}


export default connect(null, mapDispatchToProps)(Login)